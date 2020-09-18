import React, { PureComponent } from 'react';
import {
  View, StyleSheet, ActivityIndicator, Text,
} from 'react-native';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { Touchable } from '../base';
import { FONT_SIZE_MEDIUM, FONT_SIZE_NORMAL } from '../../styles/common.style';
import { theme } from '../../styles/core.style';

const styles = StyleSheet.create({
  indicatorContainer: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  title: {
    textAlign: 'center',
    ...FONT_SIZE_MEDIUM,
    color: theme.WHITE,
    marginBottom: theme.PADDING,
  },
  retry: {
    textAlign: 'center',
    ...FONT_SIZE_NORMAL,
    color: theme.PRIMARY,
    textDecorationLine: 'underline',
  },
  textContainer: {
    padding: theme.PADDING_LARGE,
  },
});

export default class DefaultSkeleton extends PureComponent {
  constructor(props) {
    super(props);
    this._onPressRetry = this._onPressRetry.bind(this);
  }

  _onPressRetry() {
    const { onRetry } = this.props;
    onRetry();
  }

  render() {
    const { internetStatus } = this.props;
    return (

      <View style={styles.indicatorContainer}>
        {
          internetStatus
            ? <ActivityIndicator size="large" color="#ffcc00" />
            : (
              <View style={styles.textContainer}>
                <Text style={styles.title}>Please check your internet connection</Text>
                <Touchable onPress={this._onPressRetry}>
                  <Text style={styles.retry}>Click Here to retry</Text>
                </Touchable>
              </View>
            )
        }
      </View>
    );
  }
}
DefaultSkeleton.propTypes = {
  onRetry: PropTypes.any,
  internetStatus: PropTypes.bool,
};
DefaultSkeleton.defaultProps = {
  onRetry: noop,
  internetStatus: true,
};
