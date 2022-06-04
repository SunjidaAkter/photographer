import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='container'>
            <p className='text-center services-heading'>Sign up for our newsletter to receive <br /> special offers.</p>
            <div className='d-flex justify-content-center my-5'>
                <InputGroup className="mb-3 w-50">
                    <FormControl
                        className='form '
                        placeholder="Enter your email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text className='b-button' id="basic-addon2">OK</InputGroup.Text>
                </InputGroup>
            </div>
        </div>
    );
};

export default Newsletter;