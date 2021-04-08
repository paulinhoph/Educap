import React from 'react';

// helpers
import Card from '../helpers/Card';
import Title from '../helpers/Title';

// components
import icon1 from '../assets/images/iconvector.png';
import icon2 from '../assets/images/iconstationery.png';
import icon3 from '../assets/images/iconlove.png';



class Contribua extends React.Component {
    render(){
        return(
            <div className="createdContribua">
                    <Title texto="nos ajude" class="title" />
                    <div className="createdBlock__contribua">
                        <Card 
                        className="Card"
                            image={icon1} alt="icon"
                            title="voluntário" 
                            text="Acreditamos que doar um tempo seja do seu dia, do seu final de semana, ou de algumas horas a algo ou alguém é investir em um mundo melhor e na própria evolução.
                            No EDUCAP, contamos com uma rede de voluntários que fazem o nossa missão ser mais nobre ainda.
                            Venha fazer parte do voluntariado junto com a gente."
                        />
                        <Card 
                           className="Card"
                            image={icon2} alt="icon"
                            title="materiais" 
                            text="O EDUCAP é um espaço que está sempre de portas abertas para todos.
                            Para recebê-los nos preocupamos com a limpeza e manutenção dele para o bom funcionamento do mesmo. Você pode contribuir com materiais de limpeza ou de escritório."
                        />
                        <Card 
                           className="Card"
                            image={icon3} alt="icon"
                            title="depósito"
                            text="Doe para as ações e projetos do EDUCAP e veja o quanto a sua contribuição é importante possibilitando a transformação e desenvolvimento de muitos.
                            Educap-Espaço Democrático de União, convivência , Aprendizagem e prevenção.
                            Banco: Caixa Econômica Federal - Conta: 00001445-7
                            Agência: 1095
                            Cnpj - 14.537.014/0001-53
                            CHAVE PIX: luciaoliveiracabral@gmail.com
                            
                            "
                            
                        />
                        
                        
                    </div> 
                </div>     
        );
    };
};


export default Contribua;