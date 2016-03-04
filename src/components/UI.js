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
    switch (this.props.type) {
    case 'home-step1':
      return <LinearGradient style={{flex: 1}}
        colors={['#176BC3', '#30B1D7']} start={[0, 0]} end={[0.23, 1]}
        {...this.props} />;
    case 'home-step2':
      return <LinearGradient style={{flex: 1}}
        colors={['#1769C2', '#38C8DD']} start={[0.26, 0.12]} end={[0.14, 0.98]}
        {...this.props} />;
    default:
      return (
      <LinearGradient style={{flex: 1}}
        colors={['#1076CD', '#2BACD0', '#31BBDE']}
        locations={[0, 0.85, 0.93]} start={[0.17, 0]} end={[0.4, 1]}
        {...this.props} />
      );
    }
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
