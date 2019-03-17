/**
 *
 * ModelListItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import TouchFeedback from 'theme/TouchFeedback';
import Text from 'components/Text';

import style from './style';

function ModelListItem({ model, onPress, active }) {
  return (
    <TouchFeedback
      style={[style.button, active ? style.buttonActive : {}]}
      onPress={onPress}
    >
      <Text style={[style.buttonText, active ? style.buttonTextActive : {}]}>
        {model.title}
      </Text>
    </TouchFeedback>
  );
}

ModelListItem.propTypes = {
  model: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    sample: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default ModelListItem;
