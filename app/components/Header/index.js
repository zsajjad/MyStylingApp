/**
 *
 * Header
 *
 */

import React from 'react';
import { View, Animated } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import Colors from 'theme/Colors';

import BackButton from './BackButton';
import style from './style';

const Gradient = Animated.createAnimatedComponent(LinearGradient);

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.PureComponent {
  componentDidMount() {
    if (!this.props.headerThreshold) {
      this.animationValue.setValue(1);
    }
  }

  onBackPress() {
    this.props.navigation.goBack();
  }

  checkScroll = ({
    nativeEvent: {
      contentOffset: { y },
    },
  }) => {
    if (!this.props.headerThreshold) {
      return;
    }
    if (y > this.props.headerThreshold && !this.showingHeader) {
      this.showingHeader = true;
      Animated.timing(this.animationValue, {
        toValue: 1,
        duration: 300,
      }).start(() => {});
    } else if (y < this.props.headerThreshold && this.showingHeader) {
      this.showingHeader = false;
      Animated.timing(this.animationValue, {
        toValue: 0,
        duration: 300,
      }).start(() => {});
    }
  };

  animationValue = new Animated.Value(this.props.headerThreshold ? 0 : 1);

  showingHeader = !this.props.headerThreshold;

  render() {
    return (
      <Gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 1]}
        colors={
          this.props.dark
            ? [Colors.black, Colors.transparentBlack]
            : [Colors.accentColor, Colors.accentColorDark]
        }
        style={[
          style.container,
          this.props.subTitle ? style.extended : {},
          {
            opacity: this.animationValue,
            transform: [
              {
                translateY: this.animationValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-20, 0],
                }),
              },
              {
                scale: this.animationValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1.2, 1],
                }),
              },
            ],
          },
        ]}
      >
        <BackButton
          navigation={this.props.navigation}
          onPress={this.props.onBackPress}
          dark
        />
        <Animated.View
          style={[
            style.titleHolder,
            {
              opacity: this.animationValue,
              transform: [
                {
                  translateY: this.animationValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-20, 0],
                  }),
                },
              ],
            },
          ]}
        >
          {this.props.title
            ? this.props.title({
                style: [style.title, this.props.dark && style.titleWhite],
                numberOfLines: 1,
              })
            : null}
          {this.props.subTitle
            ? this.props.subTitle({
                style: style.subTitle,
                numberOfLines: 1,
              })
            : null}
        </Animated.View>
        <View style={style.actionHolder}>{this.props.actions}</View>
      </Gradient>
    );
  }
}

Header.propTypes = {
  title: PropTypes.func,
  dark: PropTypes.bool,
  subTitle: PropTypes.func,
  onBackPress: PropTypes.func,
  navigation: PropTypes.object,
  actions: PropTypes.element,
  headerThreshold: PropTypes.number,
};

Header.defaultProps = {
  navigation: null,
  dark: false,
  subTitle: null,
  title: null,
  onBackPress: null,
  actions: null,
  headerThreshold: null,
};

export default Header;
