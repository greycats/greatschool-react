'use strict';

import React, {PropTypes, Component, View, Image, Text} from 'react-native';

export default class SchoolNameView extends Component {
  static propTypes = {
    icon: PropTypes.number,
    name: PropTypes.string,
    ...View.propTypes
  };

  render() {
    let {icon, name, ...otherProps} = this.props;
    return (
      <View style={styles.container}>
      <View style={styles.outer}>
      <View style={styles.background}>
      <Image style={styles.icon} source={icon} />
      </View>
      </View>
      <Text style={styles.name}>{name}</Text>
      </View>
    );
  }
}

const styles = React.StyleSheet.create({
  container: {
    top: 25,
    left: 0,
    right: 0,
    position: 'absolute',
    alignItems: 'center',
  },
  outer: {
    justifyContent: 'center',
    width: 75, height: 75,
    borderRadius: 37.5,
    backgroundColor: '#00000030',
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0DA7E3',
    width: 56, height: 56,
    borderRadius: 28,
    margin: 10,
  },
  name: {
    paddingHorizontal: 50,
    fontSize: 20,
    lineHeight: 36,
    color: 'white',
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 19,
    shadowOpacity: 0.22,
  },
  icon: {
    marginBottom: 3,
  }
});
