import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  Image
 } from 'react-native';

class Sobre extends Component {
  static navigationOptions = {
    drawerLaber:'Sobre',
    drawerIcon: ({tintColor}) => (
      <Image
      source={require('../img/sobre_ativo.png')}
      style={[ {width:30, height:30}, {tintColor:tintColor}]}
      />
    )


  };
    render(){
        
    
    return (
      <View style={styles.container}>
        <Text>adgasdufadsf</Text>     

        
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
  
  export default Sobre;