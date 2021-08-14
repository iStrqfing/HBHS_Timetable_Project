import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Timetable" component={TimetableScreen} />
        <Stack.Screen name="Diary" component={DiaryScreen} />
        <Stack.Screen name="SubjectOverview" component={SubjectOverviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
