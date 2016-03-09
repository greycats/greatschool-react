'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import {Divider, sharedStyles} from './UI';
import {Sections, Section} from './section';
import Ads, {
  AdsCells,
  RecommendContent,
  RecommendContents,
} from './ads';
import {
  SchoolsIndicator,
  SchoolIcon,
  SchoolCell,
  SchoolCellMore,
} from './NearbySchools';

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
            this.props.navigator.push({name: 'ads', title: 'Ads'});
            //TODO
          }} />
        </View>
      </View>
    );
  }
}

export class PickSchoolScene extends Component {
  renderSummary() {
    return (
      <View>
        <Text style={[sharedStyles.navText, styles.navText]}>Pick a School</Text>
        <View style={styles.schoolIcons}>
          <SchoolIcon name={'elementary schools'} icon={require('./images/elementary_schools.png')} onPress={(e) => {console.log(e);}}/>
          <Divider vertical={true} />
          <SchoolIcon name={'middle schools'} icon={require('./images/middle_schools.png')} count={17} />
          <Divider vertical={true} />
          <SchoolIcon name={'high schools'} icon={require('./images/high_schools.png')} count={99} />
        </View>
        <Divider />
        <View style={styles.allNearBy}>
          <SchoolIcon name={'all nearby schools'} icon={require('./images/nearby_schools.png')} horizontal={true} scale={0.6} />
        </View>
      </View>
    );
  }

  renderSchoolList() {
    return (
      <Section title={"nearby schools"}>
      {SchoolCell.generateRandomSchools.bind(this)(3)}
      <SchoolCellMore count={7} />
      </Section>
    );
  }

  renderRecommendedContent() {
    return (
      <Section title={"recommended content"}>
      <RecommendContent />
      <RecommendContents totalPage={5} />
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
  },
  allNearBy: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 29,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
