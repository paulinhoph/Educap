import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }
 

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(158, 158, 158, 0.52)'
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      // margin: '0 auto',
      // padding: 10
    };

    return (
      <div className="modal"> 
        <div className="backdrop" style={backdropStyle}>
          <div className="modalSty" style={modalStyle}>
            <button onClick={this.props.closeModal}>X</button>
            <div className='banner'>
              <img src={this.props.banner} alt='' />
            </div>
            <div className="modaltitle">
              <h2>{this.props.nome}</h2>
            </div>
            <div className="modaltexto" dangerouslySetInnerHTML={{ __html: this.props.texto }} />
            <div className="imagens">
              {this.props.imagens.map(
                item => {
                  return  (
                    <img src={item} alt="" />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
     
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
