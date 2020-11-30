import React from 'react';

export default class Card extends React.Component {

  render() {
    return (
        <div  >
        <div className="view view-first"  onClick={this.props.modal} >
          <img alt="Imagem projeto" className="img_Equipe" src={this.props.imagem}   />
          <div className="mask">
            <p> {this.props.nome} </p>
          </div>
            <div className="content" >
              {/* <h2 id="testimonials">{this.props.subtitle}</h2> */}
            </div>
          </div> 
        </div>
      );
  }
}