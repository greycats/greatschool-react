'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {Divider} from './UI';
import Ads from './ads';
import {GradientText} from './gradient';
import {NavigationBar} from './nav';
import NearbySchools from './NearbySchools';

export default class HomeScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NearbySchools style={styles.schoolsCount} onExplore={e=> {
          this.props.navigator.push({name: 'home-step2', title: 'Pick a School'});
        }} />
        <View>
        <Divider style={styles.divider90}/>
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
      <View style={styles.container}>
        <View style={styles.schools}>
        <View style={styles.school}><Text style={styles.schoolTitle}>A</Text></View>
        <View style={styles.divider90}><Divider /></View>
        <View style={styles.school}><Text style={styles.schoolTitle}>A</Text></View>
        <Divider style={styles.divider90} />
        <View style={styles.school}><Text style={styles.schoolTitle}>A</Text></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  divider90: {
    transform: [{rotate: '90deg'}]
  },
  container: {
    marginTop: 64,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  schools: {
    top: 47,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 189,
    justifyContent: 'space-around',
  },
  school: {
    flexDirection: 'column',
    flex: 1,
    width: 100,
    height: 189,
  },
  schoolTitle: {
    textAlign: 'center',
  }
});
