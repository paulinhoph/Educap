import React from 'react';
// import Modal from './Modal';




export default class Button extends React.Component{
    // constructor(props) {
    //     super(props);
    
    //     this.state = { isOpen: false };
    //   }
    
    //   toggleModal = () => {
    //     this.setState({
    //       isOpen: !this.state.isOpen
    //     });
    //   }
    //   infoModal(props) {
    //     this.setState({
    //         isOpen: !this.state.isOpen,
    //         modal:{
    //             texto: props.modal.texto,
    //             foto: props.modal.foto,
    //         }
    //     });
    // }
    render(){
        return(
            <div>
                <button className="button">
                    {this.props.button}
                </button>
              
               {/* <Modal show={this.state.isOpen} onClose={this.toggleModal}>
               
            </Modal>       */}
            </div>
            
        );
    }
}