'use strict';

import React, {View, Image} from 'react-native';
import {sharedStyles} from './UI';

export default class Ratings extends React.Component {
  static propTypes = {
    ratings: React.PropTypes.number.isRequired,
    threshold: React.PropTypes.number,
  };

  renderRating(value) {
    let threshold = this.props.threshold || 3;
    let ratings = this.props.ratings;
    if (ratings > value) {
      if (threshold < ratings) {
        return <Image key={`star1.${value}`} source={require('./images/star.png')} />;
      } else {
        return <Image key={`star2.${value}`} source={require('./images/star2.png')} />;
      }
    } else {
      return <Image key={value} source={require('./images/star_empty.png')} />;
    }
  }

  render() {
    let {ratings, style, ...otherProps} = this.props;

    return (
      <View {...otherProps} style={[style, {flexDirection: 'row'}]}>
      {[0,1,2,3,4].map(this.renderRating.bind(this))}
      </View>
    );
  }
}
