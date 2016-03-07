'use strict';

import React, {
  TouchableOpacity,
  View,
  Component,
  PropTypes,
  Image,
  Text,
} from 'react-native';
import {Button, GeneralCell, sharedStyles} from './UI';
import LinearGradient from 'react-native-linear-gradient';

export default class Ads extends Component {
  static propTypes = {
    onClick: PropTypes.func
  };

  render() {
    return (
      <View style={styles.ads}>
        <View style={styles.left}>
          <Text style={styles.header}>ARTICLE</Text>
          <Text style={styles.body} numberOfLines={0}>Are our screen-addicted kids frying their brains?</Text>
          <Text style={styles.footer}>Content by: GreatKids</Text>
        </View>
        <View style={styles.right}>
          <TouchableOpacity underlayColor={'transparent'} onPress={this.props.onClick}>
            <Image style={styles.go} source={require('./images/go.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export class AdsCells extends Component {
  renderAds(text, icon) {
    return (
      <TouchableOpacity style={[sharedStyles.cellContent, styles.adsContent]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={icon} />
        <Text style={styles.adsText}>{text}</Text>
        </View>
        <Image source={require('./images/disclosure_button.png')} />
      </TouchableOpacity>
    );
  }

  renderSeparater() {
    return (
      <View style={{height: 1, backgroundColor: '#D1DFE5', opacity: 0.8, flex: 1}}/>
    )
  }

  render() {
    let {children, ...otherProps} = this.props;

    return (
      <GeneralCell {...otherProps}>
      {this.renderAds("Feeling Word Game", require('./images/ads_icon1.jpg'))}
      {this.renderSeparater()}
      {this.renderAds("Emotional Toolbox", require('./images/ads_icon2.jpg'))}
      {this.renderSeparater()}
      {this.renderAds("Through a child’s eyes videos", require('./images/ads_icon3.jpg'))}
      </GeneralCell>
    );
  }
}

export class RecommendContent extends Component {
  render() {
    let {children, ...otherProps} = this.props;
    return (
      <GeneralCell {...otherProps}>
      <TouchableOpacity style={styles.recommendContent}>
      <LinearGradient colors={['#FFFAF6', '#FFDBC5']} start={[0.37, 0.12]} end={[0.44, 1]}>
      <Image style={styles.recommendedImage} source={require('./images/shutterstock.png')} />
      <Text style={[sharedStyles.buttonText, styles.recommendedTitle]}>MILESTONE</Text>
      <Text style={[sharedStyles.buttonText, styles.recommendedText]}>Free online collection of videos aimed at helping you understand your kid’s grade-level expectations</Text>
      <Button style={styles.exploreButton} colors={['#F99913', '#F26620']} start={[0.72, 0]} end={[0.62, 1]} title={"Let’s explore"} />

      </LinearGradient>
      </TouchableOpacity>
      </GeneralCell>
    );
  }
}

const styles = React.StyleSheet.create({
  ads: {
    flexDirection: 'row',
    marginTop: 18,
    marginLeft: 36,
    marginBottom: 43,
    marginRight: 26,
    justifyContent: 'space-between'
  },
  adsText: {
    fontFamily: "ProximaNova-Regular",
    fontSize: 16,
    paddingLeft: 22,
    color: '#1C252E',
  },
  adsContent: {
    marginTop: 12,
    marginLeft: 14,
    marginBottom: 12,
    marginRight: 15,
  },
  recommendContent: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  recommendedTitle: {
    color: '#F15D22',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 45,
    paddingTop: 13,
  },
  recommendedText: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 14,
    color: '#101112',
    letterSpacing: 0.28,
    lineHeight: 16,
    marginTop: 0,
    paddingHorizontal: 50,
    paddingBottom: 16,
  },
  recommendedImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignSelf: 'center',
  },
  exploreButton: {
    marginBottom: 116,
  },
  left: {
    flexDirection: 'column',
    flex: 1
  },
  right: {
    width: 44,
    alignSelf: 'center',
  },
  go: {
    alignSelf: 'flex-end',
    width: 35,
    height: 35,
  },
  header: {
    fontFamily: 'ProximaNova-Bold',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  body: {
    fontFamily: 'ProximaNova-Semibold',
    fontSize: 18,
    color: 'white',
    shadowColor: '#004188',
    shadowOpacity: 0.22,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 8,
    justifyContent: 'center',
    flexDirection: 'column',
    lineHeight: 24,
    letterSpacing: 0.6,
    marginTop: 11,
  },
  footer: {
    marginTop: 9,
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 12,
    letterSpacing: 0.2,
  }
});
