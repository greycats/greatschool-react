'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  PropTypes,
  Platform,
  Text,
} from 'react-native';
import {GradientText} from './gradient';
import {Button, sharedStyles, shadows, Shadow} from './UI';

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
      <View style={styles.container}>
      <GradientText style={styles.number} fontSize={120} kern={-2.3}
        colors={['#FFFFFF', '#D8D8D8']} loc1={[0.64, 1 - 0.376]} loc2={[0.68, 1 - 0.76]}
        borderColor={'#FAE3E3'} {...Shadow.text}
        text={this.state.number.toString()} />
      <Text style={[shadows.text, sharedStyles.boldText, {marginBottom: 30}]}>SCHOOLS IN THIS <Text style={styles.underline}>NEIGHBORHOOD</Text></Text>
      <Button title="Let's explore" onClick={this.props.onExplore} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  underline: {
    color: '#B8E986',
    textDecorationLine: 'underline'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  number: {
    height: (Platform.OS === 'ios') ? 141 : 100,
    alignSelf: (Platform.OS === 'ios') ? null : 'center',
  }
});
