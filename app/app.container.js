import React, { PureComponent } from 'react';
import {
  StyleSheet, View, Animated, Text,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import AppRoutes from './routes';
import { theme } from './styles/core.style';
import { OverlaySpinner } from './components/base';
import { FONT_SIZE_NORMAL, FONT_WEIGHT_BOLD } from './styles/common.style';
import { HEADER_HEIGHT } from './variables/common.variable';
import { getPlatform, getStatusBarHeight } from './utils/device.util';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  networkInfo: {
    position: 'absolute',
    alignSelf: 'center',
  },

  networkContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(48, 48, 48,0.7)',
    // backgroundColor:theme.SEMI_LIGHT_BLACK,
    padding: theme.PADDING_SMALL,
    borderRadius: 7,
  },

  icon: {
    color: '#D28F1B',
    marginRight: theme.PADDING_SMALL,
  },

  networkText: {
    ...FONT_SIZE_NORMAL,
    ...FONT_WEIGHT_BOLD,
    color: theme.PRIMARY,
  },
});

class AppComponent extends PureComponent {
  constructor(props) {
    super(props);
    this._networkAnimated = new Animated.Value(0);
    this._network = NetInfo.addEventListener(({ isConnected }) => {
      Animated.timing(this._networkAnimated, {
        toValue: !isConnected ? 1 : 0,
        duration: 250,
        useNativeDriver: false,
      }).start();
    });
  }

  componentWillUnmount() {
    this._network();
  }

  render() {
    const {
      spinner,
    } = this.props;
    const networkBar = this._networkAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [
        -HEADER_HEIGHT - getStatusBarHeight(),
        HEADER_HEIGHT + theme.PADDING_SMALL + (getPlatform === 'ios' ? getStatusBarHeight() : 0),
      ],
      extrapolate: 'clamp',
    });
    const networkStyles = [
      styles.networkInfo,
      { top: networkBar },
    ];
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <AppRoutes />
          <OverlaySpinner visible={spinner} />
          <Animated.View style={networkStyles}>
            <View style={styles.networkContent}>
              <Text style={styles.networkText}>No internet connection</Text>
            </View>
          </Animated.View>
        </View>
      </View>
    );
  }
}

AppComponent.propTypes = {
  spinner: Proptypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    spinner: state.spinner,
  };
}

export default connect(mapStateToProps, null)(AppComponent);
