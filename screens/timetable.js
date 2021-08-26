import React, { useState } from 'react';

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

const TimetableScreen = ({navigation}) => {
  // Stores subjects and their information
  const [subjectInput, setSubjectInput] = useState('');
  const [subjects, setSubjects] = useState([]);
  const AddSubject = () => {
    if (subjectInput === ""){ //if subjectInput is blank
      Alert.alert("Error:", "Subject can't be blank")
    } else if(subjects.filter((subject) => subject.subjectName === subjectInput).length === 0){ //Else if subject is not a repeat
      if (period === 'Select Period') { // If period has not been selected
        Alert.alert("Error:", "Please select a period")
      } else if (subjects.filter((subject) => subject.subjectPeriod === period).length === 0){ // Else if period is not a repeat
          Alert.alert(subjectInput, "Subject has been added");
          setSubjects([...subjects, { subjectName: subjectInput, subjectPeriod: period }]),       
          setSubjectInput("");
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
                    placeholder="Enter Subject..." 
                    onChangeText={text => setSubjectInput(text)} 
                    defaultValue={subjectInput}/>
                    <View style={stylesTimetableScreen.periodListContainer}>
                      <List.Accordion style={stylesTimetableScreen.periodList} expanded={expanded} onPress={() => setExpanded(!expanded)} title={period} id="1">
                        <List.Item style={stylesTimetableScreen.periodListItems} key='1' onPress={() => selectPeriod('Period 1')} title="Period 1" />
                        <List.Item style={stylesTimetableScreen.periodListItems} key='2' onPress={() => selectPeriod('Period 2')} title="Period 2" />
                        <List.Item style={stylesTimetableScreen.periodListItems} key='3' onPress={() => selectPeriod('Period 3')} title="Period 3" />
                        <List.Item style={stylesTimetableScreen.periodListItems} key='4' onPress={() => selectPeriod('Period 4')} title="Period 4" />
                        <List.Item style={stylesTimetableScreen.periodListItems} key='5' onPress={() => selectPeriod('Period 5')} title="Period 5" />
                        <List.Item style={stylesTimetableScreen.periodListItems} key='6' onPress={() => selectPeriod('Period 6')} title="Period 6" />
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
                  <DataTable.Title ><Text style={stylesTimetableScreen.tableTitle}>Subject</Text></DataTable.Title>
                  <DataTable.Title sortDirection='descending' style={stylesTimetableScreen.tableTitle} numeric><Text style={stylesTimetableScreen.tableTitle}>Period</Text></DataTable.Title>
                  <DataTable.Title style={stylesTimetableScreen.tableTitle} numeric><Text style={stylesTimetableScreen.tableTitle}>Remove</Text></DataTable.Title>
                </DataTable.Header>
                {subjects.map((subjectItem, index) => { //Map all subjects into their own overview   
                const RemoveSubject = () => { // Function to delete subject          
                  Alert.alert(subjectItem.subjectName, "Are you sure you want to remove this subject", [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    { text: "OK", onPress: () => setSubjects(subjects.filter((subject) => subject.subjectName !== subjectItem.subjectName)) },
                  ]);
                };
                // Subject Overview Structure
                  return (
                    <DataTable.Row>
                      <DataTable.Cell>
                        <View style={stylesTimetableScreen.subjectInformation}>
                          <Text style={stylesTimetableScreen.subjectTitle}>{subjectItem.subjectName}</Text>  
                        </View>
                      </DataTable.Cell>
                      <DataTable.Cell numeric>
                      {subjectItem.subjectPeriod}
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
          <TouchableOpacity style={stylesTimetableScreen.btnAddSubject} onPress={() => showModal()}>
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