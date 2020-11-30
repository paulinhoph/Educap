import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// helpers
import Card from '../helpers/Card';
import Title from '../helpers/Title';

// assets
import icon1 from '../assets/images/image.png';
import icon2 from '../assets/images/logo2.png';
import icon3 from '../assets/images/image3.png';
import icon4 from '../assets/images/tudoépauta.jpg';
import icon5 from '../assets/images/cptech.png';
import icon6 from '../assets/images/frasce.png';
import icon7 from '../assets/images/ufrj.png';
import icon8 from '../assets/images/vainaweb.png';
import icon9 from '../assets/images/image2.png';

class Parceiros extends React.Component {
    render(){
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
        return(
            
              <div className="containerParceiros" id="parceiros">
                <Title texto="parceiros" className="title" />
                <div className="createdBlock__Parceiros">
                <Slider {...settings} >
                        {/* <img src={icon1}/>
                        <img src={icon2}/>
                        <img src={icon3}/>
                        <img src={icon4}/>
                        <img src={icon5}/>
                        <img src={icon1}/>
                        <img src={icon2}/>
                        <img src={icon3}/> */}
                        <Card 
                          image={icon1} 
                          />
                          <Card 
                          image={icon2}
                          />
                          <Card 
                          image={icon3}
                          />
                          <Card 
                          image={icon4}
                          />
                          <Card 
                          image={icon5}
                          />
                          <Card 
                          image={icon6}
                          />
                          <Card 
                          image={icon7}
                          />
                          <Card 
                          image={icon8}
                          />
                          <Card 
                          image={icon9}
                          />
                    </Slider>
                    </div>
                   
                </div>
              
        );
    };
};


export default Parceiros;