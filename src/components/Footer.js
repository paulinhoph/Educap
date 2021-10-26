import React, { Component } from 'react';
// import iconEdu from '../assets/images/QR Code.png';
import iconEdu from '../assets/images/educap1.svg';
import iconInst from '../assets/images/insta_branco.svg';
import iconFace from '../assets/images/face_branco.svg';
import iconCptech from '../assets/images/cptechlogopequena.png';


class Footer extends Component{
    render(){
        return(
            <footer id="contatos">
                <div className="container__footer" >
                    <div className="container__iconsFooter">
                    <img className="container__iconsImgEducap" alt="Logo da educap branca" src={iconEdu}></img>


                    {/* <img className="" alt="QR Code" src={iconEdu}></img>
                    <br></br>
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                        <input type="hidden" name="hosted_button_id" value="7XJLYQN52UX5Q" />
                        <input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" border="0" src="https://www.paypal.com/pt_BR/i/scr/pixel.gif" width="1" height="1" />
                    </form> */}
                    </div>
                    <div className="container__iconsFooter modifyIcon">
                        <h2 className="container__iconsH2">Redes Socias</h2>
                        <div className="container__iconsMidias">
                            <a href="https://www.instagram.com/explore/locations/281597188/educap-espaco-democratico-de-uniao-convivencia-aprendizagem-e-prevencao/" target="blank"><img alt="ícone instagram" src={iconInst}></img></a>
                            <a href="https://www.facebook.com/educap.org/" target="blank"><img alt="ícone facebook" src={iconFace}></img></a>
                            
                        </div>
                        
                    </div>
                    <div className="container__iconsFooter containeredit2">
                        <h2 className="container__iconsH2">Contato</h2>
                        <p className="container__iconsP">lucia.educap@gmail.com | (21)98832-3246</p>
                        <p className="container__iconsP">Rua Canitar - Campo do Sargento S/N - Inhauma/Rio de Janeiro</p>
                        
                    </div>
                </div>
                
                <p className="container__footerP">© Copyright 2019. Todos os direitos reservados.</p>
                <a href="http://agenciacptech.com.br/"  target="blank"><img alt="Icone da agência cptech" className="iconFooterCptech" src={iconCptech}></img></a>
                <div className="rainbow-footer"></div>
            </footer>
        );
    };                                                                                                                                                                                              
};
export default Footer;

{/* <img className="container__iconsImgEducap" alt="Logo da educap branca" src={iconEdu}></img> */}