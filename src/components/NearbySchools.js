'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  PropTypes,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {GradientText} from './gradient';
import {Button} from './UI';
import Actions from '../actions/Actions'

export default class SchoolsIndicator extends Component {
  static propTypes = {
    onExplore: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      number: 30
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <GradientText style={styles.schoolCount} fontSize={120} kern={-2.3}
        colors={['#FFFFFF', '#D8D8D8']} loc1={[0.64, 1 - 0.376]} loc2={[0.68, 1 - 0.76]}
        borderColor={'#FAE3E3'}
        text={this.state.number.toString()} />
      <View style={styles.caption}>
        <Text style={styles.text}>SCHOOLS IN THIS </Text>
        <Text style={[styles.text, styles.underline]}>NEIGHBORHOOD</Text>
      </View>
      <Button title="Let's explore" onClick={this.props.onExplore} />
      </View>
    );
  }
}

export class SchoolIcon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    horizontal: PropTypes.bool,
    icon: PropTypes.number.isRequired,
    count: PropTypes.number,
    ...View.propTypes
  };

  render() {
    let {name, icon, count, ...otherProps} = this.props;
    let opacity = count ? 1 : 0;
    return (
      <TouchableOpacity style={[this.props.horizontal ? styles.schoolH : styles.schoolV]} {...otherProps}>
        <Image style={styles.schoolAvatar} source={icon}>
          <View style={[styles.schoolSmallCountBackground, {opacity}]}>
            <Text style={styles.schoolSmallCount}>{count}</Text>
          </View>
        </Image>
        <Text style={[styles.text, styles.schoolCaption]} numberOfLines={0}>{name.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  schoolH: {
    flexDirection: 'row',
  },
  schoolV: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: 70,
    marginHorizontal: 5,
    // flexDirection: 'column',
  },
  schoolAvatar: {
    backgroundColor: '#155293',
    borderRadius: 35.5,
    width: 71,
    height: 71,
    overflow: 'visible',
  },
  schoolSmallCountBackground: {
    width: 23,
    height: 23,
    borderRadius: 11.5,
    backgroundColor: '#0B4782',
    position: 'absolute',
    top: 0,
    right: -5,
    opacity: 1,
    justifyContent: 'center',
  },
  schoolSmallCount: {
    alignSelf: 'center',
    fontSize: 12.57,
    fontFamily: 'ProximaNova-Semibold',
    color: '#6DFFEC',
    backgroundColor: 'transparent',
    lineHeight: 14,
  },
  schoolCaption: {
    fontSize: 12,
    marginTop: 19,
    shadowOpacity: 0.13,
    letterSpacing: 0.86,
    lineHeight: 19,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  schoolCount: {
    height: 141,
  },
  caption: {
    alignSelf: 'center',
    flexDirection: 'row',
    // justifyContent: 'center',
    marginBottom: 30
  },
  text: {
    color: 'white',
    fontFamily: 'ProximaNova-Bold',
    fontSize: 13,
    textAlign: 'center',
    shadowColor: '#004188',
    shadowOpacity: 0.22,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 6,
    letterSpacing: 0.93,
  },
  underline: {
    color: '#B8E986',
    textDecorationLine: 'underline'
  }
});
