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
import {sharedStyles} from './UI';
import {SmallBadge} from './badge';

export default class SchoolIcon extends Component {
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
    let size = 71 * (this.props.scale || 1);
    let schoolSize = this.props.horizontal ? {height: size, marginVertical: 5, flexDirection: 'row'} : {width: size, marginHorizontal: 5, flex: 1};

    let backgroundColor = `rgba(21, 82, 147, ${size < 71 ? 0.5 : 1})`;
    let avatar = {width: size, height: size, borderRadius: size / 2, backgroundColor, overflow: 'visible'};
    let textSize = this.props.horizontal ? {marginLeft: 19} : {marginTop: 19};
    return (
      <TouchableOpacity style={[styles.school, schoolSize]} {...otherProps}>
        <Image style={avatar} source={icon}>
          <SmallBadge number={count} />
        </Image>
        <Text style={[sharedStyles.shadowText, sharedStyles.boldText, styles.schoolCaption, textSize]}>{name.toUpperCase()}</Text>
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
  schoolCaption: {
    fontSize: 12,
    shadowOpacity: 0.13,
    letterSpacing: 0.86,
    lineHeight: 19,
  },
});
