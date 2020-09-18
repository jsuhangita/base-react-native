import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Icon from '../Icon/Icon.component';
import styles from './Label.styles';
import { theme } from '../../../styles/core.style';

const Label = (props) => {
  const {
    reverse,
    text,
    small,
    large,
    icon,
    white,
    containerStyle: containerStyleOverride,
    iconStyle: iconStyleOverride,
    style: styleOverride,
    grey,
  } = props;
  const containerStyleProps = [
    styles.label__container,
    containerStyleOverride,
  ];
  const labelStyleProps = [
    styles.label__text,
    (small) && { fontSize: theme.fontSizeSmall },
    (large) && { fontSize: theme.fontSizeLarge },
    (white) && { color: theme.white },
    (grey) && { color: theme.GREY },
    styleOverride,
  ];
  const iconColor = white ? theme.white : theme.PRIMARY;
  const iconStyles = [
    styles.label__iconContainer,
    iconStyleOverride,
  ];
  return (
    <View style={containerStyleProps}>
      {
        !reverse && icon
          ? (
            <View style={iconStyles}>
              <Icon name={icon} color={iconColor} />
            </View>
          ) : null
      }
      {
        text
          ? (
            <View style={styles.label__textContainer}>
              <Text style={labelStyleProps}>{text}</Text>
            </View>
          ) : null
      }
      {
        reverse && icon
          ? (
            <View style={styles.label__iconContainer}>
              <Icon name={icon} color={iconColor} />
            </View>
          ) : null
      }
    </View>
  );
};
Label.propTypes = {
  reverse: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  white: PropTypes.bool,
  grey: PropTypes.bool,
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  iconStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  icon: PropTypes.string,
  text: PropTypes.string,
};
Label.defaultProps = {
  reverse: false,
  large: false,
  small: false,
  white: false,
  containerStyle: {},
  iconStyle: {},
  style: {},
  text: '',
  icon: null,
  grey: false,
};
export default Label;
