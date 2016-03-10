'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {Sections} from '../components/section';
import SchoolCell from '../components/school_cell';
import SchoolNameView from '../components/school_name_view';
import CellGroup from '../components/cell_group';
import Badge from '../components/badge';
import {Row, sharedStyles} from '../components/UI';
import Ratings from '../components/ratings';
import SegmentedControl from '../components/segmented_control';

export default class SchoolScene extends Component {
  renderTitle(name, subtitle) {
    return (
      <View>
      <Text style={[sharedStyles.cellTitleText, styles.title, subtitle ? {} : styles.singleTitle]}>{name}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
    );
  }

  renderValue(name) {
    var style;
    var color;
    if (name === true) {
      name = "YES";
      style = styles.bool;
      color = {color: '#65A500'};
    } else if (name === false) {
      name = "NO";
      style = styles.bool;
      color = {color: '#F48200'};
    }
    return (
      <Text style={[sharedStyles.cellTitleText, styles.value, style, color]}>{name}</Text>
    );
  }

  renderAddress(address) {
    return (
      <View style={styles.address}>
      <Text style={styles.addressText}>{address}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
      <View>
      <Image style={styles.slideImage} resizeMode={"contain"} source={require('../components/images/shutterstock3.jpg')} />
      <SchoolNameView name={"College Park High School"} icon={require('../components/images/school_icon.png')} />
      <SegmentedControl ref={c => this._segmented = c} style={styles.segmentedControl} options={["overview", "stats", "review"]} />
      </View>
      <Sections style={{flex: 1}}>
      <ScrollView>
      <View style={{height: 20}} />
      <CellGroup>
      <Row weight={20} disclosure={true} onClick={(e) => {}}>
      {this.renderTitle("GreatSchools Rating", "Out of 10")}
      <Badge number={9} />
      </Row>
      <Row weight={20} disclosure={true} onClick={(e) => {}}>
      {this.renderTitle("User Review", "60 Reviews")}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Ratings ratings={3} />
      <Badge style={{marginLeft: 14}} number={3} />
      </View>
      </Row>
      <Row weight={20} disclosure={true} onClick={(e) => {}}>
      {this.renderTitle("Location")}
      {this.renderAddress("Public District, Pleasant Hill, CA")}
      </Row>
      <Row weight={20} onClick={(e) => {}}>
      {this.renderTitle("Before Care")}
      {this.renderValue(true)}
      </Row>
      <Row weight={20} onClick={(e) => {}}>
      {this.renderTitle("After Care")}
      {this.renderValue(false)}
      </Row>
      </CellGroup>
      </ScrollView>
      </Sections>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    letterSpacing: 0.7,
  },
  singleTitle: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 18,
  },
  value: {
    fontFamily: 'ProximaNova-Semibold',
    letterSpacing: 0,
  },
  bool: {
    fontSize: 18,
  },
  subtitle: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 16,
    paddingTop: 5,
    color: '#8593A2',
  },
  addressText: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 16,
    color: '#1C252E',
    lineHeight: 21,
    textAlign: 'right',
  },
  address: {
    width: 157,
  },
  container: {
    marginTop: 80,
    flex: 1,
  },
  slideImage: {
    height: 219,
    left: 0,
    right: 0,
    top: 0,
  },
  segmentedControl: {
    position: 'absolute',
    alignItems: 'center',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
