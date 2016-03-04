'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  Navigator,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  navigationBar: {
    height: 100

  },
  logo: {
    width: 107,
    height: 25,
  },
  title: {
    fontFamily: 'ProximaNova-Bold',
    fontSize: 18,
    color: '#FFFFFF'
  }
});

const NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) => {
    if (index === 0) {
      return null
    }
    const previousRoute = navState.routeStack[index - 1]
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}>
        <Text style={styles.navText}>
          {previousRoute.title}
        </Text>
      </TouchableOpacity>
    )
  },
  RightButton: (route, navigator, index, navState) => {
    if (route.rightElement) {
      return route.rightElement
    }
  },

  Title(route, navigator, index, navState) {
    var title;
    if (route.title != null) {
      title = <Text style={styles.title}>{route.title}</Text>;
    } else {
      title = <Image style={styles.logo} source={{uri: 'logo'}} />;
    }
    return (
      <View style={{flexDirection: 'column', flex: 1, justifyContent: 'flex-end'}}>
        {title}
      </View>
    );

  }
};

export default (
  <Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} style={styles.navigationBar}/>
);
