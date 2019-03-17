import { Linking, Alert } from 'react-native';

import { Warn } from 'platform/Logger';

function LaunchURL(url) {
  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        Warn(`Can't handle url: ${url}`);
      } else {
        Linking.openURL(url).catch((err) => {
          Warn('openURL error', err);
        });
      }
    })
    .catch((err) => Warn('An unexpected error happened', err));
}

function call(number) {
  if (!number) {
    return;
  }
  LaunchURL(`tel:${number}`);
}

function sms(number) {
  if (!number) {
    return;
  }
  LaunchURL(`sms:${number}`);
}

function prompt(title, msg, onPositive, onNegative = null) {
  const actions = [{ text: 'Yes', onPress: onPositive }];
  if (onNegative) {
    actions.push({
      text: 'Cancel',
      onPress: onNegative,
      style: 'cancel',
    });
  }
  Alert.alert(title, msg, actions, {
    cancelable: false,
  });
}

export default {
  call,
  sms,
  prompt,
  LaunchURL,
};
