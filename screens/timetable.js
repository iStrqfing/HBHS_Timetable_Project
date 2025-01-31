import React, { useState, useEffect } from 'react';

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

import {styles, stylesTimetableScreen} from '../styles';

import { List, Title, Modal, Portal, Provider, DataTable } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AsyncStorage from '@react-native-async-storage/async-storage';



const TimetableScreen = ({navigation}) => {
  // Stores subjects and their information
  const [subjectInput, setSubjectInput] = useState('');
  const [subjects, setSubjects] = useState([
    //{subjectName: 'Maths', subjectPeriod: 1},
    //{subjectName: 'Science', subjectPeriod: 2},
    //{subjectName: 'English', subjectPeriod: 3},
  ]);
  const AddSubject = () => {
    if (subjectInput === ""){ //if subjectInput is blank
      Alert.alert("Error:", "Subject can't be blank")
    } else if (subjects.filter((subject) => subject.subjectName === subjectInput).length === 0){ //Else if subject is not a repeat
      if (period === 'Select Period') { // If period has not been selected
        Alert.alert("Error:", "Please select a period")
      } else if (subjects.filter((subject) => subject.subjectPeriod === period).length === 0){ // Else if period is not a repeat
          Alert.alert(subjectInput, "Subject has been added");
          let tempSubjectsToSave = [...subjects, {subjectName: subjectInput, subjectPeriod: period}] // Save subject info temporarily
          tempSubjectsToSave.sort((a, b) => (a.subjectPeriod > b.subjectPeriod) ? 1 : -1) // Sort temp subject info
          setSubjects(tempSubjectsToSave) // Reorder the array in order of smallest period
          setSubjectInput("");
          //storeData(subjects);
          setPeriod('Select Period');
        } else { // Else if period is a repeat
          Alert.alert("Error:", "Period is already in use")
        }
    } else { // Else if subject is a repeat
      Alert.alert("Error:", "Subject already exists")
    }  
  };
  
  //Period List Variables
  const [period, setPeriod] = useState('Select Period');
  const [expanded, setExpanded] = React.useState(false);
  const selectPeriod = (periodName) => {
    setPeriod(periodName);
    setExpanded(!expanded);
  };
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false); 
  
  const getData = async () => { // Get the stored subjects from async storage
    try {
      const jsonValue = await AsyncStorage.getItem('storedSubjects')
      if (jsonValue !== null) {
        let fetchedSubjects = JSON.parse(jsonValue);
        
        setSubjects(fetchedSubjects);
        
      }
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => { // Load data from async storage and set day to current day
      getData();   
      setStorageLoaded(true); 
      var today = new Date();
      today = today.getDay();
      if (today < 5 && today !== 0){
        setDay(parseInt(today))
      }     
  },[])

  const [storageLoaded, setStorageLoaded] = React.useState(false);
  const storeData = async () => { // Store subjects into async storage
    try {
      const jsonValue = JSON.stringify(subjects)
      await AsyncStorage.setItem('storedSubjects', jsonValue)
      console.log('Saved Subjects: ',jsonValue);
    } catch (e) {
      console.log(e);
    }
  } 

  useEffect(() => { // Store subjects array into async storage everytime subjects array is updated
    if (subjects !== null && storageLoaded === true) {     
      storeData();
    }  
  },[subjects])
  

  // Setting subjects up that are displayed in the timetable //
  const [subjectsToDisplay, setSubjectsToDisplay] = useState([]);

  const [day, setDay] = useState(1);

  const schoolDays = [ // Array of school days and their period offsets
     {dayOfWeek: 'Monday', periodOffset: 0},
     {dayOfWeek: 'Tuesday', periodOffset: 1},
     {dayOfWeek: 'Wednesday', periodOffset: 2},
     {dayOfWeek: 'Thursday', periodOffset: 3},
     {dayOfWeek: 'Friday', periodOffset: 4},
  ];

  const displaySubjects = () => { // Updates the displayed subjects with their new information
    var tempSubjectsToDisplay = [];
    for (let i = 0; i < subjects.length; i++) {
      let newPeriod =
        parseInt(subjects[i].subjectPeriod) + schoolDays[day - 1].periodOffset;
      if (newPeriod !== 6) { // If period is not equal to 6
        if (newPeriod > 6) { // If period is greater than 6
          newPeriod = newPeriod - 6; // -6 from period number to put it back on timetable
        }
        tempSubjectsToDisplay = [...tempSubjectsToDisplay, {subjectName: subjects[i].subjectName, subjectPeriod: newPeriod}];
        tempSubjectsToDisplay.sort((a, b) => (a.subjectPeriod > b.subjectPeriod) ? 1 : -1) // Sort subjects by period
      }
    }
    setSubjectsToDisplay(tempSubjectsToDisplay);
  }

  useEffect(() => { // Update displayed subjects when the day or subjects array changes
    displaySubjects();
  },[day, subjects])

  const nextDay = () => { // Sets the day to the next day
    if (day < 5) {
      setDay(day + 1);
    } else {
      setDay(1);
    }   
  };

   const prevDay = () => { // Sets the day to the previous day
    if (day > 1) {
      setDay(day - 1);
    } else {
      setDay(5);
    }   
   }

  return (
    <Provider>     
      <View style={styles.container}>
        <View style={styles.content}>    
          <Text style={styles.title}>Timetable</Text>       
          <Portal>
            <Modal visible={visible} onDismiss={hideModal} >                     
              <View style={stylesTimetableScreen.btnContainer}>
                <View style={stylesTimetableScreen.btnExitModalContainer}>
                  <TouchableOpacity onPress={() => hideModal()}>
                    <Text style={stylesTimetableScreen.btnExitModal}><FontAwesome5 size={ 32 } name={'times-circle'} brand /></Text>
                  </TouchableOpacity>
                </View>  
                <ScrollView style={{height: '70%'}}>
                  <View style={styles.content}>  
                    <Title style={{color: 'black', marginBottom: 20,}}>Add Subjects:</Title>
                    <TextInput
                    style={stylesTimetableScreen.txtSubject}
                    placeholder="Enter Subject..." placeholderTextColor="grey"
                    onChangeText={text => setSubjectInput(text)} 
                    defaultValue={subjectInput}/>
                    <View style={stylesTimetableScreen.periodListContainer}>
                      <List.Accordion style={stylesTimetableScreen.periodList} titleStyle={{color: 'black', fontSize: 14,}} expanded={expanded} onPress={() => setExpanded(!expanded)} title={period} id="1">
                        <List.Item style={stylesTimetableScreen.periodListItems} titleStyle={{color: 'black'}} key='1' onPress={() => selectPeriod('1')} title="Period 1" />
                        <List.Item style={stylesTimetableScreen.periodListItems} titleStyle={{color: 'black'}} key='2' onPress={() => selectPeriod('2')} title="Period 2" />
                        <List.Item style={stylesTimetableScreen.periodListItems} titleStyle={{color: 'black'}} key='3' onPress={() => selectPeriod('3')} title="Period 3" />
                        <List.Item style={stylesTimetableScreen.periodListItems} titleStyle={{color: 'black'}} key='4' onPress={() => selectPeriod('4')} title="Period 4" />
                        <List.Item style={stylesTimetableScreen.periodListItems} titleStyle={{color: 'black'}} key='5' onPress={() => selectPeriod('5')} title="Period 5" />
                        <List.Item style={stylesTimetableScreen.periodListItems} titleStyle={{color: 'black'}} key='6' onPress={() => selectPeriod('6')} title="Period 6" />
                      </List.Accordion>
                    </View>
                    <TouchableOpacity style={stylesTimetableScreen.btnAddSubject} onPress={() => AddSubject()}>
                      <Text style={stylesTimetableScreen.btnAddSubjectTxt}>Add Subject</Text>
                    </TouchableOpacity>
                  </View>   
                </ScrollView>                                  
              </View>
            </Modal>
          </Portal>                   
          <View style={stylesTimetableScreen.subjectsContainer}>                
            <View style={{backgroundColor: 'white'}}>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>
                    <Text style={stylesTimetableScreen.tableTitle}>Subject
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title style={{color: 'black'}} sortDirection='descending' numeric>
                    <Text style={stylesTimetableScreen.tableTitle}>
                      Period
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title style={stylesTimetableScreen.tableTitle} numeric>
                    <Text style={stylesTimetableScreen.tableTitle}>
                      Remove
                    </Text>
                  </DataTable.Title>
                </DataTable.Header>
                {subjectsToDisplay.map((subjectItem) => { //Map all subjects into their own overview   
                const RemoveSubject = () => { // Function to delete subject          
                  Alert.alert(subjectItem.subjectName, "Are you sure you want to remove this subject", [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    { text: "OK", onPress: () => {
                      setSubjects(subjects.filter((subject) => subject.subjectName !== subjectItem.subjectName)) 
                    }},
                  ]);
                };

                
                // Subject Overview Structure
                  return (
                    <DataTable.Row>
                      <DataTable.Cell>
                        <View style={stylesTimetableScreen.subjectInformation}>
                          <TouchableOpacity onPress={() => {navigation.navigate('SubjectOverview', subjectItem)}}>
                            <Text style={stylesTimetableScreen.subjectTitle}>{subjectItem.subjectName}</Text>  
                          </TouchableOpacity>                         
                        </View>
                      </DataTable.Cell>
                      <DataTable.Cell numeric>
                        <Text style={{color: 'black'}}>{subjectItem.subjectPeriod}</Text>
                      </DataTable.Cell>
                      <DataTable.Cell numeric>
                        <TouchableOpacity style={stylesTimetableScreen.removeSubjectContainer} onPress={() => RemoveSubject()}>
                            <Text style={stylesTimetableScreen.btnRemoveSubject}><FontAwesome5 size={ 24 } name={'times-circle'} brand /></Text>
                        </TouchableOpacity>
                      </DataTable.Cell>
                  </DataTable.Row>                    
                  );
                })}
              </DataTable>
            </View>
          </View>
          <View style={{...stylesTimetableScreen.btnAddSubject, borderWidth: 0, borderTopWidth: 1, alignItems: 'center', justifyContent: 'center'}}>    
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => prevDay()}>
                  <Text style={stylesTimetableScreen.btnAddSubjectTxt}><FontAwesome5 size={ 24 } name={'chevron-left'} brand /></Text>
                </TouchableOpacity>    
                <Text style={{...stylesTimetableScreen.btnAddSubjectTxt, width: 100, marginHorizontal: 50}}>
                  {schoolDays[day - 1].dayOfWeek}
                </Text>
                <TouchableOpacity onPress={() => nextDay()}>
                 <Text style={stylesTimetableScreen.btnAddSubjectTxt}><FontAwesome5 size={ 24 } name={'chevron-right'} solid /></Text>
                </TouchableOpacity>   
              </View>              
          </View>
          <TouchableOpacity style={{...stylesTimetableScreen.btnAddSubject, borderWidth: 0, borderTopWidth: 1}} onPress={() => showModal()}>
            <Text style={stylesTimetableScreen.btnAddSubjectTxt}>Add Subjects</Text>
          </TouchableOpacity>
          
            
        </View>
      </View>
    </Provider>
  )
};



/* const TimetableSubjects = (...subjects) => {
  return subjects
}; */

//export {TimetableScreen, TimetableSubjects};

export {TimetableScreen};