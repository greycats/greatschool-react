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
import alt from '../alt';
import TabStore from '../stores/TabStore';
import TabActions from '../actions/TabActions';
import connectToStores from 'alt-utils/lib/connectToStores';

class TabBarItem extends Component {
  static getStores() {
    return [TabStore];
  }

  static getPropsFromStores() {
    return TabStore.getState();
  }

  static propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string,
    highlighted: PropTypes.bool,
    id: PropTypes.number
  };

  onSelect() {
    console.log('onSelect', 'TabActions.switchTab', this.props.id);
    TabActions.switchTab(this.props.id);
  }

  render() {
    let selected = this.props.selectedTab == this.props.id;
    var tintSelectedState = selected ? styles.tintHighlighted : styles.tintNormal;
    var selectedState = selected ? styles.highlighted : styles.normal;
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

TabBarItem = connectToStores(TabBarItem);

export class TabBarView extends Component {
  static propTypes = {
    defaultTab: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: props.defaultTab || 0
    };
  }

  render() {
    let {children, ...otherProps} = this.props;
    var id = 0;
    return (
      <View style={styles.tabbar} {...otherProps}>
      {React.Children.map(children, (el)=>{
          return <TabBarItem {...el.props} key={el.props.name} id={id++} />
        })
      }</View>
    );
  }
}

export class TabBar extends Component {
  render() {
    return (
      <TabBarView>
        <TabBarItem icon={'nearby'} name={'Nearby'} />
        <TabBarItem icon={'search'} name={'Search'} />
        <TabBarItem icon={'my_schools'} name={'My Schools'} />
        <TabBarItem icon={'great_kids'} name={'GreatKids!'} />
      </TabBarView>
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
