import React from 'react';
import './Footer.css'
import facebookIcon from "../../../icons/facebookIcon.png";
import twitterIcon from "../../../icons/twitterIcon.png";
import instagramIcon from "../../../icons/instagramIcon.png";


const Footer = () => {
    return (

        <div className='bg'>
            <div className='container pt-5'>
                <div className='d-flex justify-content-between flex-wrap'>
                    <div>
                        <h3>OFFICE</h3>
                        <p className='mt-4 mb-5 p'>756 Livingston Street, <br /> Brooklyn, NY 11201</p>
                    </div>
                    <div>
                        <h3>GET IN TOUCH</h3>
                        <p className='mt-4 mb-5 p'>E.: work@e.oliver.com<br />T.: +1 (00) 123-45-67</p>
                    </div>
                    <div>
                        <h3>SOCIAL</h3>
                        <p className='mt-4 mb-5 p'>Connect with me on <br />
                            <a
                                href="https://www.facebook.com/"
                                target="blank"
                            >
                                <img
                                    className="me-2"
                                    style={{ width: "30px" }}
                                    src={facebookIcon}
                                    alt=""
                                />
                            </a>


                            <a href="https://twitter.com/" target="blank">
                                <img
                                    className="me-2"
                                    style={{ width: "30px" }}
                                    src={twitterIcon}
                                    alt=""
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="blank"
                            >
                                <img
                                    className="me-2"
                                    style={{ width: "30px" }}
                                    src={instagramIcon}
                                    alt=""
                                />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='pt-3 contaner bg mb-0 '>
                <p className='text-center  pb-3 mb-0 line p'>Copyright &copy; 2022 INSHOT.<br />
                    All rights reserved.</p>

            </div>
        </div>
    );
};

export default Footer;