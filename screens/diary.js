import React from 'react';

import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

import {styles, stylesDiaryScreen} from '../styles';

const DiaryScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Diary</Text>
        <View style={styles.btnContainer}>
          <Button onPress={() => navigation.navigate('Splash')} title="SplashScreen" />
        </View>    
     </View>
  )
};

export default DiaryScreen;