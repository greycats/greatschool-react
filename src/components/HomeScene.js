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
import SchoolsIndicator, {SchoolIcon} from './NearbySchools';

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
          <View style={styles.schools}>
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
        <View style={{height: 1000, backgroundColor:'#F0F5F6'}}></View>
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
  schools: {
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
    // alignItems: 'center',
    justifyContent: 'center',
  },
  nearby: {
    // alignSelf: 'center'
  }
});
