import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import styles from './Radio.styles';
import Touchable from '../Touchable/Touchable.component';
import Icon from '../Icon/Icon.component';
import { theme } from '../../../styles/core.style';

export default class Radio extends React.PureComponent {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    const { onPress, item } = this.props;
    onPress(item);
  }

  render() {
    const { item, value } = this.props;
    return (
      <View style={styles.container}>
        <Touchable
          style={styles.circle}
          onPress={this._onPress}
        >
          {value === item.id && (
          <View style={styles.checkedCircle}>
            <Icon
              name="check"
              color={theme.BLACK}
              size={15}
              style={styles.iconCheck}
            />
          </View>
          )}
        </Touchable>
        {
          item.icon ? (
            <Icon name={item.icon} style={styles.icon} />
          ) : null
        }
        <Touchable onPress={this._onPress}>
          <Text style={styles.text}>{item.text}</Text>
        </Touchable>
      </View>
    );
  }
}

Radio.propTypes = {
  item: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onPress: PropTypes.func,
};

Radio.defaultProps = {
  value: '',
  onPress: noop,
};
