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
        image: "/certifications/TIP103.png",
        title: "Codepath Advanced Technical Interview Prep",
        caption: "Awarded to those who have completed the Codepath Advanced Technical Interview Prep course.",
    },
    {
        image: "/certifications/PCEP.png",
        title: "Python Certified Entry-Level Programmer",
        caption: "Awarded to those who passed the PCEP demonstrating foundational knowledge of Python.",
        url: "https://verify.openedg.org/?id=Pi1c.U1LB.ZmGO"
    },
    {
        image: "/certifications/HPTV-Externship.png",
        title: "HP Tech Ventures Corporate VC & Business Analytics Externship",
        caption: "Awarded to those who have completed the HP Tech Ventures Corporate VC & Business Analytics Externship.",
    },
    {
        image: "/certifications/Stanford106A.png",
        title: "Stanford CS106A: Code In Place",
        caption: "Awarded to those who have completed Stanford's Code In Place course.",
    },
    {
        image: "/certifications/CS50x.png",
        title: "Harvard CS50X: Introduction to Computer Science",
        caption: "This certificate is awarded to those who have completed Harvard's CS50X: Introduction to Computer Science course.",
        url: "https://courses.edx.org/certificates/ff0b77f317304c778787c82716ef145a"
    },
    {
        image: "/certifications/CS50B.png",
        title: "Harvard CS50B: Computer Science for Business Professionals",
        caption: "This certificate is awarded to those who have completed Harvard's CS50B: Computer Science for Business Professionals course.",
        url: "https://certificates.cs50.io/a52fc766-642c-4403-be85-824fe2b8f6de.pdf?size=letter"
    },
    {
        image: "/certifications/CS50T.png",
        title: "Harvard CS50T: Understanding Technology",
        caption: "This certificate is awarded to those who have completed Harvard's CS50T: Understanding Technology course.",
        url: "https://certificates.cs50.io/ede18cda-9ef3-45ea-bfd9-624c9e4310af.pdf?size=letter"
    },
    {
        image: "/certifications/CS50P.png",
        title: "Harvard CS50P: Introduction to Programming with Python",
        caption: "This certificate is awarded to those who have completed Harvard's CS50P: Introduction to Programming with Python course.",
        url: "https://certificates.cs50.io/34583a80-c198-498d-9102-5e3cb4f58f89.pdf?size=letter"
    },
    {
        image: "/certifications/CS50SQL.png",
        title: "Harvard CS50SQL: Introduction to Databases",
        caption: "This certificate is awarded to those who have completed Harvard's CS50SQL: Introduction to Databases course.",
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
        adaptiveHeight: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="certificate-carousel">
            <h1>Certificates</h1>
            <Slider {...settings}>
                {certificates.map((certificate, index) => (
                    <div key={index} className="certificate-item">
                        <img src={certificate.image} alt={certificate.title} className="certificate-image" />
                        <div className="certificate-info-container">
                            <div className="certificate-line"></div>
                            <div className="certificate-info">
                                <h3 className="uk-margin-remove">{certificate.title}</h3>
                                <p className="uk-margin-remove">{certificate.caption}</p>
                                {certificate.url && <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="uk-button uk-button-text">View Certificate</a>}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Certificate;