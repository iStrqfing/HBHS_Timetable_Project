import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

import SplashScreen from './screens/splash';
import HomeScreen from './screens/home';
import TimetableScreen from './screens/timetable';
import DiaryScreen from './screens/diary';
import SubjectOverviewScreen from './screens/subject_overview';

const Stack = createNativeStackNavigator();

const App=({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={DrawerNavigation} />
        <Stack.Screen name="Timetable" component={DrawerNavigation} />
        <Stack.Screen name="Diary" component={DrawerNavigation} />
        <Stack.Screen name="SubjectOverview" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//Header shouldnt show on home screen
const Drawer = createDrawerNavigator();

 const DrawerNavigation=({navigation}) => {
  return (
      <Drawer.Navigator screenOptions={{
        drawerStyle: {
          backgroundColor: 'rgba(22, 22, 22, 1)',                  
          width: 240,          
          activeTintColor: 'red',
        activeBackgroundColor: '#fff',
        inactiveTintColor: 'blue',
        inactiveBackgroundColor: 'white',
        },
        
        drawerLabelStyle: {color: '#fff',},
        drawerType: 'back',
        overlayColor: 'rgba(12,12,12, 0.99)',
      }}>            
          <Drawer.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
          <Drawer.Screen name="Timetable" component={TimetableScreen} />
          <Drawer.Screen name="Diary" component={DiaryScreen} />
          <Drawer.Screen options={{drawerLabel: "Subject Overview"}}  name="SubjectOverview" component={SubjectOverviewScreen} />     
      </Drawer.Navigator>
  );
}; 

export default App;
