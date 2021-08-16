import React from 'react';

import {
  Image,
  Text,
  Button,
  View,
  TouchableOpacity,
} from 'react-native';

import {styles, stylesHomeScreen, stylesDrawerNav} from '../styles';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={stylesHomeScreen.headerContainer}>
          <Image style={stylesDrawerNav.iconIMG}       
              source={require('../images/HBHS_LOGO.png')}
          />
        <Text style={stylesHomeScreen.title}>HBHS Timetable</Text>
    </View>
    <View style={stylesDrawerNav.navigationContainer}>
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
  )
};

export default HomeScreen;