import React, { Component } from 'react';
import Title from '../helpers/Title';
import Silder from '../helpers/Slider';

class Projetos extends Component {

  render() {
    return (
      <div className="containerProjetos" id="projetos">
        <Title texto="projetos" class="title" />
        <Silder />
      </div>    

    );    
  }   
}   

export default Projetos;
