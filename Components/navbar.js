'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

export class NavigationBar extends Component {
  static propTypes = {
    title: React.PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    var title;
    if (this.props.title != null) {
      title = <Text style={styles.title}>{this.props.title}</Text>;
    } else {
      title = <Image style={styles.logo} source={{uri: 'logo'}} />;
    }
    return <View>{title}</View>;
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 107,
    height: 25,
    alignSelf: 'center',
    flex: 1,
    marginTop: 45,
  },
  title: {
    flex: 1,
    paddingTop: 59,
    textAlign: 'center',
    fontFamily: 'ProximaNova-Bold',
    fontSize: 18,
    color: '#FFFFFF'
  }
});
