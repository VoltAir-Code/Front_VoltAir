import { Button, View } from "react-native"

export const Navigation = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>


            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />

            <Button
                title="CreateAccount"
                onPress={() => navigation.navigate("CreateAccount")}
            />

            <Button
                title="ForgotPassword"
                onPress={() => navigation.navigate("ForgotPassword")}
            />

            <Button
                title="ResetPassword"
                onPress={() => navigation.navigate("ResetPassword")}
            />
            <Button
                title="EmailVerify"
                onPress={() => navigation.navigate("EmailVerify")}
            />

            <Button
                title="Home"
                onPress={() => navigation.navigate("Home")}
            />

            <Button 
                title="MapScreen"
                onPress={() => navigation.navigate("MapScreen")}
            />

        </View>
    )
}