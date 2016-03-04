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
} from 'react-native';

import {Background} from './Components/components';
import {TabBar} from './Components/tabbar';
import {HomeScene} from './home';

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
  render() {
    return (
      <Background>
        <Navigator
          initialRoute={{name: 'Home step 1', index: 0}}
          renderScene={(route, navigator) =>
            <HomeScene style={styles.container} />
          }
        />
      <TabBar />
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('GreatSchool', () => GreatSchool);
