import React, { Component } from 'react';

class Card extends Component {
    render(){
        return(
            <div className="card ">
                <img className="card__img card__img-noticias" src={this.props.image} alt="imagem card"></img>
                <h2 className="card__subTitle card__subTitle-noticias">{this.props.title}</h2>
                <p className="card__paragraph card__paragraph-noticias">{this.props.text}</p>
            </div>
        );
    };
}
export default Card;