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
        <School icon={'elementary_schools'} />
        <Divider vertical={true} />
        <School icon={'middle_schools'} count={17} />
        <Divider vertical={true} />
        <School icon={'high_schools'} count={99} />
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
