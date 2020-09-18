import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal as RNModal, TouchableWithoutFeedback, View } from 'react-native';
import { noop } from 'lodash';
import styles from './Modal.styles';

export default class Modal extends PureComponent {
  constructor(props) {
    super(props);
    this._hideModal = this._hideModal.bind(this);
    this._renderModal = this._renderModal.bind(this);
  }

  _hideModal() {
    const { onClose } = this.props;
    onClose();
  }

  _renderModal() {
    const {
      closeOnTouchOutside,
      children,
      containerStyles,
      full,
    } = this.props;

    if (full) {
      return children;
    }
    return (
      <View style={styles.wrapperContainer}>
        <TouchableWithoutFeedback onPress={closeOnTouchOutside ? this._hideModal : null}>
          <View style={[styles.container, containerStyles]}>
            <TouchableWithoutFeedback>
              <View>
                {children}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  render() {
    const {
      visible,
      animationType,
    } = this.props;

    return (
      <RNModal
        onRequestClose={this._hideModal}
        animationType={animationType}
        transparent
        visible={visible}
      >
        {this._renderModal()}
      </RNModal>
    );
  }
}

Modal.propTypes = {
  closeOnTouchOutside: PropTypes.bool,
  visible: PropTypes.bool,
  full: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  containerStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.object]),
  animationType: PropTypes.string,
};

Modal.defaultProps = {
  closeOnTouchOutside: false,
  visible: false,
  full: false,
  onClose: noop,
  children: null,
  containerStyles: {},
  animationType: 'slide',
};
