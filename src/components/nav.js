'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import TabStore from '../stores/TabStore';
import {sharedStyles} from './UI';

export default class Navigator extends Component {
  constructor() {
    super();
    this.state = TabStore.getState();
  }

  componentDidMount() {
    TabStore.listen(this.onTabChange);
  }

  componentWillUnmount() {
    TabStore.unlisten(this.onTabChange);
  }

  renderScene(route, navigator) {
    this.onTabChange = (tab) => {
      switch (tab.selectedTab) {
        case 0:
          navigator.resetTo({name: 'home-step1', index: 0});
          break;
        case 1:
          navigator.resetTo({name: 'search', title: 'Search', index: 0});
          break;
        case 2:
          navigator.resetTo({name: 'schools', title: 'My Schools', index: 0});
          break;
        case 3:
          navigator.resetTo({name: 'kids', title: 'GreatKids', index: 0});
          break;
        default:
          break;
      }
    };
    // if (this.props.tabbar) {
    //   let tabbar = this.props.tabbar();
    //   if (tabbar && route.name == "school") {
    //     console.log(tabbar.setNativeProps);
    //     if (tabbar.setNativeProps) {
    //       tabbar.setNativeProps({style: {opacity: 0}});
    //     }
    //   }
    // }
    let scene = this.props.map[route.name];
    if (scene) {
        return React.cloneElement(scene, {navigator, style: styles.container});
    }

  }

  render() {
    return <React.Navigator
      initialRoute={{name: 'home-step1', index: 0}}
      renderScene={this.renderScene.bind(this)}
      navigationBar={
        <React.Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} />
      }
    />
  }
}

const NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) => {
    if (route.name == "search") {
      return (
        <TouchableOpacity onPress={() => {}}>
          <Image style={styles.navLeftIcon} source={require('./images/hamburger.png')} />
        </TouchableOpacity>
      );
    }
    if (index === 0 || route.title == null) {
      return null
    }
    const previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()} style={{paddingLeft: 0}}>
        <Image style={styles.navLeftIcon} source={require('./images/back.png')} />
      </TouchableOpacity>
    )
  },

  RightButton: (route, navigator, index, navState) => {
    if (route.name == "search") {
      return (
        <TouchableOpacity
          onPress={() => {}}>
          <Image style={styles.navRightIcon} source={require('./images/map_icon.png')} />
        </TouchableOpacity>
      );
    }
    if (route.rightElement) {
      return route.rightElement
    }
  },

  Title: (route, navigator, index, navState) => {
    if (route.title != null) {
      return (
        <View style={styles.navTitle}>
        <Text style={sharedStyles.navText}>{route.title}</Text>
        </View>
      );
    }
  }
};

const styles = StyleSheet.create({
  navTitle: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
  },
  navLeftIcon: {
    marginTop: (Platform.OS == 'ios') ? 9 : 16,
    marginLeft: 5,
  },
  navRightIcon: {
    marginTop: (Platform.OS == 'ios') ? 9 : 16,
    marginRight: 5,
  },
  logo: {
    // marginTop: 20, ios only
  },
});
