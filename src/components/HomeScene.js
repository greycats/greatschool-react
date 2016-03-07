'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import {Divider, SchoolList} from './UI';

import Ads from './ads';
import {GradientText} from './gradient';
import SchoolsIndicator, {SchoolIcon, SchoolCell} from './NearbySchools';

export default class HomeScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SchoolsIndicator onExplore={e=> {
          this.props.navigator.push({name: 'home-step2', title: 'Pick a School'});
        }} />
        <View>
          <Divider />
          <Ads onClick={e=>{
            this.props.navigator.push({name: 'ads', title: 'Ads'})
            //TODO
          }} />
        </View>
      </View>
    );
  }
}

export class PickSchoolScene extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View>
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
        <View style={{backgroundColor:'#F0F5F6', overflow: 'hidden', flexDirection: 'column'}}>
        <View style={styles.shadowWrapper}>
          <View style={styles.shadow} />
        </View>
        <Text style={styles.headerText}>NEARBY SCHOOLS</Text>
        <View style={styles.cells}>
        <SchoolCell name={"School Name A"} address={"Public | 9 - 12 | Pleasant Hill, CA"} distance={"3.25 Miles"} count={9} ratings={4} reviews={214} />
        <SchoolCell name={"School Name A"} address={"Public | 9 - 12 | Pleasant Hill, CA"} distance={"3.25 Miles"} count={5} ratings={3} reviews={114} />
        <SchoolCell name={"School Name A"} address={"Public | 9 - 12 | Pleasant Hill, CA"} distance={"3.25 Miles"} count={9} ratings={4} reviews={314} />
        </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'transparent',
    marginTop: 64,
  },
  pickScrollViewContainer: {
    marginTop: 1,
  },
  container: {
    flex: 1,
  },
  schoolIcons: {
    marginTop: 47,
    height: 189,
    marginBottom: 29,
    flexDirection: 'row',
  },
  cells: {
    marginTop: 52,
  },
  allNearBy: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 29,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  shadowWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    overflow: 'visible',
  },
  shadow: {
    flex: 1,
    backgroundColor: 'black',
    height: 10,
    marginTop: -10,
    overflow: 'visible',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 16,
  },
  headerText: {
    position: 'absolute',
    left: 20,
    top: 20,
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'flex-start',
    fontFamily: 'ProximaNova-Semibold',
    fontSize: 14,
    color: '#888889',
    letterSpacing: 1
  },
  nearby: {
    // alignSelf: 'center'
  }
});
