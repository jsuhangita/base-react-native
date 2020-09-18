import React from 'react';
import PropTypes from 'prop-types';
import { initialSetup } from '../requests/auth.request';
import { Container } from '../components/base';
import DefaultSkeleton from '../components/Skeleton/DefaultSkeleton.component';

export default class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._initialSetup();
  }

  async _initialSetup() {
    const { navigation } = this.props;
    const { isLoggedIn } = await initialSetup();
    if (isLoggedIn) {
      //navigate to application
      navigation.navigate('App');
    } else {
      //navigate to authenticationPage
      navigation.navigate('App');
    }
  }

  render() {
    return (
      <Container>
        <DefaultSkeleton />
      </Container>

    );
  }
}

LoadingScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
LoadingScreen.defaultProps = {

};
