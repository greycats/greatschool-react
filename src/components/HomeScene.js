'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {Divider, Button} from './components';
import Ads from './ads';
import {GradientText} from './gradient';
import {NavigationBar} from './nav';
import SchoolsCount from './NearbySchools';

export default class HomeScene extends Component {
  render() {
    return (
      <View style={styles.container}>
      <NavigationBar />
      <View style={styles.main}>
        <View style={styles.wrapper}>
          <SchoolsCount style={styles.schoolsCount} />
        </View>
        <Divider style={styles.divider}/>
        <Ads onClick={e=>{}} style={styles.ads}/>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'center'
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    height: 2,
  },
  schoolsCount: {
    alignSelf: 'center',
  },
  ads: {
    alignSelf: 'flex-end',
  },
});
