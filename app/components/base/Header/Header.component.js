import React from 'react';
import PropTypes from 'prop-types';
import {
  Animated, StatusBar, View, ViewPropTypes, Text,
} from 'react-native';
import { isEmpty, noop } from 'lodash';
import { SafeAreaView } from 'react-navigation';
import Icon from '../Icon/Icon.component';
import Touchable from '../Touchable/Touchable.component';
import styles from './Header.styles';
import { theme } from '../../../styles/core.style';
import { getPlatform } from '../../../utils/device.util';

function alignStyle(placement) {
  switch (placement) {
    case 'left':
      return 'flex-start';
    case 'right':
      return 'flex-end';
    default:
      return 'center';
  }
}
function generateChild(value, type, opacity) {
  const {
    onPress = noop, icon, text, size = 18, style = {},
    disabled, ...rest
  } = value;
  if (React.isValidElement(value)) {
    const stylesContainer = [
      type === 'center' && styles.centerComponent,
      type === 'center' && { opacity },
      type === 'left' && styles.iconLeftContainer,
      type === 'right' && styles.iconRightContainer,
    ];
    return <Animated.View style={stylesContainer} key={type}>{value}</Animated.View>;
  } if (typeof value === 'object' && !isEmpty(value)) {
    const iconStylesContainer = [
      type === 'left' && styles.iconLeftContainer,
      type === 'right' && styles.iconRightContainer,
    ];
    return type === 'center' ? (
      <View
        key={type}
        style={[
          styles.centerComponent,
          { alignItems: 'center' },
        ]}
      >
        <Animated.Text
          style={[
            styles.title,
            style,
            { opacity },
          ]}
          numberOfLines={1}
          {...rest}
        >
          {value.text}
        </Animated.Text>
      </View>
    ) : (
      <Touchable
        key={type}
        style={[iconStylesContainer, { alignItems: alignStyle(type) }]}
        onPress={onPress}
        disabled={disabled}
      >
        {
          icon ? <Icon {...rest} name={icon} size={size} style={style} /> : (
            <Text {...rest} style={[styles.rightText, style]}>
              {text}
            </Text>
          )
        }
      </Touchable>
    );
  }
  return <View style={[type === 'center' ? styles.centerComponent : styles.iconContainer]} key={type} />;
}
function populateChildren(propChildren, opacity, placement) {
  const childrenArray = [];
  const leftComponent = generateChild(propChildren.leftComponent, 'left', opacity);
  const centerComponent = generateChild(propChildren.centerComponent, 'center', opacity, placement);
  const rightComponent = generateChild(propChildren.rightComponent, 'right', opacity);
  if (isEmpty(propChildren.leftComponent) && isEmpty(propChildren.rightComponent)) {
    childrenArray.push(centerComponent);
  } else {
    childrenArray.push((isEmpty(propChildren.leftComponent) && placement !== 'center')
      ? null
      : leftComponent, centerComponent, rightComponent);
  }
  return childrenArray;
}
export default function Header(props) {
  const {
    children,
    statusBarProps,
    leftComponent,
    centerComponent,
    rightComponent,
    backgroundColor,
    opacity,
    zIndex,
    placement,
    outerContainerStyle: outerContainerStyleOverride,
    ...otherProps
  } = props;

  let propChildren = [];

  if (leftComponent || centerComponent || rightComponent) {
    propChildren = populateChildren({
      leftComponent,
      centerComponent,
      rightComponent,
    }, opacity, placement);
  }

  const barStyle = getPlatform === 'ios' ? 'dark-content' : 'default';
  return (
    <SafeAreaView style={{ backgroundColor: theme.PRIMARY }}>
      <Animated.View
        {...otherProps}
        style={[
          styles.outerContainer,
          { backgroundColor, zIndex },
          outerContainerStyleOverride,
        ]}
      >
        <StatusBar {...statusBarProps} barStyle={barStyle} />
        {children || propChildren}
      </Animated.View>
    </SafeAreaView>

  );
}
Header.propTypes = {
  placement: PropTypes.oneOf(['left', 'center', 'right']),
  leftComponent: PropTypes.object,
  centerComponent: PropTypes.object,
  rightComponent: PropTypes.object,
  backgroundColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  opacity: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  outerContainerStyle: ViewPropTypes.style,
  innerContainerStyle: ViewPropTypes.style,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  statusBarProps: PropTypes.object,
};
Header.defaultProps = {
  leftComponent: {},
  centerComponent: {},
  rightComponent: {},
  outerContainerStyle: {},
  innerContainerStyle: {},
  statusBarProps: {},
  children: null,
  placement: getPlatform === 'ios' ? 'center' : 'left',
  backgroundColor: theme.PRIMARY,
  opacity: 1,
  zIndex: 1,
};
