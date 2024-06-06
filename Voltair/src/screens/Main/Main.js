import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../Home/Home"
import { EditCar } from "../EditCar/EditCar"
import { ButtonHome, ButtonMaps, ButtonProfile, ImageCar, ImageMap, ImageRay } from "../../components/Button/Button"
import { MapScreen } from "../MapScreen/MapScreen"
import { SubTitle } from "../../components/Title/Style"
import { useState } from "react"
import { Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator()

export const Main = ({ navigation }) => {
    const [color, setColor] = useState("#FFFFFF")

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#313131",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    height: "15%",
                    paddingTop: 10

                },
                tabBarIcon: ({ focused }) => {
                    if (route.name === "Home") {
                        return (
                            <>
                                <ButtonHome borderColor={color}>
                                    {/* <ImageRay source={require("../../../assets/Logo/LogoRay.png")} /> */}
                                    <Ionicons name="flash" size={28} color="#F2732E"/>
                                </ButtonHome>
                                <SubTitle color={color} margin={"5px 0px 0px -5% "}>Home</SubTitle>
                            </>
                        )
                    }
                    else if (route.name === "Meu Carro") {
                        return (
                            <>
                                <ButtonProfile borderColor={color}>
                                    <ImageCar source={require("../../../assets/Img/Volante.png")} />
                                </ButtonProfile>
                                <SubTitle color={color} margin={"5px -5% 0px 0px "}>Meu Carro</SubTitle>
                            </>
                        )
                    }
                    else {
                        return (
                            null
                        )
                    }
                }
            })}

        >
            <BottomTab.Screen
                name="Home"
                component={Home}
                listeners={{
                    focus: () => {
                        setColor("#FFFFFF")
                    }
                }}
            />

            <BottomTab.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                    tabBarIcon: () =>
                    (
                        <>
                        <ButtonMaps onPress={() => navigation.navigate("MapScreen")}>
                            <ImageMap source={require("../../../assets/Img/MapPoint.png")} />
                        </ButtonMaps>
                        <SubTitle color={color} margin={"60px 0px 0px 0px"}>Mapa</SubTitle>
                        </>
                    )
                }}
            />

            <BottomTab.Screen
                name="Meu Carro"
                component={EditCar}
                listeners={{
                    focus: () => {
                        setColor("#313131")
                    }
                }}
                options={{
                    tabBarStyle: {
                        backgroundColor: "#FFFFFF",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        height: "15%",
                        paddingTop: 10,
                        position: "absolute"
                    }
                }}
            />

        </BottomTab.Navigator>
    )
}