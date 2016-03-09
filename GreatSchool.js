'use strict';

import React from 'react-native';
import {Background} from './src/components/UI';
import TabBar from './src/components/tab';
import Navigator from './src/components/nav';
import HomeScene, {PickSchoolScene} from './src/components/HomeScene';
import SearchScene from './src/components/SearchScene';
import SchoolScene from './src/components/SchoolScene';

export default class GreatSchool extends React.Component {
  render() {
    let route = {
      'home-step1': <HomeScene />,
      'home-step2': <PickSchoolScene />,
      'search': <SearchScene />,
      'school': <SchoolScene />
    };
    return (
      <Background type="home-step1">
        <Navigator map={route} />
        <TabBar />
      </Background>
    );
  }
}
