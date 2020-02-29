import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View, ImageBackground,
  Image, KeyboardAvoidingView, ScrollView,
} from 'react-native';
import { isEmpty } from 'lodash';
import validator from 'validator';
import {
  Input, Button,
} from '../../components/base';
import styles from './SignIn.styles';
import background from '../../assets/images/background.jpg';
import logo from '../../assets/images/logo.png';
import { theme } from '../../styles/core.style';
import { getPlatform } from '../../utils/device.util';
import { errorHandler } from '../../utils/alert.util';

export default class SignIn extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        value: {},
        error: {},
      },
    };
    this._handleFormChange = this._handleFormChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._setRef = this._setRef.bind(this);
  }

  _setRef(input) {
    this._textInput = input;
  }

  _handleFormChange(event) {
    const { value, name } = event;
    this.setState((prevState) => ({
      form: {
        value: {
          ...prevState.form.value,
          [name]: value,
        },
        error: {
          ...prevState.form.error,
          [name]: '',
        },
      },
    }));
  }

  async _handleSubmit() {
    const { form } = this.state;
    const { email, password } = form.value;
    const { navigation } = this.props;
    this._textInput.blur();
    // Validation
    if (isEmpty(email)) {
      this.setState((prevState) => ({
        form: {
          value: {
            ...prevState.form.value,
          },
          error: {
            ...prevState.form.error,
            email: 'Please input your email address',
          },
        },
      }));
    } else if (!validator.isEmail(email)) {
      this.setState((prevState) => ({
        form: {
          value: {
            ...prevState.form.value,
          },
          error: {
            ...prevState.form.error,
            email: 'Invalid Email Address',
          },
        },
      }));
    } else if (isEmpty(password)) {
      this.setState((prevState) => ({
        form: {
          value: {
            ...prevState.form.value,
          },
          error: {
            ...prevState.form.error,
            password: 'Please input your password',
          },
        },
      }));
    } else if (password === 'admin' && email === 'admin@admin.com') {
      navigation.navigate('BookingScreen', {
        email,
      });
    } else {
      errorHandler({
        title: 'Email / password not registered',
      });
    }
  }

  render() {
    const { form } = this.state;
    return (
      <KeyboardAvoidingView
        behavior={getPlatform === 'ios' ? 'padding' : null}
        style={styles.container}
        contentContainerStyle={styles.container}
      >
        <ImageBackground
          style={styles.background}
          source={background}
        >
          <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <View style={styles.topContainer}>
              <Image
                source={logo}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
            <View style={styles.formContainer}>
              <Input
                round
                white
                setRef={this._setRef}
                autoCapitalize="none"
                iconAffix="how_to_reg"
                placeholder="Email"
                name="email"
                keyboardType="email-address"
                placeholderTextColor={theme.placeholderTextWhite}
                onChangeText={this._handleFormChange}
                value={form.value.email || ''}
                error={form.error.email || ''}
              />
              <Input
                round
                white
                setRef={this._setRef}
                autoCapitalize="none"
                iconAffix="vpn_key"
                placeholder="Password"
                name="password"
                type="password"
                secureTextEntry
                placeholderTextColor={theme.placeholderTextWhite}
                onChangeText={this._handleFormChange}
                value={form.value.password || ''}
                error={form.error.password || ''}
              />
              <Button
                round
                onPress={this._handleSubmit}
                text="SIGN IN"
              />
            </View>
            <View style={styles.footer} />
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
SignIn.propTypes = {
  navigation: PropTypes.object.isRequired,
};
