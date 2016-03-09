'use strict';

import React, {View, Image} from 'react-native';
import {sharedStyles} from './UI';

export default class Ratings extends React.Component {
  static propTypes = {
    ratings: React.PropTypes.number.isRequired,
  };

  renderRating(value) {
    if (value) {
      return <Image source={require('./images/star.png')} />;
    } else {
      return <Image source={require('./images/star_empty.png')} />;
    }
  }

  render() {
    let {ratings, style, ...otherProps} = this.props;
    return (
      <View {...otherProps} style={[style, {flexDirection: 'row'}]}>
        {this.renderRating(ratings > 0)}
        {this.renderRating(ratings > 1)}
        {this.renderRating(ratings > 2)}
        {this.renderRating(ratings > 3)}
        {this.renderRating(ratings > 4)}
      </View>
    );
  }
}
