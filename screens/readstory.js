import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements'
import * as firebase from 'firebase'
import db from '../config.js'

export default class Read extends React.Component {
  constructor(){
    super()
    this.state={
authorName:'',
storyName:'',
theStory:''
    }
  }

  submitF=async()=>{
    db.collection('Story').get({
     'Author':this.state.authorName,
     'storyName':this.state.storyName,
     'fullStory':this.state.theStory
    })
   
 }
  render(){
  return (
    <View style={styles.container}>
       <Header
          backgroundColor={'#3895D3'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
      <Text style={styles.text}>Read</Text>
<TouchableOpacity onPress={this.submitF}><Text>click to view you story</Text></TouchableOpacity>
      <Text>{this.state.storyN}</Text>
      <Text>{this.state.authorName}</Text>
      <Text>{this.state.theStory}</Text>
      <StatusBar style="auto" />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  text:{
    fontSize:20,
    marginTop:40
  },

});
