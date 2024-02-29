import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro from "../screens/intro/Intro";
import ProductInfo from "../screens/product-info/ProductInfo";
import Start from "../screens/start/Start";
import PhoneNumber from "../screens/phone-number/PhoneNumber";
import EnterCode from "../screens/enter-code/EnterCode";
import ChooseProfile from "../screens/choose-profile/ChooseProfile";
import AuthSaler from "../screens/auth/auth-saler/AuthSaler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";

const Stack = createNativeStackNavigator()

const Navigation = ({ handleStateChange, handleClickShowBottomNavigator }) => {
    return (
        <NavigationContainer onStateChange={handleStateChange}>
            <Stack.Navigator>
                <Stack.Screen name="intro" component={Intro} options={{ headerShown: false }} />
                <Stack.Screen name="product-info" component={ProductInfo} options={{ headerShown: false }} />
                <Stack.Screen name="start" component={Start} options={{ headerShown: false }} />
                <Stack.Screen name="phone-number" component={PhoneNumber} options={{ headerShown: false }} />
                <Stack.Screen name="enter-code" component={EnterCode} options={{ headerShown: false }} />
                <Stack.Screen name="choose-profile" component={ChooseProfile} options={{ headerShown: false }} />
                <Stack.Screen name="auth-saler" component={AuthSaler} options={{ headerShown: false }} initialParams={{ handleClickShowBottomNavigator }} />
                {/* <Stack.Screen name="my-announcements" component={MyAnnouncements} options={{ headerShown: false }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation