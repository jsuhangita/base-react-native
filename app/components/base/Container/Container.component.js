import React from 'react';
import PropTypes from 'prop-types';
import {
  View, ViewPropTypes, StyleSheet,
} from 'react-native';
import { theme } from '../../../styles/core.style';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.PRIMARY,
  },
  container: {
    flex: 1,
    backgroundColor: theme.BLACK,
  },
});

export default function Container(props) {
  const {
    children,
    style: styleOverride,
    BlackHeader,
  } = props;
  const safeAreaStyle = {
    backgroundColor: BlackHeader ? theme.BLACK : theme.PRIMARY,
  };
  return (
    <View style={[styles.safeArea, safeAreaStyle]}>
      <View style={[styles.container, styleOverride]}>
        {children}
      </View>
    </View>
  );
}


Container.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
  BlackHeader: PropTypes.bool,
};
Container.defaultProps = {
  style: {},
  BlackHeader: false,
};
