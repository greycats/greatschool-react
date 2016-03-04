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
import {Background} from './src/components/UI';
import {TabBar} from './src/components/tab';
import NavigationBar from './src/components/nav';
import HomeScene, {PickSchoolScene} from './src/components/HomeScene';

class GreatSchool extends Component {
  componentWillMount() {
    StatusBarIOS.setStyle('light-content');
  }

  renderScene(route, navigator) {
    console.log(route.name);
    switch (route.name) {
    case "home-step1":
      return <HomeScene navigator={navigator} />
      break;
    case "home-step2":
      return <PickSchoolScene navigator={navigator} />
      break;
    }
  }

  render() {
    return (
      <Background type={'home-step1'}>
        <Navigator
          initialRoute={{name: 'home-step1', index: 0}}
          renderScene={this.renderScene.bind(this)}
          navigationBar={NavigationBar}
        />
      <TabBar />
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  navigationBar: {
  },
});

AppRegistry.registerComponent('GreatSchool', () => GreatSchool);
