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

export default class SearchScene extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }
  renderSearchBox() {
    return (
      <View style={styles.searchBoxWrapper}>
      <TextInput
      style={styles.searchBox}
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}>
      </TextInput>
      <Image style={styles.magnifier} source={require('./images/magnifier.png')} />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
      {this.renderSearchBox()}
      <Sections style={{flex: 1}}>
      <ScrollView>
      <View style={{height: 20}} />
      <SchoolCell name={"School Name A"} address={"Public | 9 - 12 | Pleasant Hill, CA"} distance={"3.25 Miles"} count={9} ratings={4} reviews={214} />
      <SchoolCell name={"School Name A"} address={"Public | 9 - 12 | Pleasant Hill, CA"} distance={"3.25 Miles"} count={5} ratings={3} reviews={114} />
      <SchoolCell name={"School Name A"} address={"Public | 9 - 12 | Pleasant Hill, CA"} distance={"3.25 Miles"} count={9} ratings={4} reviews={314} />
      <SchoolCell name={"School Name A"} address={"Public | 9 - 12 | Pleasant Hill, CA"} distance={"3.25 Miles"} count={9} ratings={4} reviews={214} />
      <SchoolCell name={"School Name A"} address={"Public | 9 - 12 | Pleasant Hill, CA"} distance={"3.25 Miles"} count={5} ratings={3} reviews={114} />
      <SchoolCell name={"School Name A"} address={"Public | 9 - 12 | Pleasant Hill, CA"} distance={"3.25 Miles"} count={9} ratings={4} reviews={314} />
      </ScrollView>
      </Sections>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    flex: 1,
  },
  searchBoxWrapper: {
    margin: 16,
  },
  magnifier: {
    position: "absolute",
    top: 13,
    left: 10,
  },
  searchBox: {
    backgroundColor: "white",
    borderRadius: 4,
    height: 48,
    padding: 10,
    fontFamily: 'ProximaNova-Regular',
    fontSize: 18,
    color: '#101112',
    paddingLeft: 47,
  },
});
