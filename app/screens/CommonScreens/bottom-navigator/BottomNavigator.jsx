import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NewApplication from '../../new-application/NewApplication'
import MyAnnouncements from '../../my-announcements/MyAnnouncements'
import Start from '../../start/Start'
import { Text, View } from 'react-native'
import Applications from '../../Applications/Applications'
// Импортируйте другие компоненты, которые будут использоваться в навигации

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
		height: 80,
		backgroundColor: '#000'
	}
}

const BottomNavigator = () => {
	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen
				name='applications'
				component={Applications}
				options={
					{
						// tabBarIcon: ({ focused }) => <Trailer />
					}
				}
			/>
			{/* <Tab.Screen name='new-' component={MyAnnouncements} />
			<Tab.Screen name='new-a' component={Start} />
			<Tab.Screen name='new-a' component={Start} />
			<Tab.Screen name='my-announcements' component={MyAnnouncements} /> */}
			{/* Добавьте другие Screen компоненты  */}
		</Tab.Navigator>
	)
}

export default BottomNavigator
