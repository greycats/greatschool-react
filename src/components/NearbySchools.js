'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  PropTypes,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {GradientText} from './gradient';
import {Button} from './UI';
import Actions from '../actions/Actions'

export default class SchoolsIndicator extends Component {
  static propTypes = {
    onExplore: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      number: 30
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
      <GradientText style={{height: 141}} fontSize={120} kern={-2.3}
        colors={['#FFFFFF', '#D8D8D8']} loc1={[0.64, 1 - 0.376]} loc2={[0.68, 1 - 0.76]}
        borderColor={'#FAE3E3'}
        text={this.state.number.toString()} />
      <View style={{alignSelf: 'center', flexDirection: 'row', marginBottom: 30}}>
        <Text style={styles.boldText}>SCHOOLS IN THIS </Text>
        <Text style={[styles.boldText, styles.underline]}>NEIGHBORHOOD</Text>
      </View>
      <Button title="Let's explore" onClick={this.props.onExplore} />
      </View>
    );
  }
}

export class SchoolIcon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    scale: PropTypes.number,
    horizontal: PropTypes.bool,
    icon: PropTypes.number.isRequired,
    count: PropTypes.number,
    ...View.propTypes
  };

  render() {
    let {name, icon, count, ...otherProps} = this.props;
    let opacity = count ? 1 : 0;
    let size = 71 * (this.props.scale || 1);
    let schoolSize = this.props.horizontal ? {height: size, marginVertical: 5, flexDirection: 'row'} : {width: size, marginHorizontal: 5, flex: 1};

    let backgroundColor = `rgba(21, 82, 147, ${size < 71 ? 0.5 : 1})`;
    let avatar = {width: size, height: size, borderRadius: size / 2, backgroundColor, overflow: 'visible'};
    let textSize = this.props.horizontal ? {marginLeft: 19} : {marginTop: 19};
    return (
      <TouchableOpacity style={[styles.school, schoolSize]} {...otherProps}>
        <Image style={avatar} source={icon}>
          <View style={[styles.badgeWrapper, styles.schoolSmallCountBackground, {opacity}]}>
            <Text style={[styles.badge, styles.schoolSmallCount]}>{count}</Text>
          </View>
        </Image>
        <Text style={[styles.boldText, styles.schoolCaption, textSize]}>{name.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
}

export class SchoolCell extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    ratings: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
  };

  renderBadge(count) {
    return (
      <Image style={styles.badgeWrapper} source={require('./images/badge.png')}>
      <Text style={[styles.badge, styles.schoolCount]}>{count}</Text>
      </Image>
    );
  }

  renderRating(value) {
    if (value) {
      return <Image source={require('./images/star.png')} />;
    } else {
      return <Image source={require('./images/star_empty.png')} />;
    }
  }

  renderRatings(ratings) {
    return (
      <View style={styles.ratings}>
        {this.renderRating(ratings > 0)}
        {this.renderRating(ratings > 1)}
        {this.renderRating(ratings > 2)}
        {this.renderRating(ratings > 3)}
        {this.renderRating(ratings > 4)}
      </View>
    );
  }

  render() {
    let {name, address, distance, count, ratings, reviews, ...otherProps} = this.props;
    return (
      <View style={styles.cellBackground} {...otherProps}>
        <View style={styles.cellContent}>
        <View style={{flexDirection: 'column'}}>
        <Text style={styles.cellTitle}>{name}</Text>
        <Text style={styles.cellAddress}>{address}</Text>
        <Text style={styles.cellAddress}>{distance}</Text>
        </View>
        <View style={{flexDirection: 'column', alignSelf: 'flex-start', alignItems: 'center'}}>
        {this.renderBadge(count)}
        {this.renderRatings(ratings)}
        <Text style={styles.reviewsCount}>{reviews} reviews</Text>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cellBackground: {
    marginLeft: 17,
    marginRight: 17,
    marginBottom: 14,
    borderRadius: 4,
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 19,
    shadowOpacity: 0.06,
    shadowColor: 'black',
  },
  cellContent: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 28,
    marginBottom: 21,
    marginRight: 20,
  },
  cellTitle: {
    fontFamily: "ProximaNova-Semibold",
    fontSize: 20,
    paddingVertical: 6,
    color: '#101112'
  },
  cellAddress: {
    paddingVertical: 2,
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    color: '#8593A2',
    letterSpacing: 0.3,
  },
  school: {
    paddingTop: 20,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  schoolSmallCountBackground: {
    width: 23,
    height: 23,
    borderRadius: 11.5,
    backgroundColor: '#0B4782',
    position: 'absolute',
    top: 0,
    right: -5,
    opacity: 1,
  },
  badgeWrapper: {
    justifyContent: 'center',
  },
  badge: {
    fontFamily: 'ProximaNova-Semibold',
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  schoolSmallCount: {
    fontSize: 12.57,
    color: '#6DFFEC',
    lineHeight: 14,
  },
  schoolCount: {
    fontSize: 29.42,
    color: 'white',
  },
  ratings: {
    flexDirection: 'row',
    marginTop: 9,
  },
  reviewsCount: {
    paddingTop: 2,
    fontFamily: "ProximaNova-Regular",
    fontSize: 12,
    color: '#888889',
    letterSpacing: 0.24,
  },
  boldText: {
    color: 'white',
    fontFamily: 'ProximaNova-Bold',
    fontSize: 13,
    textAlign: 'center',
    shadowColor: '#004188',
    shadowOpacity: 0.22,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 6,
    letterSpacing: 0.93,
  },
  schoolCaption: {
    fontSize: 12,
    shadowOpacity: 0.13,
    letterSpacing: 0.86,
    lineHeight: 19,
  },
  underline: {
    color: '#B8E986',
    textDecorationLine: 'underline'
  }
});
