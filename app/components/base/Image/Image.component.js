import React from 'react';
import { Image as RNImage } from 'react-native';
import PropTypes from 'prop-types';
import defaultImg from '../../../assets/images/gympod.png';

export default function Image(props) {
  const { source, ...others } = props;
  const imageSource = source.uri || source ? source : defaultImg;
  return (
    <RNImage
      {...others}
      source={imageSource}
    />
  );
}

Image.propTypes = {
  source: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};
Image.defaultProps = {
  source: { uri: null },
};
