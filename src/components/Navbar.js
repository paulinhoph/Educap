import React from 'react';

import logo from "../assets/images/logo.png";

export default class Navbar extends React.Component{
    constructor(props) {
        super(props);

        this.menuMobile = this.menuMobile.bind(this);
        this.scrollSmooth = this.scrollSmooth.bind(this);
        this.removeClass = this.removeClass.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    menuMobile(){
        const menu = document.getElementById('menu');
        const menuVerifica = menu.classList.contains('open');
        if(menuVerifica){
            menu.classList.remove("open");
        } else{
           menu.classList.add("open");
        }
    }

    scrollSmooth(event) {
        event.preventDefault();

        const element = event.currentTarget;
        let id = element.getAttribute('href');
        id = id.substr(1);

        const alturaMenu = document.getElementById('menu').offsetHeight;
        const alturaElemento = document.getElementById(id).offsetTop;

        window.scroll({
            top: alturaElemento - alturaMenu,
            behavior: 'smooth'
        });

        const verificaImg = element.querySelector('img');

        if(!verificaImg){
            const windowWidth = window.innerWidth;
            if (windowWidth <= 768){
                this.menuMobile();
            }
        }

        element.classList.add("active");
    }

    getTop(){
        const menu = document.getElementById("menu");
        const ul = menu.getElementsByTagName("ul");
        const links = ul[0].getElementsByTagName("a");
        return links
    }

    removeClass(){
        const links = this.getTop();

        for (let i=0; i<links.length; i++ ){
            links[i].classList.remove("active");
        }
    }

    handleScroll(){
        const topo = window.pageYOffset + document.getElementById('menu').offsetHeight;
        const alturaSobre = document.getElementById("sobre").offsetTop;
        const alturaProjetos = document.getElementById("projetos").offsetTop;
        const alturaNoticias = document.getElementById("noticias").offsetTop;
        const alturaParceiros = document.getElementById("parceiros").offsetTop;
        const alturaContatos = document.getElementById("contatos").offsetTop;
      
      
        
        
        const links = this.getTop();

        if(topo >= alturaContatos){
            this.removeClass();
            links[5].classList.add("active")        

        } else if (topo >=  alturaParceiros){
            this.removeClass();
            links[4].classList.add("active")        

        } else if (topo >= alturaNoticias ){
            this.removeClass();
            links[3].classList.add("active")        

        } else if (topo >=  alturaProjetos){
            this.removeClass();
            links[2].classList.add("active")        

        } else if (topo >= alturaSobre){
            this.removeClass();
            links[1].classList.add("active")        

        } else { 
            this.removeClass();
            links[0].classList.add("active")        
        }
    }

    render(){
        return(
            <header className="menu" id="menu">
                <div className="rainbow"></div>
                <nav className="container">
                    <a href="#body" onClick={this.scrollSmooth}>
                        <img src={logo} alt="Logo Educap" />
                    </a>
                    <input type="checkbox" id="menu__toggle" />
                    {/* <label for="menu__toggle" className="menu__toggle" /> */}
                    <label className="menu__toggle" onClick={this.menuMobile}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </label>
                    <ul>
                        <li>
                            <a href="#body" onClick={this.scrollSmooth}>Home</a>
                        </li>
                        <li>
                            <a href="#sobre" onClick={this.scrollSmooth}>Sobre</a>
                        </li>
                        <li>
                            <a href="#projetos" onClick={this.scrollSmooth}>Projetos</a>
                        </li>
                        <li>
                            <a href="#noticias" onClick={this.scrollSmooth}>Notícias</a>
                        </li>
                        <li>
                            <a href="#parceiros" onClick={this.scrollSmooth}>Parceiros</a>
                        </li>
                        <li>
                            <a href="#contatos" onClick={this.scrollSmooth}>Contatos</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}