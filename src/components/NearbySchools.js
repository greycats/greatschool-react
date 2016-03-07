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
    scale: PropTypes.number,
    horizontal: PropTypes.bool,
    icon: PropTypes.number.isRequired,
    count: PropTypes.number,
    ...View.propTypes
  };

  render() {
    let {name, icon, count, ...otherProps} = this.props;
    let opacity = count ? 1 : 0;
    let size = 71 * (this.props.scale || 1);
    let schoolSize = this.props.horizontal ? {height: size, marginVertical: 5, flexDirection: 'row'} : {width: size, marginHorizontal: 5, flex: 1};

    let backgroundColor = `rgba(21, 82, 147, ${size < 71 ? 0.5 : 1})`;
    let avatar = {width: size, height: size, borderRadius: size / 2, backgroundColor, overflow: 'visible'};
    let textSize = this.props.horizontal ? {marginLeft: 19} : {marginTop: 19};
    return (
      <TouchableOpacity style={[styles.school, schoolSize]} {...otherProps}>
        <Image style={avatar} source={icon}>
          <View style={[styles.schoolSmallCountBackground, {opacity}]}>
            <Text style={styles.schoolSmallCount}>{count}</Text>
          </View>
        </Image>
        <Text style={[styles.text, styles.schoolCaption, textSize]}>{name.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  school: {
    paddingTop: 20,
    alignItems: 'center',
    alignSelf: 'flex-start',
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
