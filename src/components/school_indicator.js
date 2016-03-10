'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  PropTypes,
  Text,
} from 'react-native';
import {GradientText} from './gradient';
import {Button, sharedStyles, TextShadow} from './UI';

export default class SchoolsIndicator extends Component {
  static propTypes = {
    onExplore: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      number: 30
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
      <GradientText style={{height: 141}} fontSize={120} kern={-2.3}
        colors={['#FFFFFF', '#D8D8D8']} loc1={[0.64, 1 - 0.376]} loc2={[0.68, 1 - 0.76]}
        borderColor={'#FAE3E3'} {...TextShadow}
        text={this.state.number.toString()} />
      <Text style={[sharedStyles.shadowText, sharedStyles.boldText, {marginBottom: 30}]}>SCHOOLS IN THIS <Text style={styles.underline}>NEIGHBORHOOD</Text></Text>
      <Button title="Let's explore" onClick={this.props.onExplore} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  underline: {
    color: '#B8E986',
    textDecorationLine: 'underline'
  }
});
