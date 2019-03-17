import { Platform } from 'react-native';

export default function elevation(level = 1, showBorders = true) {
  if (Platform.OS === 'android') {
    if (Platform.Version >= 21) {
      return {
        elevation: level * 2,
        overflow: 'hidden',
      };
    }
    if (showBorders) {
      return {
        borderWidth: 1,
        borderColor: '#CECECF',
      };
    }
  }
  if (Platform.OS === 'ios') {
    return {
      shadowColor: '#000000',
      shadowOpacity: level * 0.08,
      shadowRadius: level * 4,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      overflow: 'visible',
    };
  }
  return {};
}
