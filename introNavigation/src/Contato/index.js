import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  Image
 } from 'react-native';

export default class Contato extends Component {
    static navigationOptions = {
      drawerIcon: ({tintColor}) => (
        <Image
        source={require('../img/contato_ativo.png')}
        style={[ {width:30, height:30}, {tintColor:tintColor}]}
        />
      )
};
    render(){
        
    
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        
      </View>
     );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  