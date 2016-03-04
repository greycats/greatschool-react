'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {GradientText} from './gradient';
import {Button} from './UI';
import Actions from '../actions/Actions'

export default class SchoolsCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 30
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <GradientText style={styles.schoolCount} fontSize={120} kern={-2.3}
        colors={['#FFFFFF', '#D8D8D8']} loc1={[0.64, 1 - 0.376]} loc2={[0.68, 1 - 0.76]}
        borderColor={'#FAE3E3'}
        text={this.state.number.toString()} />
      <View style={styles.caption}>
        <Text style={styles.text}>SCHOOLS IN THIS </Text>
        <Text style={[styles.text, styles.underline]}>NEIGHBORHOOD</Text>
      </View>
      <Button title="Let's explore" onClick={e=>{Actions.exploreNearbySchools}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  schoolCount: {
    height: 141,
  },
  caption: {
    alignSelf: 'center',
    flexDirection: 'row',
    // justifyContent: 'center',
    marginBottom: 30
  },
  text: {
    color: 'white',
    fontFamily: 'ProximaNova-Bold',
    fontSize: 13,
    shadowColor: '#004188',
    shadowOpacity: 0.22,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 6
  },
  underline: {
    color: '#B8E986',
    textDecorationLine: 'underline'
  }
});
