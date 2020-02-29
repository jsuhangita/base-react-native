import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { findIndex } from 'lodash';
import styles from './CheckOut.styles';
import { Button, Container, Header } from '../../components/base';

export default class CheckOut extends PureComponent {
  constructor(props) {
    super(props);
    this._onPressAbort = this._onPressAbort.bind(this);
    this._onPressApply = this._onPressApply.bind(this);
  }

  _onPressAbort() {
    const { navigation } = this.props;
    navigation.goBack();
  }

  _onPressApply() {
    const { navigation } = this.props;
    navigation.navigate('ThankYouScreen');
  }

  render() {
    const { navigation } = this.props;
    const routeList = navigation.dangerouslyGetState().routes;
    const index = findIndex(routeList, (item) => item.name === 'CheckOutScreen');
    const { email, item } = routeList[index].params;
    const { name, time, desc } = item;
    const headerProps = {
      centerComponent: { text: 'CheckOut' },
    };
    return (
      <Container>
        <Header {...headerProps} />
        <View style={styles.classContainer}>
          <Text style={styles.className}>
            Email:
            {email}
          </Text>
          <Text style={styles.className}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
          <Text
            numberOfLines={4}
            ellipsizeMode="tail"
            style={styles.desc}
          >
            {desc}
          </Text>
          <View style={styles.buttonWrapper}>
            <Button
              text="Abort"
              style={styles.abortButton}
              textStyle={styles.abortText}
              onPress={this._onPressAbort}
            />
            <Button
              text="Apply"
              onPress={this._onPressApply}
            />

          </View>
        </View>
      </Container>
    );
  }
}

CheckOut.propTypes = {
  navigation: PropTypes.object.isRequired,
};
