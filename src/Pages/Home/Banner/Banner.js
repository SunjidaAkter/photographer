import React from 'react';
import { Carousel } from 'react-bootstrap';
import one from '../../../Images/one.jpg';
import two from '../../../Images/two.jpg';
import three from '../../../Images/three.jpg';
import './Banner.css'


const Banner = () => {
    return (
        <div className='container '>
            <Carousel fade>
                <Carousel.Item className='caro'>
                    <img
                        className="d-block mx-auto d-block"
                        src={two}
                        alt="First slide"
                        style={{ width: '90%' }}
                    />
                    <Carousel.Caption>
                        <h1 className='mt-5 head'>RIDDLE</h1>
                        <h3 className='mb-5 para'>Only photograph
                            what you love</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='caro'>
                    <img
                        className="d-block mx-auto d-block"
                        src={one}
                        alt="Second slide"
                        style={{ width: '90%' }}
                    />

                    <Carousel.Caption>
                        <h1 className='mt-5 head'>THE PLANT</h1>
                        <h3 className='mb-5 para'>Only photograph
                            what you love</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='caro'>
                    <img
                        className="d-block mx-auto d-block"
                        src={three}
                        alt="Third slide"
                        style={{ width: '90%' }}
                    />

                    <Carousel.Caption>
                        <h1 className='head' >WILD ROAD</h1>
                        <h3 className='mb-5 para'>Only photograph
                            what you love</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;