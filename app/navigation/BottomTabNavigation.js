import Trailer from './../../assets/bottom-navigator/Trailer.svg'
import Menu from './../../assets/bottom-navigator/Menu.svg'
import More from "../screens/more/More";
import Plus from './../../assets/bottom-navigator/Plus.svg'
import Message from './../../assets/bottom-navigator/SpeechBubble.svg'
import Applications from "../screens/Applications/Applications";
import Messages from "../screens/messages/Messages";
import Profile from './../../assets/bottom-navigator/Customer.svg'
import { View } from "react-native";
import MyAnnouncements from "../screens/my-announcements/MyAnnouncements";
import NewApplication from "../screens/new-application/NewApplication";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Makes from '../screens/new-application/makes/Makes';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import ChooseCharacteristic from '../screens/new-application/choose-characteristic/ChooseCharacteristic';
import Announcement from '../screens/my-announcements/announcement/Announcement';
import ApplicationCar from '../screens/application/ApplicationCar';
import ApplicationSparePart from '../screens/application/ApplicationSparePart';
import ChangeProfile from '../screens/more/change-profile/ChangeProfile';
import Support from '../screens/more/support/Support';




const Tab = createBottomTabNavigator()
const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 65,
        backgroundColor: '#000',
        borderTopWidth: 0
    }
}

const NewApplicationStack = createStackNavigator()
const MyAnnouncementsStack = createStackNavigator()
const ApplicationsStack = createStackNavigator()
const MoreStack = createStackNavigator()

const NewApplicationStackScreen = () => {
    return (
        <NewApplicationStack.Navigator>
            <NewApplicationStack.Screen name='new-application' options={{ headerShown: false }}
                component={NewApplication} />
            <NewApplicationStack.Screen name='makes' options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS }}
                component={Makes} />
            <NewApplicationStack.Screen name='choose-characteristic' options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS }}
                component={ChooseCharacteristic} />
        </NewApplicationStack.Navigator>

    )
}

const MyAnnouncementsStackScreen = () => {
    return (
        <MyAnnouncementsStack.Navigator>
            <MyAnnouncementsStack.Screen name='my-announcements' component={MyAnnouncements} options={{ headerShown: false }} />
            <MyAnnouncementsStack.Screen name='announcement' component={Announcement} options={{ headerShown: false }} />
        </MyAnnouncementsStack.Navigator>
    )
}

const ApplicationsStackScreen = () => {
    return (
        <ApplicationsStack.Navigator>
            <ApplicationsStack.Screen name='applications' component={Applications} options={{ headerShown: false }} />
            <ApplicationsStack.Screen name='current-application-car' component={ApplicationCar} options={{ headerShown: false }} />
            <ApplicationsStack.Screen name='current-application-sparepart' component={ApplicationSparePart} options={{ headerShown: false }} />
        </ApplicationsStack.Navigator>
    )
}

const MoreStackScreen = () => {
    return (
        <MoreStack.Navigator>
            <MoreStack.Screen name='more' component={More} options={{ headerShown: false }} />
            <MoreStack.Screen name='change-profile' component={ChangeProfile} options={{ headerShown: false }} />
            <MoreStack.Screen name='support' component={Support} options={{ headerShown: false }} />
        </MoreStack.Navigator>
    )
}

const BottomTabNavigation = ({ handleStateChange }) => {
    return (
        <NavigationContainer onStateChange={handleStateChange}>

            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen
                    name='applications'
                    component={ApplicationsStackScreen}
                    options={{
                        tabBarIcon: ({ focused }) => <Trailer />
                    }}
                />
                <Tab.Screen name='my-announcements' component={MyAnnouncementsStackScreen} options={{ tabBarIcon: ({ focused }) => <Menu /> }} />
                <Tab.Screen name='new-application' component={NewApplicationStackScreen} options={{ tabBarIcon: ({ focused }) => <View className="mb-3"><Plus /></View> }} />
                <Tab.Screen name='messages' component={Messages} options={{ tabBarIcon: ({ focused }) => <Message /> }} />
                <Tab.Screen name='more' component={MoreStackScreen} options={{ tabBarIcon: ({ focused }) => <Profile /> }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabNavigation