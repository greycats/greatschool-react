'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';

export default class SearchScene extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    flex: 1,
  }
});
