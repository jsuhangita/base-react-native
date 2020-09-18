import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, ViewPropTypes,
} from 'react-native';
import { noop } from 'lodash';
import Touchable from '../Touchable/Touchable.component';
import styles from './ImageCheckBox.styles';
import Icon from '../Icon/Icon.component';
import { theme } from '../../../styles/core.style';

export default class ImageCheckBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      onSelect: false,
    };
    this._selectImage = this._selectImage.bind(this);
  }

  _selectImage() {
    const { onSelect } = this.state;
    const { onPress } = this.props;
    this.setState({
      onSelect: !onSelect,
    }, onPress(!onSelect));
  }

  render() {
    const { onSelect } = this.state;
    const {
      text,
      containerStyle: containerStyleOverride,
    } = this.props;
    return (
      <View style={[styles.container, containerStyleOverride]}>
        <Touchable
          style={styles.circle}
          onPress={this._selectImage}
        >
          {
              onSelect ? (
                <View style={styles.checkedCircle}>
                  <Icon
                    name="check"
                    color={theme.BLACK}
                    size={15}
                    style={styles.iconCheck}
                  />
                </View>
              ) : <View style={styles.circle} />
            }
        </Touchable>
        <Touchable onPress={this._selectImage}>
          <Text style={styles.text}>{text}</Text>
        </Touchable>
      </View>
    );
  }
}
ImageCheckBox.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  containerStyle: ViewPropTypes.style,
};

ImageCheckBox.defaultProps = {
  text: '',
  onPress: noop,
  containerStyle: {},
};
