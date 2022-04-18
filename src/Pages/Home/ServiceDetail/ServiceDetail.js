import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to detail: {serviceId}</h2>
            <div className='text-center'>
                <Link to="/checkOut">
                    <button className='btn btn-dark'>Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;