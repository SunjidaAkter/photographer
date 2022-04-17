import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, cameraType, term, resolution, processing, _package } = service;
    return (
        <div className='container photo-frame'>
            <div className="photo"><img src={img} alt="" /></div>
            <div className="photo-element">
                <h2 className='text-center' >{name}</h2>
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
                <div className='d-flex justify-content-between'>
                    <h2 className='ms-4'>${price}</h2>
                    <button className='butn me-2'>Check Out</button>
                </div>
            </div>
        </div>
    );
};

export default Service;