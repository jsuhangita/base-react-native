import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from '@react-native-community/datetimepicker';
import { noop } from 'lodash';
import { View } from 'react-native';
import Touchable from '../Touchable/Touchable.component';
import styles from './DatePickerView.styles.ios';

export default class DatePickerView extends PureComponent {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  _onChange(event, date) {
    const { onChange, value } = this.props;
    if (date !== undefined) {
      onChange(date);
    } else {
      (
        onChange(value)
      );
    }
  }

  render() {
    const {
      value,
      mode,
      modalVisible,
      children,
      showModal,
    } = this.props;
    return (
      <View>
        <Touchable onPress={showModal}>
          {children}
        </Touchable>
        {
          modalVisible ? (
            <DateTimePicker
              is24Hour
              style={styles.datePicker__list}
              value={value}
              mode={mode}
              onChange={this._onChange}
            />
          ) : null
        }
      </View>
    );
  }
}

DatePickerView.propTypes = {
  value: PropTypes.any.isRequired,
  modalVisible: PropTypes.bool,
  showModal: PropTypes.func,
  onChange: PropTypes.func,
  mode: PropTypes.string,
  children: PropTypes.node,
};

DatePickerView.defaultProps = {
  modalVisible: false,
  showModal: noop,
  onChange: noop,
  mode: 'date',
  children: null,
};
