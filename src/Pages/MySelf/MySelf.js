import React from 'react';
import pehotographer from '../../Images/13.jpg'
import './MySelf.css'

const MySelf = () => {
    return (
        <div className='container'>
            <div className='mt-5 d-flex justify-content-center align-items-center flex-column'>
                <img className=' p-w' src={pehotographer} alt="" />
                <h3 className='mt-3 my-heading'>Hello.</h3>
                <p className='my-para'><q>All that we do is work on the style of life, on "being." The object as such is not very interesting. I wonder how people will live with him, what metamorphoses he will undergo in the house. I always liked very simple things. In all. Doing simple things is the most difficult thing. If we talk about simplicity, then it is a synthesis.</q></p>
                <h5 className='text-center'>— Edward Oliver</h5>
            </div>

        </div>
    );
};

export default MySelf;