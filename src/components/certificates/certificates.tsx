import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './certificates.css';

type CertificateInfo = {
    image: string;
    title: string;
    caption: string;
    url: string;
}

const certificates: CertificateInfo[] = [
    {
        image: "/certifications/CS50x.png",
        title: "Harvard CS50X: Introduction to Computer Science",
        caption: "This certificate is awarded to those who have completed Harvard's CS50X: Introduction to Computer Science course.",
        url: "https://courses.edx.org/certificates/ff0b77f317304c778787c82716ef145a"
    },
    {
        image: "/certifications/CS50B.png",
        title: "Harvard CS50X: Introduction to Computer Science",
        caption: "This certificate is awarded to those who have completed Harvard's CS50X: Introduction to Computer Science course.",
        url: "https://courses.edx.org/certificates/ff0b77f317304c778787c82716ef145a"
    },
    {
        image: "/certifications/CS50x.png",
        title: "Harvard CS50X: Introduction to Computer Science",
        caption: "This certificate is awarded to those who have completed Harvard's CS50X: Introduction to Computer Science course.",
        url: "https://courses.edx.org/certificates/ff0b77f317304c778787c82716ef145a"
    },
    {
        image: "/certifications/CS50x.png",
        title: "Harvard CS50X: Introduction to Computer Science",
        caption: "This certificate is awarded to those who have completed Harvard's CS50X: Introduction to Computer Science course.",
        url: "https://courses.edx.org/certificates/ff0b77f317304c778787c82716ef145a"
    },
]

function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green", borderRadius: "100%" }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green", borderRadius: "100%" }}
        onClick={onClick}
      />
    );
  }

const Certificate = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="certificate-carousel">
            <Slider {...settings}>
                {certificates.map((certificate, index) => (
                    <div key={index} className="certificate-item">
                        <img src={certificate.image} alt={certificate.title} className="certificate-image" />
                        <div className="certificate-info-container">
                            <div className="certificate-line"></div>
                            <div className="certificate-info">
                                <h3 className="uk-margin-remove">{certificate.title}</h3>
                                <p className="uk-margin-remove">{certificate.caption}</p>
                                <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="uk-button uk-button-text">View Certificate</a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Certificate;