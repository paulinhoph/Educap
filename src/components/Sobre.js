import React from 'react';
import Lucia from '../assets/images/Lucia.png'
import Title from '../helpers/Title';
import ModalSobre from '../helpers/ModalSobre.js';


class Sobre extends React.Component {
    state = {
        isOpen: false,
    }

    closeModal = () => {
        this.setState({
            isOpen: false
         });
      }
      
    infoModal = () => {
        this.setState({
            isOpen: !this.state.isOpen,   
        });
    }

    render(){
        return(
            <div className="Sobre" id="sobre">
                <div className="container">
                        <img className="img-lucia" src={Lucia} alt="imagem da presidente e fundadora da ong, lucia cabral"></img>
                    <div className="div-conteudo">
                            <Title texto="O EDUCAP" className="titulo"/>
                        <div class="ver-mais">
                            <p>
                                A história do EDUCAP anda de mãos dadas com a história de Lúcia Cabral, presidente e fundadora da ONG. Paraibana, nascida em fevereiro de 1967 na cidade de Taperoá. Após 6 meses de seu nascimento seus pais saíram da seca na Região Nordeste em busca de uma vida melhor no Rio de Janeiro e foram morar no Complexo de Favelas de Alemão. Lúcia teve uma infância feliz, curtindo todas as brincadeiras da época. Seu pai, José Gabriel, tinha o sonho de vê-la professora, e ela ia além, sonhava ter uma escola.
                            </p>
                            <p>
                                Em sua adolescência arriscou-se em muitas profissões. Foi manicure, trabalhou em laboratório e com artesanato, mas destacou-se o início de seu perfil como educadora. Aos 12 anos de idade, teve a iniciativa de escrever cartas para os parentes de nordestinos que não saíram de suas terras, dessa forma Lucia aproximava as pessoas.
                            </p>
                            <p>
                                No mesmo ano passou a alfabetizar outras pessoas do lugar, quando teve contato com uma de suas primeiras bandeiras, a do movimento LGBT. Uma de suas alunas era homossexual e fez com que ela passasse a compreender melhor as diferentes sexualidades.
                             </p>
                        </div> 
                        <button 
                            className="button"
                            onClick={() => {
                                this.setState({isOpen: true})
                            }}
                        >
                            Ler Mais
                        </button>
                        
                        
                    </div>
                </div>
                <ModalSobre 
                    show={this.state.isOpen}
                    closeModal={this.closeModal}
                />
            </div>
        );
    };
};


export default Sobre;