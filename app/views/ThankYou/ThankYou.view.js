import React, { PureComponent } from 'react';
import { View, Text, Animated } from 'react-native';
import PropTypes from 'prop-types';
import styles from './ThankYou.styles';
import { Container, Icon, Touchable } from '../../components/base';

export default class ThankYou extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: new Animated.Value(20),
    };
    this._startAnimation = this._startAnimation.bind(this);
    this._onPressOk = this._onPressOk.bind(this);
  }


  componentDidMount() {
    this._startAnimation();
  }

  _startAnimation() {
    const { fontSize } = this.state;
    Animated.timing(fontSize,
      {
        toValue: 35,
        duration: 500,
      }).start(() => {
      Animated.timing(fontSize,
        {
          toValue: 20,
          duration: 500,
        }).start(() => { this._startAnimation(); });
    });
  }

  _onPressOk() {
    const { navigation } = this.props;
    navigation.navigate('BookingScreen');
  }

  render() {
    const { fontSize } = this.state;
    return (
      <Container>
        <View style={styles.iconContainer}>
          <Icon
            name="check"
            style={styles.checkIcon}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.thankYouText}>Thank You!</Text>
          <Text style={styles.infoText}>Please check your email to get the ticket(s)</Text>
          <Touchable onPress={this._onPressOk}>
            <Animated.Text style={[styles.okText, { fontSize }]}>OK</Animated.Text>
          </Touchable>
        </View>
      </Container>
    );
  }
}

ThankYou.propTypes = {
  navigation: PropTypes.object.isRequired,
};
