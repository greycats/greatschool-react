'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Text,
} from 'react-native';

export default class MySchoolsScene extends Component {

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}>Coming Soon!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'ProximaNova-Bold',
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  }
});
