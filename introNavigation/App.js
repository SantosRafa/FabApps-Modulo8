 import React from 'react';
 import {Image} from 'react-native';
 import{ createAppContainer } from 'react-navigation'
 import { createDrawerNavigator } from 'react-navigation-drawer'


 import Home from './src/Home';
 import Contato from './src/Contato';
 import Sobre from './src/Sobre';
 import CustomDrawer from './src/components/CustomDrawer'

  const Routes = createDrawerNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
      
    }
  },

  Contato:{
    screen: Contato
  },

  Sobre:{
    screen: Sobre
  }

},{
  contentComponent:CustomDrawer,
  initialRouteName:'Home',
  //drawerPosition:'rigth',
  //drawerWidth:150,
  drawerBackgroundColor:'#222',
  contentOptions:{
    activeTintColor:'#24c2cb',
    activeBackgroundColor:'#fff',
    inactiveTintColor:'#fff'
  }
});

const AppContainer = createAppContainer(Routes);

export default AppContainer;