'use strict';

import React, {
  View,
  Component,
} from 'react-native';
import {GeneralCell} from './UI';

export default class CellGroup extends Component {
  render() {
    let {children, ...otherProps} = this.props;
    var i = 0;
    var newChildren = React.Children.map(children, (el) => React.cloneElement(el, {key: i++}));
    for (var i = children.length - 1; i > 0; i --) {
      newChildren.splice(i, 0, (<View key={`sep${i}`} style={styles.separator}/>));
    }
    return (
      <GeneralCell {...otherProps}>{newChildren}</GeneralCell>
    );
  }
}

const styles = React.StyleSheet.create({
  separator: {
    height: 1, backgroundColor: '#D1DFE5', opacity: 0.8, flex: 1,
  },
});
