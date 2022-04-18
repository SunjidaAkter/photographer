import React from 'react';
import './Footer.css'
import facebookIcon from "../../../icons/facebookIcon.png";
import twitterIcon from "../../../icons/twitterIcon.png";
import instagramIcon from "../../../icons/instagramIcon.png";


const Footer = () => {
    return (
        <div className='pt-3 contaner bg mb-0'>
            <h6 className='text-center mt-3 mb-0'>Copyright &copy; 2022 INSHOT.</h6>;
            <h6 className='text-center mt-0 mb-0 pb-2'> All rights reserved.</h6>
            <div className='d-flex justify-content-center align-items-center'>
                <h6 className='my-3 me-3'>Follow me on </h6>
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
            </div>
        </div>
    );
};

export default Footer;