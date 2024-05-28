import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { PROVIDER_DEFAULT} from "react-native-maps";
import MapView, { Marker } from "react-native-maps";

import * as Location from "expo-location";
import { useEffect, useRef, useState } from "react";
import GlobalApi from "./GlobalApi";

export default function App() {
  const [initialPosition, setInitialPosition] = useState(null);
  const [chargingStations, setChargingStations] = useState([]);
  const mapReference = useRef(null);

  async function getCurrentLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    setInitialPosition(location);
  }

 
  async function fetchChargingStations() {
    if (!initialPosition) return;


    const { latitude, longitude } = initialPosition.coords;


    const data= {
      "includedTypes": ["electric_vehicle_charging_station"],
      "maxResultCount": 20,
      "locationRestriction": {
        "circle": {
          "center": {
            "latitude": latitude,
            "longitude": longitude},
          "radius": 5000.0
        }
    }
  }
GlobalApi.NewNearByPlace(data).then(resp => {
  
setChargingStations(resp.data.places)
})


    

  }

  useEffect(() => {
    getCurrentLocation();
  }, []);

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
            initialRegion={{
              latitude: initialPosition.coords.latitude,
              longitude: initialPosition.coords.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
            provider={PROVIDER_DEFAULT}
          >
            {chargingStations.map(station => (
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
  },
});
