import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class TimeTable extends Component {

  render() {
    return (
        <View>
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>

                <Text style={styles.name}>Welcome </Text>
                <Text></Text>
                <Text style={styles.userInfo}>Today is Thursday </Text>
                <Text></Text>
                <Text style={styles.userInfo}>Time: 11:00 AM </Text>
            </View>
          </View>
</View>
<View>
          <View style={styles.body}>
            <View style={styles.item}>
              <View>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/ios/50/000000/class.png'}}/>
              </View>
              <View>
                <Text style={styles.info}> Start Class</Text>
                <Text></Text>
                <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress ={() =>  this.props.navigation.navigate('Timetable')} >
          <Text style={styles.signUpText}>Go</Text>
        </TouchableHighlight>
                
              </View>
            </View>

            

            <View style={styles.item}>
              <View>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/ios/50/000000/attendance-mark.png'}}/>
              </View>
              <View>
                <Text style={styles.info}> Attendance</Text>
                <Text></Text>
                <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress ={() =>  this.props.navigation.navigate('Timetable')} >
          <Text style={styles.signUpText}>Go</Text>
        </TouchableHighlight>
              </View>
            </View>

            <View style={styles.item}>
              <View>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/ios/50/000000/inscription.png'}}/>
              </View>
              <View>
                <Text style={styles.info}> Assignments</Text>
                <Text></Text>
                <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress ={() =>  this.props.navigation.navigate('Timetable')} >
          <Text style={styles.signUpText}>Go</Text>
        </TouchableHighlight>
                
                
              </View>
            </View>

            <View style={styles.item}>
              <View>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/ios/50/000000/bell.png'}}/>
              </View>
              <View>
                <Text style={styles.info}> End Class</Text>
                <Text></Text>
                <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress ={() =>  this.props.navigation.navigate('Timetable')} >
          <Text style={styles.signUpText}>Go</Text>
        </TouchableHighlight>
                
              </View>
            </View>

          </View>
          </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#3b8b7c",
  },
  headerContent:{
    padding:50,
    alignItems: 'center',
  },
  
  name:{
    fontSize:22,
    
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#fff",
    height:600,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#000",
  },
  buttonContainer: {
    height:25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:100,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#666666",
  },
  signUpText: {
    color: 'white',
    fontWeight: '700'
  }
});