import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../Home/Home"
import { EditCar } from "../EditCar/EditCar"
import { ButtonHome, ButtonMaps, ButtonProfile, ImageCar, ImageMap, ImageRay } from "../../components/Button/Button"
import { MapScreen } from "../MapScreen/MapScreen"
import { SubTitle } from "../../components/Title/Style"
import { useEffect, useState } from "react"
import { Ionicons } from '@expo/vector-icons';
import { Keyboard } from "react-native"
import Mapa from "../../components/icons/Mapa"
import Raio from "../../components/icons/Raio"
import Volante from "../../components/icons/Volante"
import { useDecodeToken } from "../../utils/Auth"



const BottomTab = createBottomTabNavigator()

export const Main = ({ navigation, route }) => {
    const [color, setColor] = useState("#FFFFFF")
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [photoUri, setPhotoUri] = useState(null);
    const [progressValue, setProgressValue] = useState(null);
    const [stateProgressValue, setStateProgressValue] = useState(null)

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    useEffect(() => {
        if (route.params?.photoUri) {
            setPhotoUri(route.params.photoUri);
        }
        else if (route.params?.progressValue) {
            setProgressValue(route.params?.progressValue)
            setStateProgressValue(route.params?.setProgressValue)
        }
    }, [route.params?.photoUri || route.params?.progressValue]);

    return (
        <BottomTab.Navigator
            initialRouteName={route.params != null && route.params.photoUri != null ? "Meu Carro" : "Home"}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
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
                                    {/* <Ionicons name="flash" size={28} color="#F2732E" /> */}
                                    <Raio size={28} color={"#F2732E"} />
                                </ButtonHome>
                                <SubTitle color={color} margin={"5px 0px 0px -5% "}>Home</SubTitle>
                            </>
                        )
                    }
                    else if (route.name === "Meu Carro") {
                        return (
                            <>
                                <ButtonProfile borderColor={color}>

                                    <Volante color={"#F2732E"} size={28} margin={10} />
                                    {/* <ImageCar source={require("../../../assets/Img/Volante.png")} /> */}


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
                children={() => <Home progressValue={progressValue} setProgressValue={stateProgressValue}/>}
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
                    tabBarButton: () => {
                        if (isKeyboardVisible) {
                            return null;
                        }
                        return (
                            <>


                                <ButtonMaps onPress={() => navigation.navigate("MapScreen")}>
                                    <Mapa size={60} color={"#313131"} margin={10} />
                                    {/* <ImageMap source={require("../../../assets/Img/MapPoint.png")} /> */}
                                </ButtonMaps>
                                <SubTitle color={color} margin={"60px 0px 0px 0px"}>Mapa</SubTitle>
                            </>
                        )
                    }
                }}
            />

            <BottomTab.Screen
                name="Meu Carro"
                children={() => <EditCar photoUri={photoUri} navigation={navigation}/>}
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