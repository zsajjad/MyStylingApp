/**
 *
 * Input
 *
 */

import React, { PureComponent } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { TextInputMask } from 'react-native-masked-text';

// import Loader from 'theme/Loader';
import style, { inputProps } from './style';

const defaultSettings = {
  multiline: false,
  clearButtonMode: 'unless-editing',
  ...inputProps,
};

class Input extends PureComponent {
  static propTypes = {
    label: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.any,
    error: PropTypes.func,
    innerRef: PropTypes.func,
    loading: PropTypes.bool,
    multiline: PropTypes.bool,
    mask: PropTypes.bool,
  };

  static defaultProps = {
    label: null,
    onFocus: () => null,
    onBlur: () => null,
    placeholder: null,
    error: null,
    innerRef: () => null,
    loading: false,
    multiline: false,
    mask: false,
  };

  state = {
    focused: false,
  };

  focus() {
    if (!(this.input && this.input.focus)) {
      return;
    }
    this.input.focus();
  }

  render() {
    const {
      mask,
      onFocus,
      onBlur,
      placeholder,
      innerRef,
      loading,
      error,
      label,
      ...props
    } = this.props;

    const CustomInput = mask ? TextInputMask : TextInput;
    const customProps = mask
      ? {
          refInput: (node) => {
            this.input = node;
            innerRef(node);
          },
        }
      : {
          ref: (node) => {
            this.input = node;
            innerRef(node);
          },
        };
    return (
      <React.Fragment>
        {label
          ? label({
              style: style.label,
              numberOfLines: 1,
            })
          : null}
        <View
          style={[
            style.container,
            this.props.multiline
              ? style.multilineContainer
              : style.singlelineContainer,
          ]}
        >
          <CustomInput
            onFocus={() => {
              this.setState({ focused: true });
              onFocus();
            }}
            onBlur={() => {
              this.setState({ focused: false });
              onBlur();
            }}
            style={[
              this.state.focused ? style.focusStyle : style.blurStyle,
              style.input,
              props.multiline ? style.multiline : {},
            ]}
            {...defaultSettings}
            {...props}
            {...customProps}
            editable={!loading}
          />
          {placeholder && !this.state.focused ? (
            <TouchableOpacity
              style={style.placeholderContainer}
              onPress={() => this.focus()}
            >
              {placeholder({
                style: [
                  style.placeholder,
                  this.props.label ? style.labeledPlaceHolder : null,
                ],
                numberOfLines: 3,
              })}
            </TouchableOpacity>
          ) : null}
        </View>
        {error && error({ style: style.error })}
        {loading && (
          <View style={style.loaderContainer}>{/* <Loader /> */}</View>
        )}
      </React.Fragment>
    );
  }
}

export default Input;
