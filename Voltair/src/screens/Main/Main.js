import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../Home/Home"
import { EditCar } from "../EditCar/EditCar"
import { ButtonHome, ButtonMaps, ButtonProfile, ImageCar, ImageMap, ImageRay } from "../../components/Button/Button"
import { MapScreen } from "../MapScreen/MapScreen"

const BottomTab = createBottomTabNavigator()

export const Main = ({ navigation }) => {
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
                            <ButtonHome>
                                <ImageRay source={require("../../../assets/Logo/LogoRay.png")} />
                            </ButtonHome>
                        )
                    }
                    else if (route.name === "Meu Carro") {
                        return (
                            <ButtonProfile>
                                <ImageCar source={require("../../../assets/Img/Volante.png")} />
                            </ButtonProfile>
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
            />

            <BottomTab.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                    tabBarButton: () => 
                        (

                            <ButtonMaps onPress={() => navigation.navigate("MapScreen")}>
                                <ImageMap source={require("../../../assets/Img/MapPoint.png")} />
                            </ButtonMaps>
                        )
                }}
            />

            <BottomTab.Screen
                name="Meu Carro"
                component={EditCar}
            />

        </BottomTab.Navigator>
    )
}