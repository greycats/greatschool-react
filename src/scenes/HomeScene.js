'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Linking,
} from 'react-native';
import {Divider, sharedStyles, GeneralCell} from '../components/UI';
import {Sections, Section} from '../components/section';
import {CellStack} from '../components/cell_group';
import PageControl from '../components/page_control';

import Ads, {
  AdsCells,
  RecommendedContent1,
  RecommendedContent2,
} from '../components/ads';
import SchoolIcon from '../components/school_icon';
import SchoolCell, {SchoolCellMore} from '../components/school_cell';
import SchoolsIndicator from '../components/school_indicator';

export default class HomeScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SchoolsIndicator onExplore={() => {
          this.props.navigator.push({name: 'home-step2', index: 1});
        }} />
        <View>
          <Divider />
          <Ads onClick={() => {
            // Linking.openURL('http://www.greatschools.org/gk/articles/how-to-teach-shapes-and-spatial-skills-to-your-preschooler/')
          }} />
        </View>
      </View>
    );
  }
}

export class PickSchoolScene extends Component {
  renderSchools() {
    return (
      <View>
      <View style={styles.schoolIcons}>
        <SchoolIcon name={'elementary schools'} onPress={(e) => {}}/>
        <Divider vertical={true} />
        <SchoolIcon name={'middle schools'} count={17} />
        <Divider vertical={true} />
        <SchoolIcon name={'high schools'} count={99} />
      </View>
      <Divider />
      <View style={styles.allNearBy}>
        <SchoolIcon name={'all nearby schools'} horizontal={true} scale={0.6} />
      </View>
      </View>
    );
  }

  renderSchools2() {
    return (
      <View style={[styles.schoolIcons, styles.schoolIconsV]}>
      <View style={styles.iconCol}>
        <SchoolIcon name={'assigned schools'} style={styles.iconV1} />
        <SchoolIcon name={'middle schools'} style={styles.iconV2} count={17} />
      </View>
      <Divider vertical={true} />
      <View style={styles.iconCol}>
        <SchoolIcon name={'elementary schools'} style={styles.iconV1} />
        <SchoolIcon name={'high schools'} style={styles.iconV2} count={99} />
      </View>
      <Divider style={styles.divider} />
      </View>
    );
  }

  renderSummary() {
    return (
      <View>
        <Text style={[sharedStyles.navText, styles.navText]}>Pick a School</Text>
        {this.renderSchools2()}
      </View>
    );
  }

  renderSchoolList() {
    return (
      <Section title={"assigned schools"}>
      {SchoolCell.generateRandomSchools.bind(this)(3)}
      <SchoolCellMore count={7} />
      </Section>
    );
  }

  renderRecommendedContent() {
    return (
      <Section title={"recommended content"}>
      <GeneralCell onClick={(e) => {}}>
      <RecommendedContent1 />
      </GeneralCell>
      <CellStack onClick={(e) => {}}>
      <RecommendedContent2 />
      </CellStack>
      <PageControl id={"recomment_contents"} totalPage={5} />
      <AdsCells />
      </Section>
    );
  }

  render() {
    return (
      <ScrollView style={[styles.container, {marginTop: 20}]} showsVerticalScrollIndicator={false}>
        {this.renderSummary()}
        <Sections>
          {this.renderSchoolList()}
          {this.renderRecommendedContent()}
        </Sections>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navText: {
    marginTop: 39,
    fontFamily: 'ProximaNova-Bold',
  },
  schoolIcons: {
    marginTop: 47,
    height: 189,
    marginBottom: 29,
    flexDirection: 'row',
    flex: 1,
  },
  schoolIconsV: {
    marginTop: 27,
    marginBottom: 49,
    height: 189 + 95,
  },
  iconCol: {
    flex: 1,
    justifyContent: 'center',
  },
  iconV1: {
    alignSelf: 'center',
    width: 130,
    marginBottom: 30,
  },
  iconV2: {
    alignSelf: 'center',
    width: 130,
    marginTop: 30,
  },
  divider: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 160,
  },
  allNearBy: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 29,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
