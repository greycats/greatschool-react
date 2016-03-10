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
import SchoolNameView from '../components/school_overview_icon';
import CellGroup from '../components/cell_group';
import Badge from '../components/badge';
import {Row, sharedStyles} from '../components/UI';
import Ratings from '../components/ratings';

export default class SchoolScene extends Component {
  renderStyle1(name, subtitle) {
    return (
      <View>
      <Text style={[sharedStyles.cellTitleText, styles.title]}>{name}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    );
  }

  renderStyle1(name, subtitle) {
    return (
      <View>
      <Text style={[sharedStyles.cellTitleText, styles.title]}>{name}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.slideImage} resizeMode={"contain"} source={require('../components/images/shutterstock3.jpg')} />
      <SchoolNameView name={"College Park High School"} icon={require('../components/images/school_icon.png')} />
      <Sections style={{flex: 1}}>
      <ScrollView>
      <View style={{height: 20}} />
      <CellGroup>
      <Row weight={20} disclosure={true} onClick={(e) => {}}>
      {this.renderStyle1("GreatSchools Rating", "Out of 10")}
      <Badge number={9} />
      </Row>
      <Row weight={20} disclosure={true} onClick={(e) => {}}>
      {this.renderStyle1("User Review", "60 Reviews")}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Ratings ratings={3} />
      <Badge style={{marginLeft: 14}} number={3} />
      </View>
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
  subtitle: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 16,
    paddingTop: 5,
    color: '#8593A2',
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
  overviewIcon: {

  },
});
