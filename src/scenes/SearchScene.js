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
import {Sections} from '../components/section';
import SchoolCell from '../components/school_cell';
import {generateRandomSchools} from '../components/UI';
import SearchBox from '../components/search_box';

export default class SearchScene extends Component {

  render() {
    return (
      <View style={styles.container}>
      <SearchBox />
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
    marginTop: 70,
    flex: 1,
  }
});
