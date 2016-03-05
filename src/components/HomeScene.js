'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import {Divider, DividerV} from './UI';
import Ads from './ads';
import {GradientText} from './gradient';
import {NavigationBar} from './nav';
import NearbySchools, {School} from './NearbySchools';

export default class HomeScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NearbySchools onExplore={e=> {
          this.props.navigator.push({name: 'home-step2', title: 'Pick a School'});
        }} />
        <View>
        <Divider />
          <Ads onClick={e=>{
            //TODO
          }} />
        </View>
      </View>
    );
  }
}

export class PickSchoolScene extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.schools}>
        <School name={'elementary schools'} icon={require('./images/elementary_schools.png')} />
        <Divider vertical={true} />
        <School name={'middle schools'} icon={require('./images/middle_schools.png')} count={17} />
        <Divider vertical={true} />
        <School name={'high schools'} icon={require('./images/high_schools.png')} count={99} />
        </View>
        <Divider />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    flex: 1,
  },
  schools: {
    marginTop: 47,
    height: 189,
    marginBottom: 29,
    flexDirection: 'row',
  },
});
