'use strict';

import React, {Component, View, Text} from 'react-native';

export class Sections extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.shadowWrapper}>
          <View style={styles.shadow} />
        </View>
        {this.props.children}
      </View>
    );
  }
}

export class Section extends Component {
  render() {
    let {title, ...otherProps} = this.props;
    return (
      <View>
        <Text style={styles.headerText}>{title.toUpperCase()}</Text>
        <View {...otherProps} style={styles.cells} />
      </View>
    );
  }
}

const styles = React.StyleSheet.create({
  container: {
    backgroundColor:'#F0F5F6',
    overflow: 'hidden',
    flexDirection: 'column',
  },
  shadowWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    overflow: 'visible',
  },
  cells: {
    marginTop: 52,
  },
  shadow: {
    flex: 1,
    backgroundColor: 'black',
    height: 10,
    marginTop: -10,
    overflow: 'visible',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 16,
  },
  headerText: {
    position: 'absolute',
    left: 20,
    top: 20,
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'flex-start',
    fontFamily: 'ProximaNova-Semibold',
    fontSize: 14,
    color: '#888889',
    letterSpacing: 1
  },
});
