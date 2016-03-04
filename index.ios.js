/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Navigator,
  StyleSheet,
  StatusBarIOS
} from 'react-native';
import {Background} from './src/components/components';
import {TabBar} from './src/components/tab';
import HomeScene from './src/components/HomeScene';

// onForward={() => {
//   var nextIndex = route.index + 1;
//   navigator.push({
//     name: 'Scene ' + nextIndex,
//     index: nextIndex,
//   });
// }}
// onBack={() => {
//   if (route.index > 0) {
//     navigator.pop();
//   }
// }}

class GreatSchool extends Component {
  componentWillMount() {
    StatusBarIOS.setStyle('light-content');
  }

  render() {
    return (
      <Background>
        <Navigator
          initialRoute={{name: 'Home step 1', index: 0}}
          renderScene={(route, navigator) =>
            <HomeScene />
          }
        />
      <TabBar />
      </Background>
    );
  }
}


AppRegistry.registerComponent('GreatSchool', () => GreatSchool);
