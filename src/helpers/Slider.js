import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Modal from "./Modal.js";
import Card from './CardProjeto';

import Img1 from '../assets/images/atendimentojuridico.jpg';
import Img1_1 from '../assets/images/AJ2.jpg';
import Img1_2 from '../assets/images/AJ3.jpg';
import Img1_3 from '../assets/images/AJ4.jpg';
import Img1_4 from '../assets/images/AJ5.jpg';
import Img2 from '../assets/images/costura.jpg';
import Img2_1 from '../assets/images/CT1.jpg';
import Img2_2 from '../assets/images/CT3.jpg';
import Img2_3 from '../assets/images/CT4.jpg';
import Img2_4 from '../assets/images/CT5.jpg';
import Img3 from '../assets/images/futebol.jpg';
import Img3_1 from '../assets/images/FT3.jpg';
import Img3_2 from '../assets/images/FT4.jpg';
import Img3_3 from '../assets/images/FT5.jpg';
import Img4 from '../assets/images/informatica.jpg';
import Img4_1 from '../assets/images/INFO1.jpg';
import Img4_2 from '../assets/images/INFO2.jpg';
import Img5 from '../assets/images/ingles.jpg';
import Img5_1 from '../assets/images/IN1.jpg';
import Img5_2 from '../assets/images/IN3.jpg';
import Img5_3 from '../assets/images/IN6.jpg';
import Img5_4 from '../assets/images/IN7.jpg';
import Img6 from '../assets/images/momentomulher.jpg';
import Img6_1 from '../assets/images/MM2.jpg';
import Img6_2 from '../assets/images/MM3.jpg';
import Img6_3 from '../assets/images/MM4.jpg';
import Img6_4 from '../assets/images/MM5.jpg';
import Img7 from '../assets/images/prevencao.jpg';
import Img7_1 from '../assets/images/PV1.jpg';
import Img7_2 from '../assets/images/PV2.jpg';
import Img7_3 from '../assets/images/PV5.jpg';
import Img7_4 from '../assets/images/PV4.jpg';
import Img8 from '../assets/images/prevestibular.jpg';
import Img8_1 from '../assets/images/PRE1.jpg';
import Img8_2 from '../assets/images/PRE2.jpg';
import Img8_3 from '../assets/images/PRE5.jpg';
import Img9 from '../assets/images/reforco.jpg';
import Img9_1 from '../assets/images/RF1.jpg';
import Img9_2 from '../assets/images/RF3.jpg';
import Img10 from '../assets/images/servicosocial.jpg';
import Img10_1 from '../assets/images/SS1.jpg';
import Img10_2 from '../assets/images/SS2.jpg';
import Img10_3 from '../assets/images/SS4.jpg';
import Img10_4 from '../assets/images/SS5.jpg';
import Img11 from '../assets/images/tambores.jpg';
import Img11_1 from '../assets/images/TB2.jpg';
import Img11_2 from '../assets/images/TB3.jpg';
import Img11_3 from '../assets/images/TB4.jpg';
import Img11_4 from '../assets/images/TB5.jpg';
// import Img12 from '../assets/images/vnw.jpg';
// import Img12_1 from '../assets/images/VNW1.jpg';
// import Img12_2 from '../assets/images/VNW2.jpg';
// import Img12_3 from '../assets/images/VNW3.jpg';
// import Img12_4 from '../assets/images/VNW6.jpg';


export default class SliderCarosel extends Component {
  state = {
    isOpen: false,
    modal: {
      banner: "",
      nome: "",
      texto: "",
      imagens: ""
    },
    projetos: [
      {
        banner: Img1,
        nome: 'Atendimento Jurídico',
        texto:
        `<p>Tem como objetivo fazer a escuta das demandas trazidas oferecendo orientação ao público, bem como propondo a melhor solução para o conflito.</p>
        <p>Áreas de atuação: Criminalista, Vara de família, Trabalhista e Defesa do Consumidor.</p>
        <p>Assim fortalecendo o acesso aos Direitos dos moradores do Complexo de Favelas do Alemão e entorno.</p>
        <p><span>Dias de Atendimento:</span> aos sábados</p>
        <p><span>Horário:</span> de 13h às 17h.</p>`,
        imagens: [Img1_1, Img1_2, Img1_3, Img1_4]
      },
      {
        banner: Img2,
        nome: 'Corte, Costura e Modelagem',
        texto: `
        <p>É um projeto que tem a finalidade de levar ao público do Complexo do Alemão, oficinas sócio educativas desenvolvendo habilidades para trabalhar com confecção de roupas/vestuários , potencializar a renda familiar e contribuir com uma mudança no atual cenário de precariedade da região.</p>
        <p><span>Principais Objetivos:</span></p>
        <p>Capacitar pessoas para trabalhar com Corte, Costura e Modelagem, potencializar a renda familiar e melhorar qualidade de vida do público local.</p>
        <p>• Compreender os modelos com bases nos vestuários tradicionais masculinos e femininos.</p>
        <p>• Aprender técnicas modelagem /medidas de peças moda praia, fitness e camisas tradicionais em tamanhos diferenciados.</p>
        <p>• Desenvolver moldes para corte em tecido.</p>
        <p>• Aprender funcionalidade das máquinas de costura.</p>
        <p>• Montagem, costura e técnicas de acabamento das peças.</p>
        <p>• Visitas em ateliês.</p>
        <p>• Apresentar as peças produzidas, ao longo das oficinas, em feiras, workshop e lojas do comércio local. </p>`,
        imagens: [Img2_1, Img2_2, Img2_3, Img2_4]
      },
      {
        banner: Img3,
        nome: 'PROJETO REVELANDO TALENTOS COPENHAGEN (INICIAÇÃO ESPORTIVA)',
        texto: `
        <p>Tendo como objetivo o desenvolvimento de prática esportivas para crianças e adolescentes, tendo como objetivo final o bem estar da criança em si, do seu meio social e a possibilidade de um futuro mais promissor.</p>
        <p>O esporte consolida também práticas como a “cooperação, comunicação, respeito pelas regras, resolução de conflitos, entendimento (compreensão), conexão com outras pessoas, liderança, respeito com o outro, valor do esforço, como vencer, como entender uma derrota, como administrar uma competição, fair-play, auto estima, responsabilidade, honestidade, resiliência, trabalho em equipe, disciplina e confiança”.</p>
        <p>A simples participação nas atividades esportivas pode ser entendida como positiva, pois seu acesso é pouco comum para estas populações. Além disso, o esporte demonstra se relacionar com aspectos ligados à educação, redução da criminalidade, promoção da saúde, empregabilidade e desenvolvimento pessoal.  Sendo assim, as crianças e adolescentes podem pensar e sonhar em ter um futuro melhor.</p>`,
        imagens: [Img3_1, Img3_2, Img3_3]
      },
      {
        banner: Img4,
        nome: 'Informatizando',
        texto: `
        <p>É um Projeto Social, para formar jovens a partir de 13 anos, preferencialmente que estejam fora do mercado de trabalho, com conteúdos que promovam o conhecimento e desenvolvimento em Tecnologias da Informação, Comunicação e Empreendedorismo. O objetivo é capacitar os jovens principalmente das comunidades do Rio de Janeiro para desenvolver competências técnicas, sociais e econômicas.</p>
        <p>Para operacionalizar o programa, a CpTech em parceria com Educap e a Faculdade Frasce irão capacitar os educadores para multiplicarem esse conteúdo com competência e qualidade, bem como buscar jovens que estejam dentro do público-alvo do programa. Além do conteúdo e suporte institucional.</p>`,
        imagens: [Img4_1, Img4_2]
      },
      {
        banner: Img5,
        nome: 'Curso de Inglês',
        texto: `
        <p>O Curso de Formação Inicial em Inglês Básico tem por objetivos Formar profissionais capazes de se comunicar em inglês de forma básica e objetiva, através de comunicações orais e escritas, em suas diversas formas e gêneros. Qualificar profissionais para leitura, compreensão de textos, fala e escrita no idioma inglês em proficiência básica.</p>
        <p><span>Horário:</span> Todos os sábados de 9h às 12:15 min.</p>
        <p><span>Duração:</span> 9 meses.</p>`,
        imagens: [Img5_1, Img5_2, Img5_3, Img5_4]
      },
      {
        banner: Img6,
        nome: 'Momento Mulher',
        texto: `
        <p>Contribuirá no enfrentamento da violência intrafamiliar e comunitária através formação de um grupo de multiplicadoras na técnica de Medição de Conflito.</p>
        <p>Democratizar o acesso aos meios de comunicação moderna, incentivando o desenvolvimento dos
        processos cognitivos, sociais e afetivos dessas mulheres com cidadania e informatização.</p>
        <p><span>Específicos:</span></p>
        <p>Possibilitar o acesso das às novas tecnologias da informação como forma de inclusão social</p>
        <p>Utilizar o computador como uma ferramenta de ensino e aprendizagem para o desenvolvimento, emponderamentos feminino, empreendedorismo e mercado de trabalho</p>
        <p>Criar um aplicativo com uma linguagem da favela que facilite como rede de proteção e informação
        para as mulheres que sofrem violência.</p>
        <p>Dados do Mapa da Violência de 2015 mostram que entre 2003 e 2013, o número de vítimas de
        homicídio do sexo feminino passou de 3.937 para 4.762; um aumento de 21% na década</p>
        <p>Aprendemos que a dependência econômica é um dos fatores que impedem as mulheres de reagir contra a violência doméstica. Portanto, a criação de canais de inserção no uso de tecnologia é parte de nossas ferramentas para capacitar 20 que emponderadas a atingir aproximadamente uma população de 8.000 habitantes da Favela Matinha.</p>`,
        imagens: [Img6_1, Img6_2, Img6_3, Img6_4]
      },
      {
        banner: Img7,
        nome: 'Núcleo de Prevenção',
        texto: `
        <p>O Núcleo de Prevenção do Complexo do Alemão surge nos anos 2000 quando passo a conhecer o Cedaps e fazer parte da Rede de Comunidades Saudáveis onde o objetivo é lutar contra o HIV-AIDS nas favelas do Rio de janeiro.</p>`,
        imagens: [Img7_1, Img7_2, Img7_3, Img7_4]
      },
      {
        banner: Img8,
        nome: 'Pré-vestibular',
        texto: `
        <p>Desde o início de sua fundação em 2008, o “Espaço Democrático de União, Convivência, Aprendizagem e Prevenção” (EDUCAP) teve uma preocupação quanto a questão de alfabetização do território do Complexo do Alemão. Projetos quanto essa temática foram incluídos no espaço da organização, como a monitoria voluntária de jovens moradores a estudantes de ensino fundamental, médio e outros. Entretanto, alguns dos projetos foram descontinuados.</p>
        <p>No segundo semestre de 2018, com o apoio de alunos da UFRJ e PUC-RIO, foi criado um reforço escolar para jovens de qualquer nível educacional. Este funciona aos sábados, no período de 10:00h até 14:00h. Tem-se o objetivo de trazer assistência aos estudantes em qualquer conteúdo, tentando fornecer uma melhor compreensão do que lhe é passado na escola e aumentando o rendimento e interesse desses.</p>
        <p>A estabilização deste reforço escolar passou a levantar questões de como pensar a entrada dos estudantes da comunidade nas universidades, mesmo os que fazem parte desse projeto, em um futuro próximo. Logo, com o objetivo de auxiliar esses jovens e adultos moradores do Complexo do Alemão a ocuparem espaços nas universidades, fazendo usufruto de seus direitos, o EDUCAP surge com a proposta de implementar um pré-vestibular em seu espaço físico. O pré-vestibular “Educar para Transformar” buscará contribuir para diminuir a grande desigualdade existente no ambiente acadêmico, não só por meio de aulas conteudistas para a realização de exames de ingresso nas universidades, mas esclarecendo todas as questões referentes a políticas de inclusão e de permanência desses futuros universitários.</p>`,
        imagens: [Img8_1, Img8_2, Img8_3]
      },
      // {
      //   banner: Img12,
      //   nome: 'Vai na Web',
      //   texto: `
      //   <p>O Vai na Web é um movimento de alta tecnologia e impacto social que amplia as capacidades humanas e requalifica a força de trabalho para encarar os desafios da Indústria 4.0</p>`,
      //   imagens: [Img12_1, Img12_2, Img12_3, Img12_4]
      // },
      {
        banner: Img11,
        nome: 'Aulas de Violão e Produção Musical',
        texto: `
        <p>As Aulas Práticas de Violão são divididas em dois módulos, sendo o primeiro voltado para Iniciantes e o segundo módulo, voltado para alunos que já dominam o instrumento e que queiram aprimorar suas técnicas e conhecimentos.</p>
        <p>No MÓDULO I das Aulas Práticas de Violão serão abordados os conhecimentos iniciais acerca do violão e da Música, divididos em técnica, teoria e repertório.</p>
        <p>Na parte técnica serão vistos assuntos relativos à execução musical no instrumento (acordes, exercícios técnicos e ritmos); na teórica, conceitos que auxiliam na compreensão da linguagem musical; e no repertório, a aplicação dos assuntos anteriores junto da construção de um repertório musical do próprio aluno.</p>
        <p>Para ingressar no Módulo I o aluno precisa apenas ter o interesse para desenvolvimento dos estudos e seu avanço dependerá, exclusivamente, de seu esforço e desempenho.</p>
        <p>No MÓDULO II das Aulas Práticas de Violão será proposto o desdobramento dos saberes vistos no MÓDULO I.Além da inclusão de novos assuntos, serão aprofundados os conteúdos sobre acordes, arpejos e ligados, teoria musical, técnicas avançadas,levadas rítmicas brasileiras e repertório.</p>
        <p>Para ingressar no Módulo II o aluno deverá ter sido aprovado no Módulo I ou apresentar conhecimentos específicos estabelecidos pelo instrutor.
        Ao final das Aulas Práticas de Violão o aluno estará apto à tocar variadas músicas a partir de suas diferentes formas de escrita.</p>
        <p>As Aulas Práticas de Violão são destinadas para alunos a partir dos 14 anos de idade.
        Os encontros serão aos sábados das 14h às 15h30m no Educap - Rua da Canitar s/ nº (Atrás do Campo do Sargº).</p>
        <p>As vagas são limitadas e totalmente gratuitas</p>`,
        imagens: [Img11_1, Img11_2, Img11_3, Img11_4]
      },
      {
        banner: Img9,
        nome: 'Reforço Escolar',
        texto: `
        <p>Sabendo da dificuldade de alguns alunos no ensino escolar, o EDUCAP abre suas portas para esses que procuram reforçar os conceitos estudados em salas de aula a fim de um melhor aproveitamento acadêmico. Venha tirar suas dúvidas e trocar conhecimento! O reforço irá ocorrer aos SÁBADOS.</p>`,
        imagens: [Img9_1, Img9_2]
      },
      {
        banner: Img10,
        nome: 'Serviço Social',
        texto: `
        <p>Um olhar na Questão social que nos entristece e ao mesmo tempo nos dá força para continuar na luta por acesso é assim que começamos os nossos trabalhos no CRDH um lugar para acolher todas as demandas trazidas em tempos de muitas violações , em tempos de disputa na atual conjuntura.</p>
        <p>O CRDH vivência na atualidade as mazelas da questão social tendo um ponto forte na Segurança Pública que hoje atua com o Programa UPP que sabemos não é uma medida para enfrentar a situação de desigualdade em que os pobres negros favelados vivem nas Favelas do Rio de Janeiro às consequências da militarização que vivemos hoje está no número de mortos por armas de fogo e pela situação aqui exposta neste relatório. Viver a favela diante de tantas violações é viver em uma era medieval.</p>
        <p>AO Assistente Social tem como objeto de trabalho a questão social, que é produzida pela relação capital e trabalho no sistema capitalista, onde se tem o mercado como centro norteador das estruturas políticas, sociais e econômicas. A questão social se expressa atravésda precarização do trabalho, do desemprego, da pobreza, da violência, enfim, coloca às margens da sociedade vários sujeitos que passarão a ser usuários das políticas públicas sociais do Estado</p>`,
        imagens: [Img10_1, Img10_2, Img10_3, Img10_4]
      },
    ]

  }
  closeModal = () => {
    this.setState({
        isOpen: false
     });
  }

  infoModal(props) {
    this.setState({
        isOpen: !this.state.isOpen,
        modal: {
          banner: props.modal.banner,
          nome: props.modal.nome,
          texto: props.modal.texto,
          imagens: props.modal.imagens
        }
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      accessibility: true,
      speed: 500,
      autoplaySpeed: 3000,
      lazyLoad: 'ondemand',
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            fade: true,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            initialSlide: 1
            
          }
        },
        {
          breakpoint: 320,
          settings: {
            fade: true,
            slidesToShow: 1,
            lazyLoad: 'ondemand',
            slidesToScroll: 1
          }
        }
      ]
    };
    return  (
        <div className="galeria"   >
          <Slider {...settings} >
            {this.state.projetos.map(
              item => {
                  return  (
                      <Card
                        modal={() => {
                          this.infoModal({modal: {
                            banner: item.banner,
                            nome: item.nome,
                            texto: item.texto,
                            imagens: item.imagens
                          }});
                        }}
                          imagem={item.banner}
                          nome={item.nome}
                      />  );
              }
            )}
            </Slider>
            <Modal
              show={this.state.isOpen}
              closeModal={this.closeModal}
              banner={this.state.modal.banner}
              nome={this.state.modal.nome}
              texto={this.state.modal.texto}
              imagens={this.state.modal.imagens}
            />
          </div>
         
       
      );
     }
   }
