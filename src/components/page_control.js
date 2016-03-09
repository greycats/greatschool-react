'use strict';

import React, {
  TouchableOpacity,
  View,
  Component,
  StyleSheet,
  PropTypes,
} from 'react-native';
import Actions from '../actions';
import PageControlStore from '../stores/PageControlStore';

export default class PageControl extends Component {
  static propTypes = {
    totalPage: PropTypes.number.isRequired,
    onSelectPage: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
  }

  componentDidMount() {
    PageControlStore.listen(this.onPageChange.bind(this));
  }

  componentWillUnmount() {
    PageControlStore.unlisten(this.onPageChange.bind(this));
  }

  onPageChange(state) {
    let page = state[this.props.id];
    if (page != this.state.currentPage) {
      this.setState({currentPage: page});
    }
  }

  render() {
    let length = this.props.totalPage;
    let page = this.state.currentPage;
    return (
      <View style={styles.pageControl}>
      {
        Array.from({length}, (v, i) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => Actions.switchPageControl(this.props.id, i)}
              key={i}
              style={[styles.dot, i == page ? styles.on : styles.off]} />
          );
        })
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageControl: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 12,
    paddingBottom: 32,
  },
  dot: {
    borderRadius: 5,
    width: 10,
    height: 10,
    marginHorizontal: 3,
  },
  on: {
    backgroundColor: '#8593A2'
  },
  off: {
    backgroundColor: '#C1D2D98E'
  }
});
