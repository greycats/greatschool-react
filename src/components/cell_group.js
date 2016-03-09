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

export class CellStack extends Component {
  render() {
    return (
      <View style={{paddingTop: 42}}>
      <GeneralCell style={styles.backCell2} />
      <GeneralCell style={styles.backCell1} />
      <GeneralCell {...this.props} />
      </View>
    );
  }
}

const styles = React.StyleSheet.create({
  separator: {
    height: 1, backgroundColor: '#D1DFE5', opacity: 0.8, flex: 1,
  },
  backCell1: {
    position: 'absolute',
    height: 200,
    left: 15, right: 15, top: 30,
    shadowOpacity: 0.12
  },
  backCell2: {
    position: 'absolute',
    height: 200,
    left: 29, right: 29, top: 21,
    shadowOpacity: 0.12
  },
});
