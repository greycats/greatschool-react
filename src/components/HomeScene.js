'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import {Divider, SchoolList, Background} from './UI';

import Ads from './ads';
import {GradientText} from './gradient';
import SchoolsIndicator, {SchoolIcon} from './NearbySchools';

export default class HomeScene extends Component {
  render() {
    return (
      <Background style={styles.container}>
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
      </Background>
    );
  }
}

export class PickSchoolScene extends Component {
  render() {
    return (
      <View>
      <Background style={styles.background}>
      <View style={styles.schools}>
        <SchoolIcon name={'elementary schools'} icon={require('./images/elementary_schools.png')} onPress={(e) => {console.log(e);}}/>
        <Divider vertical={true} />
        <SchoolIcon name={'middle schools'} icon={require('./images/middle_schools.png')} count={17} />
        <Divider vertical={true} />
        <SchoolIcon name={'high schools'} icon={require('./images/high_schools.png')} count={99} />
      </View>
      <Divider />
      <View style={styles.allNearBy}>
        <SchoolIcon name={'all nearby schools'} icon={require('./images/nearby_schools.png')} horizontal={true} />
      </View>
      </Background>
      <ScrollView style={styles.pickScrollView} contentInset={{top: 355}} contentOffset={{y: -355}} showsVerticalScrollIndicator={false}>
        <View style={{height: 1000, backgroundColor:'#F0F5F6'}}></View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    paddingBottom: 95,
  },
  pickScrollView: {
    flex: 1,
    backgroundColor: 'transparent',
    marginTop: -355,
  },
  pickScrollViewContainer: {
    marginTop: 1,
  },
  container: {
    flex: 1,
  },
  schools: {
    marginTop: 111,
    height: 189,
    marginBottom: 29,
    flexDirection: 'row',
  },
  allNearBy: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  nearby: {
    // alignSelf: 'center'
  }
});
