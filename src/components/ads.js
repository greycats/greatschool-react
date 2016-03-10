'use strict';

import React, {
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Component,
  PropTypes,
  Image,
  Text,
} from 'react-native';
import {Button, sharedStyles, Row} from './UI';
import LinearGradient from 'react-native-linear-gradient';
import CellGroup from './cell_group';

export default class Ads extends Component {
  static propTypes = {
    onClick: PropTypes.func
  };

  render() {
    return (
      <View style={styles.ads}>
        <View style={styles.left}>
          <Text style={styles.header}>ARTICLE</Text>
          <Text style={[sharedStyles.shadowText, styles.body]}>Are our screen-addicted kids frying their brains?</Text>
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
      <Row weight={10} disclosure={true}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={icon} />
        <Text style={styles.adsText}>{text}</Text>
      </View>
      </Row>
    );
  }

  render() {
    return (
      <CellGroup>
      {this.renderAds("Feeling Word Game", require('./images/ads_icon1.jpg'))}
      {this.renderAds("Emotional Toolbox", require('./images/ads_icon2.jpg'))}
      {this.renderAds("Through a child’s eyes videos", require('./images/ads_icon3.jpg'))}
      </CellGroup>
    );
  }
}

export class RecommendedContent1 extends Component {
  render() {
    return (
      <LinearGradient colors={['#FFFAF6', '#FFDBC5']} start={[0.37, 0.12]} end={[0.44, 1]}>
      <Image style={styles.recommendedImage} source={require('./images/shutterstock.png')} />
      <Text style={[sharedStyles.buttonText, styles.recommendedTitle]}>MILESTONE</Text>
      <Text style={[sharedStyles.buttonText, styles.recommendedText]}>Free online collection of videos aimed at helping you understand your kid’s grade-level expectations</Text>
      <Button style={styles.exploreButton} colors={['#F99913', '#F26620']} start={[0.72, 0]} end={[0.62, 1]} title={"Let’s explore"} />
      </LinearGradient>
    );
  }
}

export class RecommendedContent2 extends Component {
  render() {
    return (
      <View>
      <Image style={styles.recommendedImage2} source={require('./images/shutterstock2.jpg')} />
      <Text style={[sharedStyles.buttonText, styles.recommendedSubtitle]}>EASY LEARNING</Text>
      <View style={{backgroundColor: '#0DA7E3', width: 20, height: 4, alignSelf: 'center'}}/>
      <Text style={[sharedStyles.buttonText, sharedStyles.cellTitleText, styles.recommendedSubtitle2]}>A tasty way to teach your little ones how to wait</Text>
      </View>
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
  recommendedTitle: {
    color: '#F15D22',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 45,
    paddingTop: 13,
  },
  recommendedSubtitle: {
    paddingTop: 25,
    fontFamily: 'ProximaNova-Semibold',
    fontSize: 12,
    color: '#585859',
    letterSpacing: 0.67,
    paddingBottom: 13,
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
  recommendedSubtitle2: {
    paddingHorizontal: 50,
    lineHeight: 25,
    paddingTop: 10,
    paddingBottom: 37,
  },
  recommendedImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignSelf: 'center',
  },

  recommendedImage2: {
    flex: 1,
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
