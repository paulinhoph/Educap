import React from 'react';
import Modal from './Modal';

export default class TitleModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

toggleModal = () => {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

closeModal = () => {
  this.setState({
      isOpen: false
   });
}

newMethod() {
  return this;
}

infoModal(props) {
  this.setState({
      isOpen: !this.state.isOpen,
      modal: {
          nome: props.modal.nome,
          texto: props.modal.texto,
          foto: props.modal.foto,
      }
  });
}
  render() {
    const invisivel = {
      display: 'none'
    }
    return (
      <div>
        <Modal show={this.state.isOpen} onClose={this.toggleModal}>          
          <img src={this.props.foto} alt="" />
          <h2>{ this.props.titulo }</h2>
          <p style={ this.props.texto === undefined ? invisivel : null } >
            { this.props.texto }
          </p>
        </Modal> 
      </div>
      );
  }
}