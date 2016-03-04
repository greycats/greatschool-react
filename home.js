'use strict';

import React, {
  Component,
  View,
} from 'react-native';

import {Divider} from './Components/components';
import {GradientText} from './Components/gradient';
import {NavigationBar} from './Components/navbar';

class SchoolsCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 30
    }
  }

  render() {
    return (
      <GradientText style={{height: 141}} fontSize={120} kern={-2.3}
        colors={['#FFFFFF', '#D8D8D8']} loc1={[0.64, 1 - 0.376]} loc2={[0.68, 1 - 0.76]}
        borderColor={'#FAE3E3'}
        text={this.state.number.toString()} />
    );
  }
}

export class HomeScene extends Component {
  render() {
    return (
      <View>
      <NavigationBar />
      <SchoolsCount />
      <Divider />
      </View>
    );
  }
}
