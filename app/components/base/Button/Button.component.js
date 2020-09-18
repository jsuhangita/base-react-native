import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ViewPropTypes } from 'react-native';
import { noop } from 'lodash';
import Icon from '../Icon/Icon.component';
import Touchable from '../Touchable/Touchable.component';
import Loading from '../Loading/Loading.component';
import styles from './Button.styles';
import { theme } from '../../../styles/core.style';

const Button = ({
  loading,
  bold,
  center,
  bottomCenter,
  bottomRight,
  disabled,
  round,
  transparent,
  white,
  outline,
  left,
  leftText,
  right,
  onPress,
  children,
  highlightOpacity,
  margin,
  highlightColor,
  style: overrideStyles,
  textStyle: overrideTextStyles,
  wrapperStyle: overrideWrapperStyle,
  text,
  icon,
  small,
  iconColor,
  iconSize,
  iconType,
  reverse,
  ...extraProps
}) => {
  const wrapperStyle = [
    (center) && styles.button__center,
    (left) && styles.button__left,
    (right) && styles.button__right,
    (bottomCenter) && styles.button__bottomCenter,
    (bottomRight) && styles.button__bottomRight,
    overrideWrapperStyle,
  ];
  const containerStyle = [
    styles.button__container,
    (icon && !text) && { height: null },
    (transparent) && styles.button__transparentContainer,
    (outline) && styles.button__outlineContainer,
    (round) && styles.button__round,
    small && styles.small,
    (disabled) && styles.button__outline_disabled,
    (disabled && outline) && styles.button__outline_disabled,
    overrideStyles,
  ];
  const buttonStyle = [
    styles.button__text,
    (transparent) && styles.button__transparentText,
    (outline) && styles.button__outlineText,
    (white) && styles.button__whiteText,
    (bold) && styles.button__boldText,
    (leftText) && styles.button__left_text,
    small && styles.smallText,
    (disabled) && styles.button__disabledText,
    overrideTextStyles,
  ];
  const iconStyle = [
    !reverse && text && styles.icon,
    reverse && styles.iconReverse,
  ];
  const nestedChildren = children
    || (
      <View style={styles.button__textContainer}>
        { reverse && icon ? (
          <Icon iconType={iconType} name={icon} style={iconStyle} color={iconColor} size={iconSize} />
        ) : null }
        <Text style={buttonStyle}>{text}</Text>
        { !reverse && icon ? (
          <Icon iconType={iconType} name={icon} style={iconStyle} color={iconColor} size={iconSize} />
        ) : null }
      </View>
    );
  if (loading) {
    return (
      <View style={[wrapperStyle, { margin }]}>
        <View {...extraProps} style={containerStyle}>
          <Loading center size="small" color={theme.BLACK} />
        </View>
      </View>
    );
  }
  return (
    <View style={[wrapperStyle, { margin }]}>
      <Touchable
        onPress={onPress}
        disabled={disabled}
        highlightColor={highlightColor}
        activeOpacity={highlightOpacity}
      >
        <View {...extraProps} style={containerStyle}>
          {nestedChildren}
        </View>
      </Touchable>
    </View>
  );
};

Button.propTypes = {
  reverse: PropTypes.bool,
  loading: PropTypes.bool,
  small: PropTypes.bool,
  bold: PropTypes.bool,
  center: PropTypes.bool,
  bottomCenter: PropTypes.bool,
  bottomRight: PropTypes.bool,
  disabled: PropTypes.bool,
  round: PropTypes.bool,
  transparent: PropTypes.bool,
  white: PropTypes.bool,
  outline: PropTypes.bool,
  left: PropTypes.bool,
  leftText: PropTypes.bool,
  right: PropTypes.bool,
  onPress: PropTypes.func,
  children: PropTypes.node,
  highlightOpacity: PropTypes.number,
  margin: PropTypes.number,
  iconSize: PropTypes.number,
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  highlightColor: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  iconColor: PropTypes.string,
  wrapperStyle: PropTypes.object,
  iconType: PropTypes.string,
};

Button.defaultProps = {
  reverse: false,
  loading: false,
  small: false,
  bold: false,
  center: false,
  bottomCenter: false,
  bottomRight: false,
  disabled: false,
  round: false,
  transparent: false,
  white: false,
  outline: false,
  left: false,
  leftText: false,
  right: false,
  onPress: noop,
  children: null,
  highlightOpacity: 0.5,
  margin: 0,
  iconSize: 20,
  style: {},
  textStyle: {},
  highlightColor: theme.PRIMARY,
  icon: null,
  text: '',
  iconColor: theme.PRIMARY,
  wrapperStyle: {},
  iconType: '',
};

export default Button;
