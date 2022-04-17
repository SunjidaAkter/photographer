import React from 'react';
import { Carousel } from 'react-bootstrap';
import one from '../../../Images/one.jpg';
import two from '../../../Images/two.jpg';
import three from '../../../Images/three.jpg';


const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={two}
                        alt="First slide"
                        style={{ width: '80%' }}
                    />
                    <Carousel.Caption>
                        <h1>Second slide label</h1>
                        <h3 className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={one}
                        alt="Second slide"
                        style={{ width: '80%' }}
                    />

                    <Carousel.Caption>
                        <h1>Second slide label</h1>
                        <h3 className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={three}
                        alt="Third slide"
                        style={{ width: '80%' }}
                    />

                    <Carousel.Caption>
                        <h1>Second slide label</h1>
                        <h3 className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;