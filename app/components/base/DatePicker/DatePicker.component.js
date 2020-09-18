import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { noop } from 'lodash';
import moment from 'moment';
import DatePickerView from './DatePickerView.component';
import { theme } from '../../../styles/core.style';
import { flex1, FONT_SIZE_NORMAL } from '../../../styles/common.style';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: theme.paddingLarge,
  },
  no_margin: {
    marginBottom: 0,
  },
  container: {
    backgroundColor: theme.transparent,
  },

  outline: {
    backgroundColor: theme.TRANSPARENT,
    borderWidth: 1,
    borderColor: theme.FADE_BORDER,
  },

  round: {
    paddingHorizontal: theme.PADDING,
    paddingVertical: theme.PADDING_SMALL,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: theme.PRIMARY,
  },

  label: {
    ...FONT_SIZE_NORMAL,
    color: theme.PRIMARY,
    marginBottom: theme.PADDING_SMALL,
    paddingLeft: theme.PADDING_SMALL,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  affixContainer: {
    ...flex1,
  },

  suffixContainer: {
    flex: 2,
    alignItems: 'flex-end',
    paddingRight: theme.PADDING,
  },

  suffix: {
    textAlign: 'right',
  },

  iconSuffix: {
    alignItems: 'flex-end',
  },

  textContainer: {
    flex: 8,
    height: 44,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  text: {
    ...FONT_SIZE_NORMAL,
    color: theme.PRIMARY,
  },

  small: {
    height: 32,
  },

  text_white: {
    color: theme.white,
  },

  border_white: {
    borderBottomColor: theme.white,
  },

  transparent: {
    borderBottomWidth: 0,
  },

  multiline: {
    borderBottomWidth: 1,
  },

  disabledInput: {},

  readOnlyText: {
    ...FONT_SIZE_NORMAL,
    flex: 1,
    color: theme.black,
    paddingLeft: theme.PADDING,
  },
});

export default class DatePicker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  onDateChange(date) {
    const { onChange, name } = this.props;
    this.setState({
      modalVisible: false,
    }, () => {
      onChange({
        value: date, name, type: 'datePicker',
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
      disabled,
      small,
      round,
      line,
      transparent,

      spacer,

      backgroundColor,
      color,
      placeholderTextColor,
      label,
      value,
      error,

      style,
      contentContainerStyle,
      textStyle,

      affix,
      suffix,
      placeholder,
      mode,
    } = this.props;

    let timeFormat = 'DD MMM YYYY';
    if (mode === 'time') {
      timeFormat = 'kk:mm';
    }
    const selectedValue = value;
    const formattedValue = selectedValue
      ? moment(selectedValue).format(timeFormat)
      : placeholder;

    return (
      <View style={[
        styles.container,
        { marginBottom: spacer },
        style,
      ]}
      >
        {
          label ? (
            <Text style={[
              (!line) && styles.label,
              textStyle,
            ]}
            >
              {label}
            </Text>
          ) : null
        }
        <DatePickerView
          value={new Date(value)}
          placeholder={placeholder}
          onChange={this.onDateChange}
          modalVisible={modalVisible}
          showModal={this.showModal}
          hideModal={this.hideModal}
          mode={mode}
        >
          <View style={[
            styles.content,
            { backgroundColor, borderColor: `${color}80` },
            round && styles.round,
            line && [styles.line, { borderBottomColor: `${color}80` }],
            transparent && styles.transparent,
            small && styles.small,
            disabled && !transparent && styles.disabled,
            contentContainerStyle,
          ]}
          >
            {
              (React.isValidElement(affix)) ? (
                <View style={styles.affix}>
                  {affix}
                </View>
              ) : (
                <View style={styles.affix}>
                  <Text style={styles.text} color={color}>{affix}</Text>
                </View>
              )
            }
            <View style={styles.textInput}>
              <Text style={styles.text} color={value ? color : placeholderTextColor}>
                {formattedValue}
              </Text>
            </View>
            {
              (React.isValidElement(suffix)) ? (
                <View style={styles.suffixContainer}>
                  {suffix}
                </View>
              ) : (
                <View style={styles.suffix}>
                  <Text color={color}>{suffix}</Text>
                </View>
              )
            }
          </View>
        </DatePickerView>
        {error ? <Text bold color={theme.red}>{error}</Text> : null}
      </View>
    );
  }
}
DatePicker.propTypes = {
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  round: PropTypes.bool,
  line: PropTypes.bool,
  transparent: PropTypes.bool,

  onChange: PropTypes.func,

  spacer: PropTypes.number,

  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  mode: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  error: PropTypes.string,

  style: PropTypes.any,
  contentContainerStyle: PropTypes.any,
  textStyle: PropTypes.any,

  affix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

DatePicker.defaultProps = {
  disabled: false,
  small: false,
  round: false,
  line: false,
  transparent: false,

  onChange: noop,

  spacer: theme.paddingLarge,

  backgroundColor: theme.transparent,
  color: theme.black,
  placeholder: '',
  placeholderTextColor: theme.placeholderTextColor,
  mode: 'date',
  name: '',
  label: null,
  value: new Date(),
  error: '',

  style: {},
  contentContainerStyle: {},
  textStyle: {},

  affix: null,
  suffix: null,
};
