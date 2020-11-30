import React from 'react';

export default class Title extends React.Component{
    render(){
        return(
            <div className="title">
                { this.props.big === undefined ? (<h2>{this.props.texto}</h2>) : (<h1>{this.props.texto}</h1>) }
            </div>
        );
    }
}

