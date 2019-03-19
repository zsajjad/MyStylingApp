/**
 *
 * Loader
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';
import Colors from 'theme/Colors';
import elevation from 'theme/elevation';

const style = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: Dimensions.radius3x,
    backgroundColor: Colors.accentColor,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    ...elevation(3),
  },
});

function Loader() {
  return (
    <View style={style.container}>
      <ActivityIndicator color={Colors.accentColorReverse} />
    </View>
  );
}

Loader.propTypes = {};

Loader.defaultProps = {};

export default React.memo(Loader, () => true);
