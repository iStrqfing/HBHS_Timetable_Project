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
  
    content: {
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 15,
      width: '80%',
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
    
      btnContainer: {
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        width: '50%',
      },

      btn: {
        color: 'red',
        width: 100,
        textAlign: 'center',
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
    headerContainer: { 
      flexDirection: 'row', 
      justifyContent: "center",   
      alignItems: 'center', 
      marginBottom: 40, 
      marginTop: 60,
  },

    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff',
      marginLeft: 10,
    },
  });

  const stylesTimetableScreen = StyleSheet.create({
    //Adding New Subjects
    btnContainer: {
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '90%',
      borderRadius: 10,
      flexDirection: 'column',

      backgroundColor: 'white',
      height: 350,
    },

    btnExitModalContainer: {
      
    },
    
    btnExitModal: {
      color: 'black',
      textAlign: 'right',
      padding: 5,
    },
    
    txtSubject: {
      color: 'black',
      borderColor: 'grey',
      borderWidth: 1,
      backgroundColor: 'white',
      marginBottom: 10,
      height: 50,
    },  

    periodListContainer: {
      marginBottom: 10,
      borderColor: 'grey',
      borderWidth: 1,
    },  

    periodList: {
      height: 50,
      backgroundColor: 'white',
      
      
    },

    periodListItems: {
      backgroundColor: 'white',
      height: 50,
      color: 'black',
    },

    btnAddSubject: {
      backgroundColor: 'white',
      color: 'black',
      justifyContent: 'center',
      height: 50,
      borderColor: 'grey',
      borderWidth: 1,
    },

    btnAddSubjectTxt: {
      color: 'black',
      textAlign: 'center',
      fontSize: 18,   
    },

    //Displaying Subjects
    subjectsContainer: {
      marginTop: 20,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },

    tableTitle: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 14,
    },

    subjectInformation: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },

    subjectTitle: {
      color: "black",
      fontSize: 14,
    },

    removeSubjectContainer: {
      paddingLeft: 8,
    },

    btnRemoveSubject: {
      color: '#ff0000',
      textAlign: 'right',
    },
    });

    const stylesDiaryScreen = StyleSheet.create({

    });

    const stylesSubjectOverviewScreen = StyleSheet.create({

    });
  
    const stylesDrawerNav = StyleSheet.create({
      container: {
        flex: 1,       
      },  
      
      inner: {
        
      },

      headerContainer: { 
        flexDirection: 'row',    
        alignItems: 'center', 
        width: '80%', 
        marginBottom: 20, 
        marginTop: 60,
    },

      title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
      },
      
      iconIMG: {
        width: 60,
        height: 60,
      },

      navigationContainer: {
        
        alignItems: 'center',
      },

      btn: {
        width: 210,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 10,   
        justifyContent: "center",      
      },

      btnTxt: {
        textAlign: 'left',
        paddingLeft: 15,
        color: 'rgb(12,12,12)',
        fontSize: 17,       
      }
    });
  

  export {styles, stylesSplashScreen, stylesHomeScreen, stylesTimetableScreen, stylesDiaryScreen, stylesSubjectOverviewScreen, stylesDrawerNav};