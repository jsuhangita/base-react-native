import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, PickerIOS } from 'react-native';
import { findIndex, noop } from 'lodash';
import Modal from '../Modal/Modal.component';
import Touchable from '../Touchable/Touchable.component';
import styles from './PickerView.styles';
import { language } from '../../../languages';

export default class PickerView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.selectedValue,
    };
    this.onChange = this.onChange.bind(this);
    this.onPressNext = this.onPressNext.bind(this);
    this.onPressPrevious = this.onPressPrevious.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  onPressNext() {
    const { value } = this.state;
    const {
      options, valueKey,
    } = this.props;
    const maxIndex = options.length - 1;
    const selectedIndex = value
      ? findIndex(options, (option) => option[valueKey] === value)
      : 0;
    if (selectedIndex < maxIndex) {
      this.onChange(options[selectedIndex + 1][valueKey]);
    }
  }

  onPressPrevious() {
    const { value } = this.state;
    const {
      options, valueKey,
    } = this.props;
    const selectedIndex = findIndex(options, (option) => option[valueKey] === value);
    if (selectedIndex > 0) {
      this.onChange(options[selectedIndex - 1][valueKey]);
    }
  }

  onSelect() {
    const { value } = this.state;
    const { onSelect } = this.props;
    onSelect(value);
  }

  renderItem(option, i) {
    const { valueKey, labelKey } = this.props;
    return (
      <PickerIOS.Item
        key={`option${i}`}
        value={option[valueKey]}
        label={option[labelKey]}
      />
    );
  }

  render() {
    const { value } = this.state;
    const {
      options,
      modalVisible,
      hideModal,
      confirmText,
    } = this.props;
    return (
      <Modal
        // closeOnTouchOutside
        animationType="fade"
        visible={modalVisible}
        onClose={hideModal}
      >
        <View style={styles.header}>
          <View style={styles.header__left} />
          <Touchable onPress={this.onSelect}>
            <Text style={styles.header__rightButton}>
              {confirmText || language.PICKER__DONE}
            </Text>
          </Touchable>
        </View>
        <View>
          <PickerIOS
            style={styles.picker}
            selectedValue={value}
            onValueChange={this.onChange}
            itemStyle={styles.pickerView__background}
          >
            {
              options.map(this.renderItem)
            }
          </PickerIOS>
        </View>
      </Modal>
    );
  }
}
PickerView.propTypes = {
  options: PropTypes.array.isRequired,
  modalVisible: PropTypes.bool,
  hideModal: PropTypes.func,
  onSelect: PropTypes.func,
  selectedValue: PropTypes.any,
  confirmText: PropTypes.string,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
};

PickerView.defaultProps = {
  hideModal: noop,
  onSelect: noop,
  selectedValue: '',
  modalVisible: false,
  confirmText: '',
  labelKey: '',
  valueKey: '',
};
