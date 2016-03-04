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
import SchoolsCount from './NearbySchools';

export default class HomeScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar />
        <SchoolsCount style={styles.schoolsCount} />
        <View>
          <Divider />
          <Ads onClick={e=>{}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  }
});
