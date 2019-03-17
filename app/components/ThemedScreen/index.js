/**
 *
 * ThemedScreen
 *
 */
import isFunction from 'lodash/isFunction';
import React from 'react';
import { ScrollView, View, Animated, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import HeaderBackButton from 'components/Header/BackButton';

import { backgroundGradientProps, headerGradientProps } from 'theme/utils';
import style, { headerRightRange, headerHeightRange } from './style';

const Gradient = Animated.createAnimatedComponent(LinearGradient);

class ThemedScreen extends React.PureComponent {
  componentDidMount() {
    StatusBar.setBarStyle('light-content', true);
  }

  // componentWillUnmount() {
  //   StatusBar.setBarStyle('dark-content', true);
  // }

  checkScroll = ({
    nativeEvent: {
      contentOffset: { y },
    },
  }) => {
    if (!this.props.headerThreshold && !this.props.headerVisibilityThreshold) {
      return;
    }
    if (
      this.props.headerVisibilityThreshold &&
      y > this.props.headerVisibilityThreshold &&
      !this.visibleHeader
    ) {
      this.visibleHeader = true;
      Animated.timing(this.visibleValue, {
        toValue: 1,
        duration: 300,
      }).start();
    } else if (
      this.props.headerVisibilityThreshold &&
      y < this.props.headerVisibilityThreshold &&
      this.visibleHeader
    ) {
      this.visibleHeader = false;
      Animated.timing(this.visibleValue, {
        toValue: 0,
        duration: 300,
      }).start();
    }
    if (y > this.props.headerThreshold && !this.extendedHeader) {
      this.extendedHeader = true;
      if (this.props.onHeaderCollapse) {
        this.props.onHeaderCollapse();
      }
      Animated.timing(this.animationValue, {
        toValue: 1,
        duration: 300,
      }).start();
    } else if (y < this.props.headerThreshold && this.extendedHeader) {
      this.extendedHeader = false;
      if (this.props.onHeaderExtend) {
        this.props.onHeaderExtend();
      }
      Animated.timing(this.animationValue, {
        toValue: 0,
        duration: 300,
      }).start();
    }
  };

  animationValue = new Animated.Value(this.props.headerThreshold > 0 ? 0 : 1);

  extendedHeader = !this.props.headerThreshold;

  visibleValue = new Animated.Value(
    this.props.headerVisibilityThreshold > 0 ? 0 : 1,
  );

  visibleHeader = this.props.headerVisibilityThreshold === 0;

  render() {
    return [
      <LinearGradient
        key="background"
        {...backgroundGradientProps()}
        style={style.background}
      />,
      isFunction(this.props.children) ? (
        this.props.children({
          testID: this.props.testID,
          onScroll: this.checkScroll,
          scrollEventThrottle: 32,
          key: 'scroll',
          style: style.scrollView,
          contentContainerStyle: [
            !this.props.headerVisibilityThreshold &&
              style.scrollContentContainer,
          ],
        })
      ) : (
        <ScrollView
          testID={this.props.testID}
          onScroll={this.checkScroll}
          scrollEventThrottle={32}
          style={style.scrollView}
          contentContainerStyle={[
            !this.props.headerVisibilityThreshold &&
              style.scrollContentContainer,
            this.props.contentContainerStyle,
          ]}
          key="scroll"
          bounces={false}
          ref={this.props.scrollRef}
        >
          {this.props.showMajorTitle ? (
            <Animated.View style={[style.screenTitleContainer]}>
              {this.props.title({
                style: style.screenTitle,
                numberOfLines: 1,
              })}
            </Animated.View>
          ) : null}
          {this.props.children}
        </ScrollView>
      ),
      <Animated.View
        style={[
          style.header,
          this.props.elevatedHeader ? style.elevatedHeader : null,
          this.props.subTitle ? style.extended : null,
          {
            opacity: this.visibleValue,
            height: this.animationValue.interpolate({
              inputRange: [0, 1],
              outputRange: headerHeightRange,
            }),
          },
        ]}
        key="header"
      >
        <Animated.View
          style={[
            style.gradientWrapper,
            this.props.subTitle ? style.extendedGradient : {},
            {
              transform: [
                {
                  scaleY: this.animationValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1.7, 1],
                  }),
                },
              ],
            },
          ]}
        >
          <Gradient
            {...headerGradientProps()}
            style={[
              style.gradient,
              this.props.subTitle ? style.extendedGradient : {},
            ]}
          />
        </Animated.View>
        <View
          style={[
            style.contentContainer,
            this.props.subTitle ? style.extended : {},
          ]}
        >
          <View style={style.titleContainer}>
            {this.props.titlePrefix
              ? this.props.titlePrefix({
                  style: style.titlePrefix,
                  numberOfLines: 1,
                })
              : null}
            {this.props.title({
              style: style.title,
              numberOfLines: 1,
            })}
            {this.props.subTitle
              ? this.props.subTitle({
                  style: style.subTitle,
                  numberOfLines: 1,
                })
              : null}
          </View>
          <Animated.View
            style={[
              style.headerRight,
              {
                opacity: this.animationValue,
                transform: [
                  {
                    translateX: this.animationValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: headerRightRange,
                    }),
                  },
                ],
              },
            ]}
          >
            {this.props.headerRight}
          </Animated.View>
        </View>
        {this.props.headerBottom}
      </Animated.View>,
      <HeaderBackButton
        key="backButton"
        navigation={this.props.navigation}
        style={style.backButton}
        dark
      />,
      this.props.footer,
    ];
  }
}

ThemedScreen.propTypes = {
  testID: PropTypes.string.isRequired,
  children: PropTypes.any,
  navigation: PropTypes.object,
  onHeaderExtend: PropTypes.func,
  onHeaderCollapse: PropTypes.func,
  titlePrefix: PropTypes.func,
  title: PropTypes.func,
  subTitle: PropTypes.func,
  headerThreshold: PropTypes.number,
  headerVisibilityThreshold: PropTypes.number,
  headerRight: PropTypes.any,
  headerBottom: PropTypes.any,
  footer: PropTypes.any,
  showMajorTitle: PropTypes.bool,
  contentContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]),
  scrollRef: PropTypes.func,
  elevatedHeader: PropTypes.bool,
};
ThemedScreen.defaultProps = {
  children: null,
  navigation: null,
  onHeaderExtend: null,
  onHeaderCollapse: null,
  titlePrefix: null,
  title: null,
  subTitle: null,
  headerRight: null,
  headerThreshold: 80,
  headerVisibilityThreshold: 0,
  headerBottom: null,
  footer: null,
  showMajorTitle: false,
  contentContainerStyle: {},
  scrollRef: null,
  elevatedHeader: null,
};

export default ThemedScreen;
