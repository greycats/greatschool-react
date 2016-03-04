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
      <View>
      <NavigationBar />
      <View style={styles.container}>
        <SchoolsCount style={styles.schoolsCount} />
        <Divider/>
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

  schoolsCount: {
    flex: 1,
  },
  ads: {
    alignSelf: 'flex-end',
  },
});
