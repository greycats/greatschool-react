'use strict';

import React, {
  TouchableHighlight,
  View,
  Component,
  PropTypes,
  Image,
  Text,
} from 'react-native';

export default class Ads extends Component {
  static propTypes = {
    onClick: PropTypes.func
  };

  _onPressButton() {
    this.props.onClick();
  }

  render() {
    return (
      <View style={styles.ads}>
        <View style={styles.left}>
          <Text style={styles.header}>ARTICLE</Text>
          <Text style={styles.body} numberOfLines={0}>Are our screen-addicted kids frying their brains?</Text>
          <Text style={styles.footer}>Content by: GreatKids</Text>
        </View>
        <View style={styles.right}>
          <TouchableHighlight underlayColor={'transparent'} onPress={this._onPressButton.bind(this)}>
            <Image style={styles.go} source={{uri: 'go'}} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = React.StyleSheet.create({
  ads: {
    flexDirection: 'row',
    marginTop: 18,
    marginLeft: 36,
    marginBottom: 43,
    marginRight: 26,
    justifyContent: 'space-between'
  },
  left: {
    flexDirection: 'column',
    flex: 1
  },
  right: {
    width: 44,
    alignSelf: 'center',
  },
  go: {
    alignSelf: 'flex-end',
    width: 35,
    height: 35,
  },
  header: {
    fontFamily: 'ProximaNova-Bold',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  body: {
    fontFamily: 'ProximaNova-Semibold',
    fontSize: 18,
    color: 'white',
    shadowColor: '#004188',
    shadowOpacity: 0.22,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 8,
    justifyContent: 'center',
    flexDirection: 'column',
    lineHeight: 24,
    letterSpacing: 0.6,
    marginTop: 11,
  },
  footer: {
    marginTop: 9,
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 12,
    letterSpacing: 0.2,
  }
});
