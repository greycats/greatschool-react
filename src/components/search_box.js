'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

export default class SearchBox extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View style={styles.searchBoxWrapper}>
      <TextInput
      style={styles.searchBox}
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}>
      </TextInput>
      <Image style={styles.magnifier} source={require('../components/images/magnifier.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBoxWrapper: {
    margin: 16,
    overflow: 'hidden',
  },
  magnifier: {
    position: "absolute",
    top: 13,
    left: 10,
  },
  searchBox: {
    backgroundColor: "white",
    borderRadius: 4,
    overflow: 'hidden',
    height: 48,
    padding: 10,
    fontFamily: 'ProximaNova-Regular',
    fontSize: 18,
    color: '#101112',
    paddingLeft: 47,
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 19,
    shadowOpacity: 0.06,
    shadowColor: 'black',
  },
});
