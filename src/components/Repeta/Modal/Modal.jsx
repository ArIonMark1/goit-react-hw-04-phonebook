import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalWindowRoot = document.getElementById('modal-root');

export default class Modal extends React.Component {
  //**************************************** */
  componentDidMount() {
    console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown); // при монтуванні реєструється функція з колбеком
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown); // при розмонтуванні буде зніматись функція з колбеком
  }
  //**************************************** */
  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = evt => {
    //
    if (evt.currentTarget !== evt.target) {
      return;
    }
    this.props.onCloseModal();
  };

  render() {
    // const { onLoad, onUpdate } = this.props;

    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <p>Content</p>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalWindowRoot
    );
  }
}
