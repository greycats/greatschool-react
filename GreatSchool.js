'use strict';

import React from 'react-native';
import {Background} from './src/components/UI';
import TabBar from './src/components/tab';
import Navigator from './src/components/nav';
import HomeScene, {PickSchoolScene} from './src/scenes/HomeScene';
import SearchScene from './src/scenes/SearchScene';
import SchoolScene from './src/scenes/SchoolScene';
import MySchoolsScene from './src/scenes/MySchoolsScene';
import GreatKidsScene from './src/scenes/GreatKidsScene';

export default class GreatSchool extends React.Component {
  render() {
    let route = {
      'home-step1': <HomeScene />,
      'home-step2': <PickSchoolScene />,
      'search': <SearchScene />,
      'school': <SchoolScene />,
      'kids': <GreatKidsScene />,
      'schools': <MySchoolsScene />
    };
    return (
      <Background type="home-step1">
        <Navigator map={route} tabbar={() => {return this._tabbar}} />
        <TabBar ref={c => this._tabbar = c.__ref} />
      </Background>
    );
  }
}
