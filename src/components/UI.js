'use strict';

import React, {
  TouchableHighlight,
  View,
  Component,
  PropTypes,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export class Background extends Component {
  render() {
    return (
      <LinearGradient style={{flex: 1}}
        colors={['#1076CD', '#2BACD0', '#31BBDE']}
        locations={[0, 0.85, 0.93]} start={[0.17, 0]} end={[0.4, 1]}
        {...this.props} />
    );
  }
}

export class Divider extends Component {
  render() {
    var start = [0, 0.5];
    var end = [1, 0.5];
    var locations = [0, 0.25, 0.75, 1];

    return (
      <View>
      <LinearGradient style={styles.divider}
        colors={['#ffffff0f', '#ffffff68', '#ffffff68', '#ffffff0f']}
        locations={locations} start={start} end={end} />
      <LinearGradient style={styles.divider}
        colors={['#00000002', '#00000019', '#00000019', '#00000002']}
        locations={locations} start={start} end={end} />
      </View>
    );
  }
}

export class Button extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };

  _onPressButton() {
    this.props.onClick();
  }

  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={this.props.onClick} underlayColor={'transparent'}>
        <View>
          <LinearGradient style={styles.button}
            colors={['#AEE248', '#76C223']}>
            <Text style={styles.buttonText}>{this.props.title}</Text>
          </LinearGradient>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = React.StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  divider: {
    height: 1,
    marginBottom: 2
  },
  button: {
    borderRadius: 5,
    backgroundColor: 'black',
    width: 175,
    height: 44,
    shadowColor: '#101112',
    shadowOffset: {width: 0, height: 7},
    shadowRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.15,
  },
  buttonText: {
    backgroundColor: "transparent",
    fontFamily: 'ProximaNova-Bold',
    fontSize: 15,
    color: 'white',
    letterSpacing: 1.07,
  }
});
