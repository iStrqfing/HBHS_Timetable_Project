import React from 'react';

import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

import {styles, stylesHomeScreen} from '../styles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Menu</Text>
    <View style={stylesHomeScreen.btnContainer}>
      <View style={stylesHomeScreen.btnMenu}>
        <Button color="#e50000" title="Timetable" onPress={() => navigation.navigate('Timetable')}/>
      </View>
      <View style={stylesHomeScreen.btnMenu}>
        <Button
          color="#e50000"
          title="Diary"
          onPress={() => navigation.navigate('Diary')}
        />
      </View>
      <View style={stylesHomeScreen.btnMenu}>
        <Button
          color="#e50000"
          title="Subject Overview"
          onPress={() => navigation.navigate('SubjectOverview')}
        />
      </View>
    </View>
  </View>
  )
};

export default HomeScreen;