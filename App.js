import { View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navigation from './app/navigation/Navigation';
import BottomTabNavigation from './app/navigation/BottomTabNavigation';
import * as Font from 'expo-font'
import React, { useEffect, useState } from 'react';

const fetchFonts = () => {
  return Font.loadAsync({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Moul': require("./assets/fonts/Moul-Regular.ttf"),
    'Inter': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-600': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf')
  });
};


export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);
  const [isIntro, setIsIntro] = useState(true);

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) {
    return <ActivityIndicator />;
  }



  return (

    <View className="bg-black flex-1 justify-center align-middle">
      {/* {isIntro ? <Navigation handleStateChange={handleStateChange} /> : <BottomTabNavigation handleStateChange={handleStateChange} />} */}
      {isIntro ? <Navigation handleClickShowBottomNavigator={() => setIsIntro(false)} />
        :
        <BottomTabNavigation />}
      <StatusBar theme="auto"></StatusBar>
    </View>
  )
}