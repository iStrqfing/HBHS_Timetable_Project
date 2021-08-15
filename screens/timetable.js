import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {styles, stylesTimetableScreen} from '../styles';

const TimetableScreen = ({navigation}) => {
  const [text, setSubject] = useState('');
  const AddSubject = () =>
(
    Alert.alert(
      text,
      "Subject has been added",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    ),
    setSubject("")  
);
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Timetable</Text>
        
        <View style={styles.btnContainer}>
        <TextInput
        style={stylesTimetableScreen.txtSubject}
        placeholder="Enter Subject..." 
        onChangeText={text => setSubject(text)} 
        defaultValue={text}/>
        <Button onPress={() => AddSubject()} title="Add Subject" />
        </View>      
     </View>
  )
};

export default TimetableScreen;