import React from 'react';

import {
  StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgb(12,12,12)',
      padding: 8,
    },
  
    headingContainer: {
      width: '80%',
      display: 'flex',
      marginLeft: 'auto',
        marginRight: 'auto',
    },
  
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
      },   
    
  });

  const stylesSplashScreen = StyleSheet.create({
    headingImg: {
        width: '100%',
        display: 'flex',
    },

    tinyLogo: {
        width: 125,
        height: 125,
        marginLeft: 'auto',
        marginRight: 'auto',
        resizeMode:'contain',
      },
    
      designer: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
      },
    });


  const stylesHomeScreen = StyleSheet.create({
    btnMenu: {
        color: '#f194ff',
        marginBottom: 15,
      },
    
      btnContainer: {
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        width: '50%',
      },
  });

  const stylesTimetableScreen = StyleSheet.create({

    });

    const stylesDiaryScreen = StyleSheet.create({

    });

    const stylesSubjectOverviewScreen = StyleSheet.create({

    });
  
  export {styles, stylesSplashScreen, stylesHomeScreen, stylesTimetableScreen, stylesDiaryScreen, stylesSubjectOverviewScreen};