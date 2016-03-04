'use strict';

import React, {
  View,
  Component,
  PropTypes,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native'

class TabBarItem extends Component {
  static propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      highlighted: false
    };
  }

  onSelect() {
    this.setState({highlighted: true});
    console.log("on select", this);
  }

  render() {
    var tintSelectedState = this.state.highlighted ? styles.tintHighlighted : styles.tintNormal;
    var selectedState = this.state.highlighted ? styles.highlighted : styles.normal;
    return (
      <TouchableHighlight style={styles.tabbarItem} underlayColor={'transparent'} onPress={this.onSelect.bind(this)}>
        <View>
        <Image style={[styles.tabbarIcon, tintSelectedState]} source={{uri: this.props.icon}} />
        <Text style={[styles.tabbarText, selectedState]}>{this.props.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export class TabBar extends Component {
  render() {
    return (
      <View style={styles.tabbar}>
        <TabBarItem icon={'nearby'} name={'Nearby'} />
        <TabBarItem icon={'search'} name={'Search'} />
        <TabBarItem icon={'my_schools'} name={'My Schools'} />
        <TabBarItem icon={'great_kids'} name={'GreatKids!'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    height: 66,
    shadowColor: 0x000000,
    shadowOpacity: 0.14,
    shadowRadius: 16,
    shadowOffset: {width: 0, height: 2},
    backgroundColor: 'white',
  },
  tabbarItem: {
    flex: 1,
    flexDirection: 'column',
  },
  tabbarIcon: {
    width: 34,
    height: 34,
    alignSelf: 'center',
    marginTop: 7,
    marginBottom: 2,
  },
  tabbarText: {
    textAlign: 'center',
    fontFamily: 'ProximaNova-Semibold',
    fontSize: 11,
  },
  highlighted: {
    color: '#0E94C7',
  },
  normal: {
    color: '#888889',
  },
  tintHighlighted: {
    tintColor: '#0E94C7',
  },
  tintNormal: {
    tintColor: '#888889'
  }
});
