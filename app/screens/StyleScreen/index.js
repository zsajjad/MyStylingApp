/*
 *
 * StyleScreen
 *
 */
import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Warn } from 'platform/Logger';

import Image from 'components/Image';
import Screen from 'components/Screen';
import ModelListItem from 'components/ModelListItem';
import FormattedMessage from 'components/FormattedMessage';

import { getModelsList, getModelInstance } from 'factories/stylingModel';

import reducer, { initialState } from './reducer';
import * as actions from './actions';

import messages from './messages';
import style from './style';

const MODELS = getModelsList();

function StyleScreen(screenProps) {
  const defaultImage = screenProps.navigation.state.params.imagePath;
  const [{ selectedModelName, images }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  useEffect(() => {
    if (!selectedModelName) {
      return;
    }
    getModelInstance(selectedModelName)
      .then((model) => {
        if (!(model && model.style)) {
          throw Error('Error loading model');
        }
        model
          .style({
            imagePath: defaultImage,
          })
          .then((resp) => {
            dispatch(actions.addStyledImage(selectedModelName, resp.imagePath));
          });
      })
      .catch((error) => {
        Warn(error);
      });
  }, [selectedModelName]);

  return (
    <Screen
      navigation={screenProps.navigation}
      title={(titleProps) => (
        <FormattedMessage {...messages.header} {...titleProps} />
      )}
      testID="styleScreen"
      wrapInScroll={false}
    >
      <Image
        style={style.imageBackground}
        background
        resizeMode="contain"
        uri={
          selectedModelName && images[selectedModelName]
            ? images[selectedModelName]
            : defaultImage
        }
      />
      <FlatList
        horizontal
        keyExtractor={(item) => item.name}
        data={MODELS}
        style={style.modelsList}
        contentContainerStyle={style.modelsListContentContainer}
        renderItem={({ item }) => (
          <ModelListItem
            model={item}
            active={item.name === selectedModelName}
            onPress={() => dispatch(actions.setSelectedModel(item.name))}
          />
        )}
      />
    </Screen>
  );
}

StyleScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default React.memo(StyleScreen);
