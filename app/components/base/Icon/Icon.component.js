import React from 'react';
import PropTypes from 'prop-types';
// import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
// import icoMoonConfig from '../../../assets/fonts/config.json';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../../../styles/core.style';
// const IcoMoon = createIconSetFromIcoMoon(icoMoonConfig);

export default class Icon extends React.PureComponent {
  render() {
    const {
      size, color, style, iconType, ...others
    } = this.props;
    const colorStyle = [
      { color },
      style,
    ];
    // if(iconType==='custom'){
    //   return (
    //     <IcoMoon
    //       {...others}
    //       size={size}
    //       style={colorStyle}
    //     />
    //   );
    // }
    if (iconType === 'Material') {
      return (
        <IconMaterial
          {...others}
          size={size}
          style={colorStyle}
        />
      );
    }
    if (iconType === 'MaterialCommunityIcons') {
      return (
        <IconMaterialCommunityIcons
          {...others}
          size={size}
          style={colorStyle}
        />
      );
    }
    if (iconType === 'Feather') {
      return (
        <IconFeather
          {...others}
          size={size}
          style={colorStyle}
        />
      );
    }

    if (iconType === 'FontAwesome5') {
      return (
        <IconFontAwesome5
          {...others}
          size={size}
          style={colorStyle}
        />
      );
    }
    return (
      <IconFontAwesome
        {...others}
        size={size}
        style={colorStyle}
      />
    );
  }
}
Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.any,
  iconType: PropTypes.string,
};
Icon.defaultProps = {
  size: 20,
  color: theme.BLACK,
  style: {},
  iconType: 'FontAwesome',
};
