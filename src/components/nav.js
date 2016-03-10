'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
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
        default:
          break;
      }
    };
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
    var title;
    if (route.title != null) {
      title = <Text style={sharedStyles.navText}>{route.title}</Text>;
    } else if (route.index == 0) {
      title = <Image style={styles.logo} source={require('./images/logo.png')} />;
    }
    return (
      <View style={styles.navTitle}>
        {title}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  navTitle: {
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 20,
  },
  navLeftIcon: {
    marginTop: 9,
    marginLeft: 5,
  },
  navRightIcon: {
    marginTop: 9,
    marginRight: 5,
  },
  logo: {
    // marginTop: 20, ios only
  },
});
