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
import {Button, GeneralCell, sharedStyles, TextShadow} from './UI';
import Ratings from './ratings';
import Badge, {SmallBadge} from './badge';

export class SchoolsIndicator extends Component {
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
        borderColor={'#FAE3E3'} {...TextShadow}
        text={this.state.number.toString()} />
      <Text style={[sharedStyles.shadowText, styles.boldText, {marginBottom: 30}]}>SCHOOLS IN THIS <Text style={styles.underline}>NEIGHBORHOOD</Text></Text>
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
    let size = 71 * (this.props.scale || 1);
    let schoolSize = this.props.horizontal ? {height: size, marginVertical: 5, flexDirection: 'row'} : {width: size, marginHorizontal: 5, flex: 1};

    let backgroundColor = `rgba(21, 82, 147, ${size < 71 ? 0.5 : 1})`;
    let avatar = {width: size, height: size, borderRadius: size / 2, backgroundColor, overflow: 'visible'};
    let textSize = this.props.horizontal ? {marginLeft: 19} : {marginTop: 19};
    return (
      <TouchableOpacity style={[styles.school, schoolSize]} {...otherProps}>
        <Image style={avatar} source={icon}>
          <SmallBadge number={count} />
        </Image>
        <Text style={[sharedStyles.shadowText, styles.boldText, styles.schoolCaption, textSize]}>{name.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
}

export class SchoolCellMore extends Component {
  render() {
    let {count, ...otherProps} = this.props;
    return (
      <GeneralCell {...otherProps}>
      <TouchableOpacity style={[sharedStyles.cellContent, styles.schoolCellMoreContent]}>
        <Text style={styles.moreText}>{count} More Schools</Text>
        <Image source={require('./images/disclosure_button.png')} />
      </TouchableOpacity>
      </GeneralCell>
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

  render() {
    let {name, address, distance, count, ratings, reviews, ...otherProps} = this.props;
    return (
      <GeneralCell {...otherProps}>
        <TouchableOpacity style={[sharedStyles.cellContent, styles.schoolCellContent]}>
        <View style={{flexDirection: 'column'}}>
        <Text style={styles.cellTitle}>{name}</Text>
        <Text style={styles.cellAddress}>{address}</Text>
        <Text style={styles.cellAddress}>{distance}</Text>
        </View>
        <View style={{flexDirection: 'column', alignSelf: 'flex-start', alignItems: 'center'}}>
        <Badge number={count} />
        <Ratings ratings={ratings} style={{marginTop: 9}}/>
        <Text style={styles.reviewsCount}>{reviews} reviews</Text>
        </View>
        </TouchableOpacity>
      </GeneralCell>
    );
  }
}

const styles = StyleSheet.create({
  schoolCellContent: {
    marginTop: 20,
    marginBottom: 21,
    marginRight: 18,
  },
  schoolCellMoreContent: {
    marginTop: 16,
    marginBottom: 17,
    marginRight: 15,
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
  moreText: {
    fontFamily: "ProximaNova-Regular",
    fontSize: 18,
    color: '#3A4857',
    letterSpacing: 0.36,
  },
  reviewsCount: {
    paddingTop: 2,
    fontFamily: "ProximaNova-Regular",
    fontSize: 12,
    color: '#888889',
    letterSpacing: 0.24,
  },
  boldText: {
    fontFamily: 'ProximaNova-Bold',
    fontSize: 13,
    textAlign: 'center',
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
