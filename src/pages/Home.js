import React from 'react';

// components
import Contribua from '../components/Contribua';
import Noticias from '../components/Noticias'
import Parceiros from '../components/Parceiros';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Sobre from '../components/Sobre';
import Projetos from '../components/Projetos'
import Footer from '../components/Footer';


export default class Home extends React.Component{
    render(){
        return(
            <div id="body">
                <Navbar />
                <Header /> 
                <Sobre  />
                <Projetos />
                <Contribua /> 
                <Noticias />
                <Parceiros />
                <Footer/>              
            </div>
        );
    }
}