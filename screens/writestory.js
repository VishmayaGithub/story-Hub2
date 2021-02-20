import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput ,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements'
import * as firebase from 'firebase'
import db from '../config.js'

export default class Write extends React.Component {
  constructor(){
    super()
    this.state={
authorName:'',
storyN:'',
theStory:''
    }
  }
  submitFunction=async()=>{
     db.collection('Story').get()
     .then((doc)=>{
       this.setState({
         authorName:Author,
         storyN:storyName,
         theStory:fullStory
       })
     })
  }
  render(){
  return (
   
    <View style={styles.container}>
       <Header
          backgroundColor={'#3895D3'}
          centerComponent={{
            text: 'Story Hubs',
            style: { color: '#fff', fontSize: 20 },
          }}
        />


     <TextInput placeholder='  Story Title' style={styles.textinput} onChangeText={(text) => {
                            this.setState({ storyName: text });
                        }}></TextInput>
     <TextInput placeholder='  Author' style={styles.textinput}onChangeText={(text) => {
                            this.setState({ authorName: text });
                        }}></TextInput>
     <TextInput placeholder='  Write Your Story' style={styles.textinput2} onChangeText={(text) => {
                            this.setState({ theStory: text });
                        }}></TextInput>
     <TouchableOpacity style={styles.button} onPress={this.submitFunction}><Text style={styles.text}>submit</Text></TouchableOpacity>

     
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:30
    
  },
  text:{
    fontSize:20
  },

  textinput:{
    borderWidth:4,
    width:300,
    height:40,
    marginTop:40,
    textAlign:'center'
  },
  textinput2:{
    borderWidth:4,
    width:300,
    height:250,
    marginTop:40,
    textAlign:'center'
  },
  button:{
    borderWidth:4,
    width:100,
    marginTop:20,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#3895D3'
    
  }
});
