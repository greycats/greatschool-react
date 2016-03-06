'use strict';

import React, {
  View,
  Component,
  PropTypes,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import TabStore from '../stores/TabStore';
import Actions from '../actions/Actions';
import connectToStores from 'alt-utils/lib/connectToStores';

class TabBarItem extends Component {
  static getStores() {
    return [TabStore];
  }

  static getPropsFromStores() {
    return TabStore.getState();
  }

  static propTypes = {
    icon: PropTypes.number,
    name: PropTypes.string,
    highlighted: PropTypes.bool,
    id: PropTypes.number
  };

  onSelect() {
    Actions.switchTab(this.props.id);
  }

  render() {
    let selected = this.props.selectedTab == this.props.id;
    var tintSelectedState = selected ? styles.tintHighlighted : styles.tintNormal;
    var selectedState = selected ? styles.highlighted : styles.normal;
    return (
      <TouchableHighlight style={styles.tabbarItem} underlayColor={'transparent'} onPress={this.onSelect.bind(this)}>
        <View>
          <Image style={[styles.tabbarIcon, tintSelectedState]} source={this.props.icon} />
          <Text style={[styles.tabbarText, selectedState]}>{this.props.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

TabBarItem = connectToStores(TabBarItem);

export default class TabBar extends Component {
  render() {
    return (
      <View style={styles.tabbar}>
      <TabBarItem icon={require('./images/nearby.png')} name={'Nearby'} key={0} id={0} />
      <TabBarItem icon={require('./images/search.png')} name={'Search'} key={1} id={1} />
      <TabBarItem icon={require('./images/my_schools.png')} name={'My Schools'} key={2} id={2} />
      <TabBarItem icon={require('./images/great_kids.png')} name={'GreatKids!'} key={3} id={3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    height: 66,
    shadowColor: 'black',
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
