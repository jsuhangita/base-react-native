import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { noop } from 'lodash';

import Touchable from '../Touchable/Touchable.component';
import Modal from '../Modal/Modal.component';

import styles from './DatePickerView.styles.ios';
import { language } from '../../../languages';

export default class DatePickerView extends PureComponent {
  constructor(props) {
    super(props);
    const { value } = this.props;
    this.value = value;
    this._onChange = this._onChange.bind(this);
    this._onSelect = this._onSelect.bind(this);
  }

  _onChange(event, date) {
    this.value = date;
  }

  _onSelect() {
    const { onChange } = this.props;
    onChange(this.value);
  }

  render() {
    const {
      modalVisible,
      showModal,
      hideModal,
      mode,
      children,
      value,
    } = this.props;
    return (
      <View>
        <Touchable onPress={showModal}>
          {children}
        </Touchable>
        <Modal
          animationType="fade"
          visible={modalVisible}
          onClose={hideModal}
        >
          <View style={styles.datePicker__container}>
            <View style={styles.datePicker__header}>
              <Touchable onPress={this._onSelect}>
                <Text style={styles.datePicker__button}>
                  {language.COMMON__DONE}
                </Text>
              </Touchable>
            </View>

            <View>
              <DateTimePicker
                is24Hour
                style={styles.datePicker__list}
                value={value}
                mode={mode}
                onChange={this._onChange}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
DatePickerView.propTypes = {
  modalVisible: PropTypes.bool,
  onChange: PropTypes.func,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
  value: PropTypes.any,
  mode: PropTypes.string,
  children: PropTypes.node,
};

DatePickerView.defaultProps = {
  modalVisible: false,
  onChange: noop,
  showModal: noop,
  hideModal: noop,
  mode: 'date',
  children: null,
  value: new Date(),
};
