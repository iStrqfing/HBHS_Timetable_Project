import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

import {styles, stylesSubjectOverviewScreen} from '../styles';
//import {subjects} from './timetable';

const SubjectOverviewScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Subject Overview</Text>
        {/* {subjects.map((subjectItem, index) => { //Map all subjects into their own overview          
        // Subject Overview Structure
          return (
            <View style={{}}>
              <Text style={{}}>{subjectItem}</Text>       
            </View>
          );
        })} */}
     </View>
  )
};

export default SubjectOverviewScreen;