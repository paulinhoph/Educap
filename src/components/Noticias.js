import React from 'react';
import Card from '../helpers/Card';
import Title from '../helpers/Title';
import Button from '../helpers/Button';
import icon1 from '../assets/images/noticiaeducap1.jpg';
import icon2 from '../assets/images/noticiaeducap2.jpg';
import icon3 from '../assets/images/noticiaeducap3.jpg';

class Noticias extends React.Component {
    render(){
        return(
                <div className="containerNoticias" id="noticias">
                    <Title texto="Notícias" class="title" />
                    <div className="createdBlock__noticias">
                        <div className="div1234">
                             <Card 
                                image={icon1} 
                                title="EDUCAP: Espaço Democrático e Abrangente do Alemão " 
                                text="A educadora e organizadora, nascida e criada no Alemão, Lúcia Cabral, fundou a organização em 2008 para adotar uma gama de projetos com foco na saúde e educação dos moradores da favela. "
                                    
                            /> 
                            <a target="blank" href="http://rioonwatch.org.br/?p=29760"><Button button="ler mais" class="button"/></a>
                        </div>
                        <div className="div1234">
                            <Card 
                                image={icon2} 
                                title="EDUCAP, Você conhece?" 
                                text="O EDUCAP tem como missão o desenvolvimento de ações vinculadas à promoção de direitos humanos, promoção de saúde e defesa da cidadania na comunidade, especialmente no que diz respeito à educação e saúde. Sua atuação está voltada para o auxílio de crianças, adolescentes e jovens adultos."
                            />
                            <a target="blank" href="http://www.vozdascomunidades.com.br/voce-conhece/educap/"><Button button="ler mais" class="button"/></a>
                        </div>
                        <div className="div1234">
                            <Card 
                                image={icon3} 
                                title="Programação no Complexo do Alemão" 
                                text='Para alguns, a palavra "programação" remete a uma "sopa de códigos" indecifráveis sem qualquer sentido. Jovens do Complexo de favelas do Alemão, na Zona Norte do Rio, no entanto, descobriram que aprender essa linguagem pode significar "oportunidade".'
                            />
                            <a target="blank" href="https://g1.globo.com/olha-que-legal/noticia/projeto-cria-programa-de-educacao-em-tecnologias-digitais-para-jovens-moradores-de-comunidades-no-rio-de-janeiro.ghtml"><Button button="Ler mais" class="button"/></a>
                        </div>
                    </div>
                </div>
        );
    };
};


export default Noticias;