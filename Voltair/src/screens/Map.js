import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { PROVIDER_DEFAULT } from "react-native-maps";
import MapView, { Marker } from "react-native-maps";

import * as Location from "expo-location";
import { useEffect, useRef, useState } from "react";
import GlobalApi, { API_KEY } from "../../GlobalApi";
import MapViewDirections from "react-native-maps-directions";
import axios from "axios";

export default function Map({ navigation }) {
  const [initialPosition, setInitialPosition] = useState(null);
  const [chargingStations, setChargingStations] = useState([]);
  const [chargingPosition, setChargingPosition] = useState(null);
  const [distance, setDistance] = useState(null)
  const mapReference = useRef(null);

  async function getCurrentLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denied");
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    setInitialPosition(location);
  }

  async function fetchChargingStations() {
    if (!initialPosition) return;

    const { latitude, longitude } = initialPosition.coords;

    const data = {
      includedTypes: ["electric_vehicle_charging_station"],
      maxResultCount: 20,
      locationRestriction: {
        circle: {
          center: {
            latitude: latitude,
            longitude: longitude,
          },
          radius: 5000.0,
        },
      },
    };
    GlobalApi.NewNearByPlace(data).then((resp) => {
      setChargingStations(resp.data.places);
    });
  }

  async function calcDistance() {
    const Station = chargingStations;
    for (const station of Station) {
      const destination = `${station.location.latitude}, ${station.location.longitude}`;
      const origin = `${initialPosition.coords.latitude}, ${initialPosition.coords.longitude}`;
      const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${API_KEY}`;
      try {
        const response = await axios.get(url);
        const result = response.data;
        const distanceInMeters = result.rows[0].elements[0].distance.value;
        console.log(distanceInMeters);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    calcDistance();
    console.log(distance);
  }, [])

  useEffect(() => {
    fetchChargingStations();
  }, [initialPosition]);

  return (
    <>
      {initialPosition ? (
        <>
          <MapView
            ref={mapReference}
            style={styles.map}
            showsUserLocation={true}
            initialRegion={{
              latitude: initialPosition.coords.latitude,
              longitude: initialPosition.coords.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
            provider={PROVIDER_DEFAULT}
          >
            <MapViewDirections
              origin={initialPosition.coords}
              // destination={{
              //   latitude: chargingStations[18].location.latitude,
              //   longitude:  chargingStations[18].location.longitude,
              //   longitudeDelta: 0.005,
              //   latitudeDelta: 0.005
              // }}
              mode="DRIVING"
              optimizeWaypoints={true}
              precision={"high"}
              apikey={API_KEY}
              strokeColor="#EC6F2C"
              strokeWidth={5}
            />
            {chargingStations.map((station) => (
              <Marker
                key={Math.random()}
                coordinate={{
                  latitude: station.location.latitude,
                  longitude: station.location.longitude,
                }}
                title={station.displayName.text}
                description={station.vicinity}
              />
            ))}
          </MapView>
        </>
      ) : (
        <View style={styles.container}>
          <Text>Localização não encontrada</Text>
          <ActivityIndicator />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  map: {
    flex: 1,
    zIndex: 0,
  },
});
