'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

import ArticleScreen from './ArticleScreen';
import Home from './Home';

class HomeScreen extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      navigation : this.props.navigation,
      cid : 2,
      title : '单品搭配'
    };

  }

  static navigationOptions = ({navigation}) => ({
    title: '单品搭配'
  })

  render() {
    return (
      // 此处渲染问题
      <Home nav = {this.state.navigation} cid = {this.state.cid} ></Home>
    );
  }
}

const navigation = StackNavigator({
  Home:{
    screen: HomeScreen
  },
  Detail:{
    screen: ArticleScreen
  }
});

AppRegistry.registerComponent('gqapp', () => navigation);