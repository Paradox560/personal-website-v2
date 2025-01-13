import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './certificates.css';

type CertificateInfo = {
    image: string;
    title: string;
    caption: string;
    url?: string;
}

const certificates: CertificateInfo[] = [
    {
        image: "/certifications/AZ-900.png",
        title: "Microsoft AZ-900: Azure Fundamentals",
        caption: "Awarded to those who passed the AZ-900 demonstrating foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
        url: "https://learn.microsoft.com/en-us/users/PranavReddyPalle-2490/credentials/6A1799057A30E04E"
    },
    {
        image: "/certifications/TIP-103.png",
        title: "Codepath Advanced Technical Interview Prep",
        caption: "Awarded to",
    },
    {
        image: "/certifications/PCEP.png",
        title: "Python Certified Entry-Level Programmer",
        caption: "This certificate is awarded to those who have completed Harvard's CS50X: Introduction to Computer Science course.",
        url: "https://verify.openedg.org/?id=Pi1c.U1LB.ZmGO"
    },
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
        url: "https://certificates.cs50.io/a52fc766-642c-4403-be85-824fe2b8f6de.pdf?size=letter"
    },
    {
        image: "/certifications/CS50T.png",
        title: "Harvard CS50X: Introduction to Computer Science",
        caption: "This certificate is awarded to those who have completed Harvard's CS50X: Introduction to Computer Science course.",
        url: "https://certificates.cs50.io/ede18cda-9ef3-45ea-bfd9-624c9e4310af.pdf?size=letter"
    },
    {
        image: "/certifications/CS50P.png",
        title: "Harvard CS50X: Introduction to Computer Science",
        caption: "This certificate is awarded to those who have completed Harvard's CS50X: Introduction to Computer Science course.",
        url: "https://certificates.cs50.io/34583a80-c198-498d-9102-5e3cb4f58f89.pdf?size=letter"
    },
    {
        image: "/certifications/CS50SQL.png",
        title: "Harvard CS50X: Introduction to Computer Science",
        caption: "This certificate is awarded to those who have completed Harvard's CS50X: Introduction to Computer Science course.",
        url: "https://certificates.cs50.io/42993423-e992-4d04-96a5-546df9522cff.pdf?size=letter"
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