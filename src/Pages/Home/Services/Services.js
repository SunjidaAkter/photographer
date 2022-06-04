import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useServices();
    return (
        <div className='container mt-5'>
            <p id='services' className='d-inline services-heading mb-1 mt-5'>Services & Pricing</p>
            <p className='font-satisfy'>The photo leaves open moments, which immediately overlap with the<br />pressure of time.</p>
            <div className='services-container mb-5'>
                {
                    services.map(service => <Service
                        service={service}
                        key={service.id}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
