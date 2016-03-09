'use strict';

import React, {Component, View, Image, Text} from 'react-native';
import {sharedStyles} from './UI';

export default class Badge extends Component {
  static propTypes = {
    number: React.PropTypes.number.isRequired,
    threshold: React.PropTypes.number,
  };

  render() {
    let {number, threshold, ...otherProps} = this.props;
    threshold = threshold || 5;
    let background;
    if (number <= threshold) {
      background = require('./images/badge2.png');
    } else {
      background = require('./images/badge.png');
    }
    return (
      <Image style={styles.wrapper} source={background}>
      <Text style={[sharedStyles.buttonText, styles.badge]}>{number}</Text>
      </Image>
    );
  }
}

export class SmallBadge extends Component {
  render() {
    let {number, ...otherProps} = this.props;
    let opacity = number ? 1 : 0;
    return (
      <View style={[styles.wrapper, styles.smallBadgeWrapper, {opacity}]}>
        <Text style={[sharedStyles.buttonText, styles.smallBadge]}>{number}</Text>
      </View>
    );
  }
}

const styles = React.StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
  },
  badge: {
    fontFamily: 'ProximaNova-Semibold',
    fontSize: 29.42,
    color: 'white',
  },
  smallBadge: {
    fontFamily: 'ProximaNova-Semibold',
    fontSize: 12.57,
    color: '#6DFFEC',
    lineHeight: 14,
  },
  smallBadgeWrapper: {
    width: 23,
    height: 23,
    borderRadius: 11.5,
    backgroundColor: '#0B4782',
    position: 'absolute',
    top: 0,
    right: -5,
  },
});
