'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {Sections} from './section';
import {SchoolCell} from './NearbySchools';

export default class SchoolScene extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image source={require('./images/shutterstock3.jpg')} />
      <Sections style={{flex: 1}}>
      <ScrollView>
      <View style={{height: 20}} />
      {SchoolCell.generateRandomSchools.bind(this)(6)}
      </ScrollView>
      </Sections>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
  },
});
