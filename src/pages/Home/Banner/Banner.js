import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/Dkqf8h3/Colored-pills-and-granules-medical-realistic-composition-on-white-vector-illustration.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Derai Pharmacy</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/DrNm7ZK/Pharmaceutical-medicine-healthcare-template-vector-presentation.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Derai Pharmacy</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/VTmrwW8/christina-victoria-craft-WHSnk-Iw-Wpec-unsplash-1300x400.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Derai Pharmacy</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;