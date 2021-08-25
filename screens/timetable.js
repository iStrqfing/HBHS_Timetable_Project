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

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TimetableScreen = ({navigation}) => {
  const [subjectInput, setSubjectInput] = useState('');
  const [subjects, setSubjects] = useState([]);
  const AddSubject = () =>
{
  if (subjectInput === ""){ //if subjectInput is blank
    Alert.alert("Error:", "Subject can't be blank")
  } else if (subjects.includes(subjectInput)) { // Else if subject already exists
    Alert.alert("Error:", "Subject already exists")
  } else if(subjectInput !== ""){ // Else add new subject to subjects array
    Alert.alert(
      subjectInput,
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
      setSubjects([...subjects, subjectInput]),
      setSubjectInput("");
  } 
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>    
        <Text style={styles.title}>Timetable</Text>
        
        <View style={stylesTimetableScreen.btnContainer}>
        <TextInput
        style={stylesTimetableScreen.txtSubject}
        placeholder="Enter Subject..." 
        onChangeText={text => setSubjectInput(text)} 
        defaultValue={subjectInput}/>
        <TouchableOpacity style={{ flex: 3}} onPress={() => AddSubject()}>
          <Text style={stylesTimetableScreen.btnRemoveSubject}><FontAwesome5 size={ 34 } name={'plus-square'} solid /></Text>
        </TouchableOpacity>
        </View>      
        {subjects.map((subjectItem, index) => { //Map all subjects into their own overview   
        const RemoveSubject = () => { // Function to delete subject          
          Alert.alert(subjectItem, "Are you sure you want to remove this subject", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => setSubjects(subjects.filter((subject) => subject !== subjectItem)) },
          ]);
        };
        // Subject Overview Structure
          return (
            <View style={stylesTimetableScreen.subjectsContainer}>
              <Text style={stylesTimetableScreen.subjectTitle}>{subjectItem}</Text>       
              <TouchableOpacity style={stylesTimetableScreen.removeSubjectContainer} onPress={() => RemoveSubject()}>
                  <Text style={stylesTimetableScreen.btnRemoveSubject}><FontAwesome5 size={ 24 } name={'times-circle'} brand /></Text>
              </TouchableOpacity>
            </View>
          );
        })}
     </View>
    </View>
  )
};

export default TimetableScreen;