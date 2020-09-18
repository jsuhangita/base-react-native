import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { theme } from '../../../styles/core.style';
import Loading from '../Loading/Loading.component';
import styles from './OverlaySpinner.styles';

export default function OverlaySpinner(props) {
  const { visible } = props;
  if (visible) {
    return (
      <View visible={visible} style={styles.container}>
        <Loading color={theme.PRIMARY} />
      </View>
    );
  }
  return <View />;
}

OverlaySpinner.propTypes = {
  visible: PropTypes.bool,
};

OverlaySpinner.defaultProps = {
  visible: false,
};
