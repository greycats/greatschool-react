'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Image,
  TextInput,
  Platform,
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
      underlineColorAndroid={"white"}
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
    borderRadius: 4,
    backgroundColor: "white",
    overflow: 'hidden'
  },
  magnifier: {
    position: "absolute",
    top: 13,
    left: 10,
  },
  searchBox: {
    height: 48,
    padding: 10,
    paddingBottom: (Platform.OS === 'ios') ? 10 : 9,
    fontFamily: 'ProximaNova-Regular',
    fontSize: 18,
    color: '#101112',
    paddingLeft: 47,
    shadowOpacity: 0.06,
  },
});
