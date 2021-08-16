import 'react-native-gesture-handler';
import React from 'react';

import {
    Image,
    Text,
    View,
    TouchableOpacity,
  } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import SplashScreen from './splash';
import HomeScreen from './home';
import TimetableScreen from './timetable';
import DiaryScreen from './diary';
import SubjectOverviewScreen from './subject_overview';

import {styles, stylesDrawerNav} from '../styles';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();

const StackNavigation=({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={DrawerNavigation} />
          <Stack.Screen name="Timetable" component={DrawerNavigation} />
          <Stack.Screen name="Diary" component={DrawerNavigation} />
          <Stack.Screen name="SubjectOverview" component={DrawerNavigation} />
        </Stack.Navigator>
    );
  };

  function CustomDrawerContent({ navigation }) {   
    return (
      <View style={stylesDrawerNav.container}>
          <View style={stylesDrawerNav.inner}>
                <View style={stylesDrawerNav.headerContainer}>
                    <Image style={stylesDrawerNav.iconIMG}       
                        source={require('../images/HBHS_LOGO.png')}
                    />
                    <Text style={stylesDrawerNav.title}>HBHS Timetable</Text>
                </View>
            
                <View style={stylesDrawerNav.navigationContainer}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Home')}} style={stylesDrawerNav.btn}>               
                        <Text style={stylesDrawerNav.btnTxt}><FontAwesome5 size={ 22 } name={'home'} brand /> Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate('Timetable')}} style={stylesDrawerNav.btn}>
                        <Text style={stylesDrawerNav.btnTxt}><FontAwesome5 size={ 22 } name={'table'} brand /> Timetable</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate('Diary')}} style={stylesDrawerNav.btn}>
                        <Text style={stylesDrawerNav.btnTxt}><FontAwesome5 size={ 22 } name={'book'} brand /> Diary</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate('SubjectOverview')}} style={stylesDrawerNav.btn}>
                        <Text style={stylesDrawerNav.btnTxt}><FontAwesome5 size={ 22 } name={'graduation-cap'} brand /> Subject Overview</Text>
                    </TouchableOpacity>
                </View>
          </View>
          
      </View>
    );
  }
  
  //Header shouldnt show on home screen
  const Drawer = createDrawerNavigator();
  
   const DrawerNavigation=({navigation}) => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{
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

  export default StackNavigation;