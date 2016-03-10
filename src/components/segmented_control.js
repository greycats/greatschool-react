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

class SegmentedItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    onSelect: PropTypes.func,
  };

  setSelected(selected) {
    this._text.setNativeProps({style: {opacity: selected ? 1 : 0.7}});
    this._line.setNativeProps({style: {opacity: selected ? 1 : 0}});
  }

  render() {
    return (
      <TouchableHighlight style={styles.item} underlayColor={'transparent'} onPress={this.props.onSelect}>
      <View>
        <Text ref={c => this._text = c } style={styles.text}>{this.props.name.toUpperCase()}</Text>
        <View ref={c => this._line = c } style={styles.indicator} />
      </View>
      </TouchableHighlight>
    );
  }
}

export default class SegmentedControl extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    ...View.propTypes
  };

  onSelect(id) {
    this.setSelected(id);
    if (this.props.onSelect) this.props.onSelect(id);
  }

  setSelected(id) {
    this._items.forEach((item, i) => {
      if (item) item.setSelected(id == i);
    });
  }

  render() {
    let {options, style, ...otherProps} = this.props;
    this._items = [];
    return (
      <View style={[styles.container, style]} {...otherProps}>
      {options.map((option, i) => {
        return <SegmentedItem
          ref={c => this._items.push(c)}
          onSelect={e => this.onSelect(i)}
          name={option} key={i} />
      })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    width: 100,
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    fontFamily: 'ProximaNova-Semibold',
    fontSize: 14,
    color: 'white',
    letterSpacing: 1,
    paddingBottom: 20,
  },
  indicator: {
    backgroundColor: '#F2F2F2',
    height: 6,
    left: -15,
    right: -15,
    bottom: 0,
    position: 'absolute',
  },
});
