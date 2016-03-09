'use strict';

import React, {Image, Text} from 'react-native';
import {sharedStyles} from './UI';

export default class Badge extends React.Component {
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
      <Image style={styles.badgeWrapper} source={background}>
      <Text style={[sharedStyles.buttonText, styles.badge, styles.schoolCount]}>{number}</Text>
      </Image>
    );
  }
}

const styles = React.StyleSheet.create({
  badgeWrapper: {
    justifyContent: 'center',
  },
  badge: {
    fontFamily: 'ProximaNova-Semibold',
  },
  schoolCount: {
    fontSize: 29.42,
    color: 'white',
  },
});
