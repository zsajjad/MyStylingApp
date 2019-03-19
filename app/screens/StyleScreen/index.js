/*
 *
 * StyleScreen
 *
 */
import React, { useRef, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';
// import {  } from 'react-native-gesture-handler';

import { Warn } from 'platform/Logger';

import Image from 'components/Image';
import Loader from 'components/Loader';
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
  const list = useRef(null);
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
  const imageLoading = selectedModelName && !images[selectedModelName];
  return (
    <Screen
      navigation={screenProps.navigation}
      title={(titleProps) => (
        <FormattedMessage {...messages.header} {...titleProps} />
      )}
      testID="styleScreen"
      wrapInScroll={false}
    >
      <View style={style.contentContainer}>
        <Image
          style={[
            style.imageBackground,
            imageLoading ? style.imageBackgroundLoading : {},
          ]}
          background
          resizeMode="contain"
          uri={
            selectedModelName && images[selectedModelName]
              ? images[selectedModelName]
              : defaultImage
          }
        />
        {imageLoading ? <Loader /> : null}
      </View>
      <FlatList
        horizontal
        keyExtractor={(item) => item.name}
        data={[
          {
            title: 'None',
            name: '',
          },
          ...MODELS,
        ]}
        style={style.modelsList}
        ref={list}
        extraData={selectedModelName}
        contentContainerStyle={style.modelsListContentContainer}
        renderItem={({ item, index }) => (
          <ModelListItem
            model={item}
            active={item.name === selectedModelName}
            onPress={() => {
              dispatch(actions.setSelectedModel(item.name));
              list.current.scrollToIndex({
                index,
                viewPosition: 0.5,
              });
            }}
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
