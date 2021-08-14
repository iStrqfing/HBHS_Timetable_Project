import React, { useRef, useEffect } from 'react';

import {
  Animated,
  Text,
  Image,
  View,
} from 'react-native';

import { styles, stylesSplashScreen } from '../styles';

const SplashScreen = ({navigation}) => (
  setTimeout(function () {
    navigation.navigate('Home');
  }, 5000),
  (
  <View style={styles.container}>
    <FadeInView style={styles.headingContainer}>
      <View style={stylesSplashScreen.headingImg}>
          <Image
            style={stylesSplashScreen.tinyLogo}
            source={require('../images/HBHS_LOGO.png')}
          />
      </View>
      <View style={styles.headingTxt}>
        <Text style={styles.title}>HBHS Timetable</Text>
      </View>
      <View>
        <Text style={stylesSplashScreen.designer}>By Joshua Randall</Text>
      </View>
      </FadeInView>
  </View>
  )
);

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

export default SplashScreen;