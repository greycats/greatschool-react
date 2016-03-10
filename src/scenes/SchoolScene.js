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
import {Sections, Section} from '../components/section';
import SchoolCell from '../components/school_cell';
import SchoolNameView from '../components/school_name_view';
import CellGroup, {CellStack} from '../components/cell_group';
import Badge from '../components/badge';
import {Row, GeneralCell, sharedStyles} from '../components/UI';
import Ratings from '../components/ratings';
import SegmentedControl from '../components/segmented_control';
import PageControl from '../components/page_control';

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

  switchTab(index) {
  }

  tab1() {
    return (
      <ScrollView style={styles.tabs}>
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
    );
  }

  tab2() {
    return (
      <ScrollView style={styles.tabs}>
      <Section title={"detail overview"}>
      <CellGroup>
      <Row weight={20} onClick={(e) => {}}>
      {this.renderTitle("Art & Music")}
      {this.renderValue("3")}
      </Row>
      <Row weight={20} onClick={(e) => {}}>
      {this.renderTitle("Chess")}
      {this.renderValue("-")}
      </Row>
      <Row weight={20} onClick={(e) => {}}>
      {this.renderTitle("Sports")}
      {this.renderValue("12")}
      </Row>
      <Row weight={20} onClick={(e) => {}}>
      {this.renderTitle("World Languages")}
      {this.renderValue("-")}
      </Row>
      </CellGroup>
      </Section>
      <Section title={"test scores"}>
      <CellStack>
      <View>
      </View>
      </CellStack>
      </Section>
      <Section title={"homes in the school distance"}>
      <CellStack>
      <View>
      </View>
      </CellStack>
      <PageControl totalPage={6} />
      </Section>
      <Section title={"discription"}>
      <GeneralCell>
      <Text>
      In 2014-2015 California used the California Standard Tests (CSTs) to test students in science in grades 5,8 and 10,. The CSTs are standards-based tests, which means they measure how well students are mastering specific skills defined for each grade...
      <Text style={styles.hyperlink}>More</Text>
      </Text>
      </GeneralCell>
      </Section>
      </ScrollView>
    );
  }

  tab3() {
    return (
      <ScrollView style={styles.tabs}>
      <Section title={"total review"}>
      <GeneralCell>
      </GeneralCell>
      </Section>
      </ScrollView>
    );
  }

  renderSegmented() {
    return (
      <SegmentedControl
        options={["overview", "stats", "review"]}
        ref={c => {this._segmented = c; if (c) {c.setSelected(0); console.log(c);}}}
        style={styles.segmentedControl}
        onSelect={this.switchTab.bind(this)} />
    );
  }

  render() {
    this._tabs = Array.from({length: 3});
    return (
      <View style={styles.container}>
      <View>
      <Image style={styles.slideImage} resizeMode={"contain"} source={require('../components/images/shutterstock3.jpg')} />
      <SchoolNameView name={"College Park High School"} icon={require('../components/images/school_icon.png')} />
      {this.renderSegmented()}
      </View>
      <Sections style={{flex: 1}} ref={c => this._sections = c}>
      {this.tab1()}
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
    opacity: 0,
    bottom: 0,
  },
  tabs: {
    flex: 1,
  }
});
