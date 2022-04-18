import React from 'react';
import './MyWork.css'
const MyWork = () => {
    return (
        <div>
            <h1 className='text-center'>My Work</h1>
            <p></p>
            <div className='work-container container'>
                <div className='d-flex flex-column '>
                    <img className='w-100 my-3' src="https://i.ibb.co/4YvVMLb/33-image.jpg" alt="" />
                    <img className='w-100 my-3' src="https://i.ibb.co/sW5ThrN/34-image.jpg" alt="" />
                    <img className='w-100 my-3' src="https://i.ibb.co/3h63mzf/32-image.jpg" alt="" />
                </div>
                <div className='d-flex flex-column '>
                    <img className='w-100 my-3' src="https://i.ibb.co/0KJHXB1/03-image-1.jpg" alt="" />
                    <img className='w-100 my-3' src="https://i.ibb.co/xhTHNyx/04-image.jpg" alt="" />
                </div>
                <div className='d-flex flex-column '>
                    <img className='w-100 my-3' src="https://i.ibb.co/7KHJSKJ/28-image.jpg" alt="" />
                    <img className='w-100 my-3' src="https://i.ibb.co/wJmPQG9/30-image.jpg" alt="" />
                    <img className='w-100 my-3' src="https://i.ibb.co/hyZDn11/29-image.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MyWork;