'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  PropTypes,
  Text,
  Image,
} from 'react-native';
import {GeneralCell, Row, sharedStyles} from './UI';
import Ratings from './ratings';
import Badge from './badge';

export class SchoolCellMore extends Component {
  render() {
    let {count, ...otherProps} = this.props;
    return (
      <GeneralCell {...otherProps}>
      <Row weight={15} disclosure={true} onClick={(e) => {}}>
        <Text style={styles.moreText}>{count} More Schools</Text>
      </Row>
      </GeneralCell>
    );
  }
}

export default class SchoolCell extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    ratings: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  static generateRandomSchools(length) {
    var random = (cap) => Math.floor(Math.random() * cap);
    return Array.from({length}, (v, i) => {
      return (
        <SchoolCell
          key={i}
          name={"School Name A"}
          address={"Public | 9 - 12 | Pleasant Hill, CA"}
          distance={"3.25 Miles"}
          onSelect={(e) => this.props.navigator.push({name: "school", title: "Overview"})}
          count={4 + random(6)} ratings={2 + random(4)} reviews={random(500)} />
      )
    })
  }

  render() {
    let {name, address, distance, count, ratings, reviews, ...otherProps} = this.props;
    return (
      <GeneralCell {...otherProps}>
        <Row weight={25} onClick={this.props.onSelect.bind(this)}>
          <View style={{flexDirection: 'column', flex: 1}}>
            <Text style={styles.cellTitle}>{name}</Text>
            <Text style={styles.cellAddress}>{address}</Text>
            <Text style={styles.cellAddress}>{distance}</Text>
          </View>
          <View style={{flexDirection: 'column', alignSelf: 'flex-start', alignItems: 'center'}}>
            <Badge number={count} />
            <Ratings ratings={ratings} style={{marginTop: 9}}/>
            <Text style={styles.reviewsCount}>{reviews} reviews</Text>
          </View>
        </Row>
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
});
