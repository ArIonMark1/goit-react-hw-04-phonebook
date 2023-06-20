import React from 'react';
import Modal from './Modal/Modal';

export default class Repeta extends React.Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  //   componentWillUnmount() {
  //     console.log('Modal componentWillUnmount');
  //   }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal })); // власта механіка тогла

    setTimeout(
      () => console.log('result from state: ', this.state.showModal),
      0
    );
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Open modal wndow
        </button>

        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <h2>Welcome to Modal window =:-</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              perferendis enim pariatur! Facere reprehenderit repudiandae
              blanditiis perferendis aut voluptates! Perspiciatis quae
              quibusdam, pariatur blanditiis repellat sequi maiores vero autem
              a?
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
      </>
    );
  }
}
