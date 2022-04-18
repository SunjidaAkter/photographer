import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, cameraType, term, resolution, processing, _package } = service;



    return (
        <div className='container photo-frame'>
            <div className="photo"><img src={img} alt="" /></div>
            <div className="photo-element">
                <div>
                    <h2 className='text-center mt-lg-2 mt-sm-5 mt-xs-5' >{name}</h2>
                    <h5 className='ms-4 mt-4'>PHOTOS</h5>
                    <p className='ms-4 mb-3'>Package of {_package}</p>
                    <h5 className='ms-4 mt-3'>PROCESSING</h5>
                    <p className='ms-4 mb-3'>{processing}</p>
                    <h5 className='ms-4 mt-3'>TYPE OF CAMERA</h5>
                    <p className='ms-4 mb-3'>{cameraType}</p>
                    <h5 className='ms-4 mt-3'>RESOLUTION</h5>
                    <p className='ms-4 mb-3'>{resolution}</p>
                    <h5 className='ms-4 mt-3'>TERM</h5>
                    <p className='ms-4 mb-3'>{term}</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <h2 className='ms-4'>${price}</h2>
                    <Link to="/checkOut">
                        <button className='butn me-2'>Check Out</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;