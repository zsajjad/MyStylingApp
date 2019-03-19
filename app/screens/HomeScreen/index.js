/*
 *
 * HomeScreen
 *
 */

import React, { useState, useEffect } from 'react';
import { View, Linking } from 'react-native';
import PropTypes from 'prop-types';

import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';

import Button from 'theme/Button';

import Image from 'components/Image';
import Screen from 'components/Screen';
import FormattedMessage from 'components/FormattedMessage';

import messages from './messages';
import style, { footerGradient } from './style';
import IMAGES from './splashImages';

// `w=${screenWidth}&h=${screenHeight}&q=80`;

function getIndex() {
  return parseInt(Math.random() * 10000, 10) % IMAGES.length;
}

function openUrl(url) {
  Linking.canOpenURL(url).then((open) => {
    if (open) {
      Linking.openURL(url);
    }
  });
}

function getUriFromPicker(response) {
  if (!response.didCancel && !response.error) {
    return response.uri;
  }
  return false;
}

const imagePickerOptions = {};
let timer = null;
function HomeScreen(screenProps) {
  const [imageIndex, setImageIndex] = useState(getIndex());
  useEffect(() => {
    timer = setInterval(() => {
      setImageIndex(getIndex());
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <Screen testID="homeScreen" wrapInScroll={false}>
      <Image
        background
        uri={IMAGES[imageIndex].path}
        style={style.backgroundImage}
      >
        <View>
          <FormattedMessage {...messages.header} style={style.header} />
          <FormattedMessage {...messages.subHeader} style={style.subHeader} />
        </View>
        <View style={style.buttonContainer}>
          <LinearGradient {...footerGradient} style={style.footerBackground} />
          <Button
            onPress={() =>
              ImagePicker.launchCamera(imagePickerOptions, (resp) => {
                const uri = getUriFromPicker(resp);
                if (uri) {
                  screenProps.navigation.navigate('style', { imagePath: uri });
                }
              })
            }
            label={<FormattedMessage {...messages.cameraLabel} isFragment />}
          />
          <Button
            onPress={() =>
              ImagePicker.launchImageLibrary(imagePickerOptions, (resp) => {
                const uri = getUriFromPicker(resp);
                if (uri) {
                  screenProps.navigation.navigate('style', { imagePath: uri });
                }
              })
            }
            label={<FormattedMessage {...messages.localLabel} isFragment />}
          />
          <FormattedMessage
            {...messages.credits}
            style={style.credits}
            values={IMAGES[imageIndex]}
            onPress={() => openUrl(IMAGES[imageIndex].link)}
          />
        </View>
      </Image>
    </Screen>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
