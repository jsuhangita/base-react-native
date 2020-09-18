import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View, TextInput, ViewPropTypes, Text,
} from 'react-native';
import { noop } from 'lodash';
import ErrorTextIndicator from '../ErrorTextIndicator/ErrorTextIndicator.component';
import Label from '../Label/Label.component';
import styles from './Input.styles';
import { getPlatform } from '../../../utils/device.util';
import { theme } from '../../../styles/core.style';

export default class Input extends PureComponent {
  constructor(props) {
    super(props);
    this._onChangeText = this._onChangeText.bind(this);
  }

  _onChangeText(value) {
    const { onChangeText, name, type } = this.props;
    onChangeText({
      value, name, type,
    });
  }

  render() {
    const {
      wrapperStyle: wrapperStyleOverride,
      containerStyle: containerStyleOverride,
      style: styleOverride,
      textStyle: textStyleOverride,
      suffixContainerStyle: suffixContainerStyleOverride,
      disabled,
      noMargin,
      small,
      placeholderTextColor,
      value,
      error,
      label,
      affix,
      iconAffix,
      suffix,
      iconSuffix,
      transparent,
      multiline,
      number,
      round,
      outline,
      white,
      selectionColor,
      setRef,
      readOnly,
      grey,
      ...extraProps
    } = this.props;

    const wrapperStyleProps = [
      styles.wrapper,
      (noMargin || error) && styles.no_margin,
      wrapperStyleOverride,
    ];
    const containerStyleProps = [
      styles.container,
      round && styles.round,
      outline && styles.outline,
      white && styles.border_white,
      multiline && styles.multiline,
      transparent && styles.transparent,
      disabled && styles.disabledInput,
      containerStyleOverride,
    ];
    const inputStyleProps = [
      styles.textContainer,
      small && styles.small,
      styleOverride,
    ];
    const textStyleProps = [
      styles.text,
      white && styles.text_white,
      small && styles.small,
      textStyleOverride,
    ];
    const suffixContainerStyles = [
      styles.suffixContainer,
      suffixContainerStyleOverride,
    ];
    const numberKeyboard = getPlatform === 'ios' ? 'number-pad' : 'numeric';

    return (
      <View style={wrapperStyleProps}>
        {label ? <Label style={styles.labelStyle} white={white} grey={grey} text={label} /> : null}
        <View style={containerStyleProps}>
          <View style={styles.content}>
            {
              (affix || iconAffix)
                ? (
                  <View style={styles.affixContainer}>
                    <Label white={white} text={affix} icon={iconAffix} />
                  </View>
                ) : null
            }
            <View style={inputStyleProps}>
              {
                readOnly ? (
                  <Text style={textStyleProps}>{extraProps.placeholder}</Text>
                ) : (
                  <TextInput
                    keyboardType={number ? numberKeyboard : 'default'}
                    {...extraProps}
                    ref={setRef}
                    textAlignVertical={multiline ? 'top' : 'center'}
                    multiline={multiline}
                    value={value}
                    style={textStyleProps}
                    onChangeText={this._onChangeText}
                    underlineColorAndroid="transparent"
                    editable={!disabled}
                    placeholderTextColor={placeholderTextColor}
                    selectionColor={white ? theme.white : selectionColor}
                  />
                )
              }
            </View>
            {
              (suffix || iconSuffix)
                ? (
                  <View style={suffixContainerStyles}>
                    {
                      React.isValidElement(suffix)
                        ? suffix : (
                          <Label
                            white={white}
                            style={styles.suffix}
                            iconStyle={styles.iconSuffix}
                            text={suffix}
                            icon={iconSuffix}
                          />
                        )
                    }
                  </View>
                ) : null
            }
          </View>
        </View>
        {error ? <ErrorTextIndicator text={error} /> : null}
      </View>
    );
  }
}
Input.propTypes = {
  value: PropTypes.any,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  noMargin: PropTypes.bool,
  transparent: PropTypes.bool,
  multiline: PropTypes.bool,
  small: PropTypes.bool,
  outline: PropTypes.bool,
  round: PropTypes.bool,
  number: PropTypes.bool,
  white: PropTypes.bool,
  setRef: PropTypes.func,
  onChange: PropTypes.func,
  onChangeText: PropTypes.func,
  error: PropTypes.string,
  name: PropTypes.string,
  wrapperStyle: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
  suffixContainerStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  input: PropTypes.any,
  selectionColor: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  affix: PropTypes.string,
  iconAffix: PropTypes.string,
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconSuffix: PropTypes.string,
  grey: PropTypes.bool,
};

Input.defaultProps = {
  value: '',
  readOnly: false,
  disabled: false,
  noMargin: false,
  transparent: false,
  multiline: false,
  small: false,
  outline: false,
  round: false,
  number: false,
  white: false,
  setRef: noop,
  onChange: noop,
  onChangeText: noop,
  error: '',
  type: 'text',
  name: '',
  wrapperStyle: {},
  containerStyle: {},
  input: {},
  style: {},
  suffixContainerStyle: {},
  textStyle: {},
  selectionColor: theme.primary,
  placeholderTextColor: theme.placeholderTextColor,
  label: null,
  affix: null,
  iconAffix: null,
  suffix: null,
  iconSuffix: null,
  grey: false,
};
