import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import '../css/slick.css'
// import '../css/slick-theme.css'
import '../css/arrow.css'

const Sliders = [
  { id: 1, img: 'https://www.rsislambogor.or.id/img_slideshow/medium_787584Peta%20Lokasi.jpg'},
  { id: 2, img: 'https://www.rsislambogor.or.id/img_slideshow/medium_559903WhatsApp%20Image%202021-10-28%20at%2011.14.52_THT_new.jpeg'},
  { id: 3, img: 'https://www.rsislambogor.or.id/img_slideshow/medium_871125WhatsApp%20Image%202021-09-02%20USG%20at%2014.05.54.jpeg'},
  { id: 4, img: 'https://www.rsislambogor.or.id/img_slideshow/medium_190687WhatsApp%20Image%202021-10-25%20at%2011.39.31_katarak.jpeg'},
  { id: 5, img: 'https://www.rsislambogor.or.id/img_slideshow/medium_947468WhatsApp%20Image%202021-10-26%20at%2014.20.23_sosmed.jpeg'},
  { id: 6, img: 'https://www.rsislambogor.or.id/img_slideshow/medium_601602WhatsApp%20Image%202022-01-25%20at%2015.40.00%20baby%20photo.jpeg'},
  { id: 7, img: 'https://www.rsislambogor.or.id/img_slideshow/medium_601602WhatsApp%20Image%202022-01-25%20at%2015.40.00%20baby%20photo.jpeg'},
]

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default class Slide extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
    
    next() {
        this.slider.slickNext();
    }
    
    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        };

    return (
      <div className="px-4">
        <Slider {...settings}>
          {Sliders.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.img} alt={item.id} className='px-4' />
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}