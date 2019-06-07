

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, TouchableHighlight} from 'react-native';
import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import {Avatar} from 'react-native-elements';
import Login from './src/app/screens/Login'
import SignUp from './src/app/screens/SignUp'
import Timetable from './src/app/screens/TimeTable'




class Home extends React.Component{
  render(){
    return(
      <View style= {{flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor: '#3b8b7c'}}>
      <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress ={() =>  this.props.navigation.navigate('Login')} >
      <Text style={styles.signUpText}>Login</Text>
    </TouchableHighlight>
        <Text style={styles.or}> OR </Text>
        <Text></Text>
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress ={() =>  this.props.navigation.navigate('SignUp')} >
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableHighlight>

      </View>

    );
  }
}





const Stack = createStackNavigator ({
  
  Timetable: Timetable,
  

},
{
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerStyle: {
        
        height: 60,
        


      },
      headerTitle: <Image style={{ resizeMode: 'contain', height: 50 }}
        source={require('./src/app/assests/logo.png')} />
    };
  }
});

const Switch = createSwitchNavigator({
   Home: Home,
   Login: Login,
  SignUp: SignUp,
   Stack: Stack


})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  or: {
    color: 'white', 
    fontSize: 16, 
    fontWeight: '700'
  },
  
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#666666",
  },
  signUpText: {
    color: 'white',
  }
  
  
});

export default createAppContainer(Switch);
