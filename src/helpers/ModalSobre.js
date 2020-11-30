import React from 'react';
import PropTypes from 'prop-types';
import educap from '../assets/images/EDUCAP-D.jpg';

class ModalSobre extends React.Component {
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
      backgroundColor: 'rgba(158, 158, 158, 0.52)',
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
            <img className="imgmodal" src={educap} alt=''></img>
            <button onClick={this.props.closeModal}>X</button>
            <div className="modalsobretexto">
              <p>A história do EDUCAP anda de mãos dadas com a história de Lúcia Cabral, presidente e fundadora da ONG. Paraibana, nascida em fevereiro de 1967 na cidade de Taperoá. Após 6 meses de seu nascimento seus pais saíram da seca na Região Nordeste em busca de uma vida melhor no Rio de Janeiro e foram morar no Complexo de Favelas de Alemão. Lúcia teve uma infância feliz, curtindo todas as brincadeiras da época. Seu pai, José Gabriel, tinha o sonho de vê-la professora, e ela ia além, sonhava ter uma escola.</p>
              <p>Em sua adolescência arriscou-se em muitas profissões. Foi manicure, trabalhou em laboratório e com artesanato, mas destacou-se o início de seu perfil como educadora. Aos 12 anos de idade, teve a iniciativa de escrever cartas para os parentes de nordestinos que não saíram de suas terras, dessa forma Lucia aproximava as pessoas. </p>
              <p>No mesmo ano passou a alfabetizar outras pessoas do lugar, quando teve contato com uma de suas primeiras bandeiras, a do movimento LGBT. Uma de suas alunas era homossexual e fez com que ela passasse a compreender melhor as diferentes sexualidades. </p>
              <p>Em 1986 começa sua vida de mobilizadora passando a utilizar sua casa como escolinha. Também foi coordenadora do Projeto Curumim, Professora de artesanato na Associação dos moradores do Itararé, Educadora no projeto de alfabetização do SESI, e Coordenadora da Creche Padre Russolino, da Igreja dos Vocacionistas. </p>
              <p>No ano 2000, começa uma nova fase na vida de Lúcia Cabral. Fez parte da pesquisa participativa realizada pela UNICEF e dessa forma conheceu o CEDAPS (Centro de Promoção da Saúde). Trabalhou no Agente Jovem, Projeto PET, e no de Saúde Sexual e Reprodutiva, criando assim seu perfil de promotora de saúde. </p>
              <p>Iniciou sua faculdade de Pedagogia, mas por conta de dificuldades financeiras teve que abandonar seu sonho. Em 2007, o Complexo de Favelas do Alemão viveu uma chacina promovida e assumida pelas Forças de Segurança do Estado, e lá estava Lucia tendo seu primeiro contato com os órgãos internacionais de promoção dos Direitos Humanos. Ela ajudou a elaborar o Relatório de Direitos Humanos da Anistia Internacional sobre a tragédia acontecida no Alemão. Como resultado deste trabalho participou do documentário Elas da Favela, lançado no Dia Internacional dos Direitos Humanos (10/12/2007).</p>
              <p>Com toda essa bagagem chegará a hora de tornar sua atuação maior. A fundadora do EDUCAP uniu-se aos jovens que já trabalhava nos projetos de saúde e juntos pensaram num espaço democrático. Foi aí que surgiu o EDUCAP no dia 08 de março de 2008. Inicialmente na sala de sua casa e num segundo momento na Rua Canitar, número 33, em Inhaúma.</p>
              <p>O primeiro EDUCAP além de atuação, contava com ata mas não havia sido registrado. E o espaço na Rua Canitar foi perdido, tendo dessa forma que voltar para a sala de sua casa. Quando em 2009 um canteiro de obras localizado no Campo do Sargento foi disponibilizado pela empresa de construção civil,  Odebrecht, e tornou-se então o novo endereço da ONG.</p>
              <p>Começa então uma jornada pela regularização do terreno. Passados alguns anos e o Espaço Democrático de União Convivência Aprendizagem e Prevenção, no dia 11 de novembro de 2011 obteve enfim sua regularização no Cadastro Nacional de Pessoa Jurídica. Tão bom quanto, o lugar recebe uma visita da Embaixada Britânica que estava em busca de uma instituição onde pudesse realizar uma feira de saúde. Foi então instituída uma das maiores parcerias já firmadas pelo EDUCAP.</p>
              <p>A partir dessa parceria e de outras como há entre a Kibon, Planeta Container, GE, Casa e Vídeo e Harvesting, uma força tarefa foi criada para montar uma nova sede e no dia 10 de março de 2012 é inaugurada no Campo do Sargento esta que até hoje é uma das instituições de maior atuação no Alemão e redondezas.</p>
            </div>
          </div>
        </div>
      </div>
     
    );
  }
}

ModalSobre.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default ModalSobre;
