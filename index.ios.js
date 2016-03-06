'use strict';

import React from 'react-native';
import {Background} from './src/components/UI';
import TabBar from './src/components/tab';
import Navigator from './src/components/nav';
import HomeScene, {PickSchoolScene} from './src/components/HomeScene';
import SearchScene from './src/components/SearchScene';

class GreatSchool extends React.Component {
  render() {
    let route = {
      'home-step1': <HomeScene />,
      'home-step2': <PickSchoolScene />,
      'search': <SearchScene />,
    };
    return (
      <React.View style={{flex: 1, backgroundColor: '#F0F5F6'}}>
        <Navigator map={route} />
        <TabBar />
      </React.View>
    );
  }
}

React.AppRegistry.registerComponent('GreatSchool', () => GreatSchool);
