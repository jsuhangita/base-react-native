import React from 'react';
import {
  Image, View, Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './LoadingImage.styles';
import { theme } from '../../../styles/core.style';
import defaultPicture from '../../../assets/images/gympod.png';

export default class LoadingImage extends React.PureComponent {
  constructor(props) {
    super(props);
    this._thumbnailAnimated = new Animated.Value(0);
    this._imageAnimated = new Animated.Value(0);
    this._onThumbnailLoad = this._onThumbnailLoad.bind(this);
    this._onImageLoad = this._onImageLoad.bind(this);
  }

  _onThumbnailLoad() {
    Animated.timing(this._thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }

  _onImageLoad() {
    Animated.timing(this._imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    const { onLoad } = this.props;
    if (onLoad) {
      onLoad();
    }
  }

  render() {
    const {
      thumbnailSource,
      source,
      containerStyle,
      style,
      children,
      shadow,
      backgroundColor,
      defaultSource,
      ...props
    } = this.props;

    const wrapperStyles = [
      styles.container,
      shadow && styles.shadow,
      { backgroundColor },
    ];
    const imageStyles = [styles.imageOverlay, { opacity: this._imageAnimated }, style];
    const defaultImageStyles = [styles.imageOverlay, style];
    return (
      <View style={[containerStyle, wrapperStyles]}>
        {
          (thumbnailSource && thumbnailSource.uri) ? (
            <Image
              {...props}
              source={thumbnailSource}
              style={style}
              onLoad={this._onThumbnailLoad}
              blurRadius={6}
            />
          ) : <View style={style} />
        }
        {
          (source && source.uri) ? (
            <Animated.Image
              {...props}
              source={source}
              style={imageStyles}
              onLoad={this._onImageLoad}
            />
          )
            : (
              <Image
                {...props}
                source={defaultSource}
                style={defaultImageStyles}
              />
            )
        }
        {children}
      </View>
    );
  }
}

LoadingImage.propTypes = {
  backgroundColor: PropTypes.string,
  thumbnailSource: PropTypes.object,
  source: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  containerStyle: PropTypes.any,
  style: PropTypes.any,
  children: PropTypes.node,
  shadow: PropTypes.bool,
  onLoad: PropTypes.func,
  defaultSource: PropTypes.any,
};

LoadingImage.defaultProps = {
  backgroundColor: theme.TRANSPARENT,
  source: null,
  thumbnailSource: null,
  containerStyle: {},
  style: {},
  children: null,
  shadow: false,
  onLoad: null,
  defaultSource: defaultPicture,
};
