import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes, Text } from 'react-native';
import {
  find, noop, findIndex, result,
} from 'lodash';
import Label from '../Label/Label.component';
import Touchable from '../Touchable/Touchable.component';
import PickerView from './PickerView.component';
import styles from './Picker.styles';
import ErrorTextIndicator from '../ErrorTextIndicator/ErrorTextIndicator.component';
import { theme } from '../../../styles/core.style';
import { getPlatform } from '../../../utils/device.util';

export default class Picker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.list = props.placeholder
      ? [{ [props.valueKey]: '', [props.labelKey]: props.placeholder }, ...props.itemList]
      : [...props.itemList];
    this.onPickerChange = this.onPickerChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    const {
      valueKey, onChange, value,
    } = this.props;
    const index = findIndex(this.list, (listItem) => listItem[valueKey] === value);
    if (index < 0) {
      onChange(this.list[0][valueKey]);
    }
  }

  onPickerChange(value) {
    this.setState({
      modalVisible: false,
    }, () => {
      const { valueKey, onChange, name } = this.props;
      const selectedObj = find(this.list, (listItem) => listItem[valueKey] === value);
      onChange({
        value: selectedObj[valueKey] || '',
        name,
      });
    });
  }

  showModal() {
    this.setState({ modalVisible: true });
  }

  hideModal() {
    this.setState({ modalVisible: false });
  }

  render() {
    const { modalVisible } = this.state;
    const {
      wrapperStyle: wrapperStyleOverride,
      containerStyle: containerStyleOverride,
      style: styleOverride,
      textStyle: textStyleOverride,
      disabled,
      noMargin,
      value,
      error,
      label,
      labelKey,
      valueKey,
      affix,
      iconAffix,
      suffix,
      iconSuffix,
      round,
      white,
      placeholder,
    } = this.props;

    const selectedLabelObj = find(this.list, (listItem) => listItem[valueKey] === value);

    const wrapperStyleProps = [
      styles.picker__wrapper,
      noMargin && styles.picker__no_margin,
      wrapperStyleOverride,
    ];
    const containerStyleProps = [
      styles.picker__container,
      round && styles.picker__round,
      white && styles.picker__border_white,
      disabled && styles.disabledInput,
      containerStyleOverride,
    ];
    const inputStyleProps = [
      styles.picker__textContainer,
      styleOverride,
    ];
    const textStyleProps = [
      styles.picker__text,
      white && styles.picker__text_white,
      textStyleOverride,
      (placeholder && !value) && { color: theme.placeholderTextColor },
    ];

    return (
      <View style={wrapperStyleProps}>
        {label ? <Label style={styles.labelStyle} text={label} /> : null}
        <View style={containerStyleProps}>
          <View style={styles.picker__content}>
            {
              (affix || iconAffix)
                ? (
                  <View style={styles.picker__affixContainer}>
                    <Label white={white} text={affix} icon={iconAffix} />
                  </View>
                ) : null
            }
            {
              getPlatform === 'ios'
                ? (
                  <Touchable style={inputStyleProps} onPress={this.showModal}>
                    <Label
                      style={textStyleProps}
                      text={result(selectedLabelObj, labelKey, '')}
                    />
                  </Touchable>
                )
                : null
            }
            <PickerView
              options={this.list}
              onSelect={this.onPickerChange}
              selectedValue={value || this.list[0][valueKey]}
              hideModal={this.hideModal}
              modalVisible={modalVisible}
              disabled={disabled}
              labelKey={labelKey}
              valueKey={valueKey}
            />
            {
              (suffix || iconSuffix)
                ? (
                  <View style={styles.picker__suffixContainer}>
                    <Touchable style={inputStyleProps} onPress={this.showModal}>
                      <Label
                        white={white}
                        style={styles.picker__suffix}
                        text={suffix}
                        icon={iconSuffix}
                        iconStyle={{
                          alignItems: 'flex-end',
                        }}
                      />
                    </Touchable>
                  </View>
                ) : null
            }
          </View>
        </View>
        {error ? <ErrorTextIndicator text={error} /> : null}
      </View>
    );
  }
}
Picker.propTypes = {
  itemList: PropTypes.array,
  disabled: PropTypes.bool,
  noMargin: PropTypes.bool,
  round: PropTypes.bool,
  white: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.string,
  labelKey: PropTypes.string,
  placeholder: PropTypes.string,
  valueKey: PropTypes.string,
  value: PropTypes.any,
  wrapperStyle: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  affix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconAffix: PropTypes.string,
  iconSuffix: PropTypes.string,
  name: PropTypes.string,
};

Picker.defaultProps = {
  itemList: [],
  disabled: false,
  noMargin: false,
  round: false,
  white: false,
  onChange: noop,
  value: '',
  error: '',
  wrapperStyle: {},
  containerStyle: {},
  style: {},
  textStyle: {},
  label: '',
  labelKey: 'label',
  placeholder: '',
  valueKey: 'value',
  affix: null,
  suffix: null,
  iconAffix: null,
  iconSuffix: null,
  name: '',
};
