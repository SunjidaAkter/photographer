import React from 'react';
import './MyWork.css'
const MyWork = () => {
    return (
        <div className='container'>
            <h1 className='headline mt-5'>My Work</h1>
            <p className='font-satisfy'>A photo — is a search for what can get into the frame. When you limit events to<br />A frame — You change these events.</p>
            <div className='work-container '>
                <div className='d-flex flex-column '>
                    <img className='w-100 mt-0 mb-3' src="https://i.ibb.co/4YvVMLb/33-image.jpg" alt="" />
                    <img className='w-100 my-3' src="https://i.ibb.co/sW5ThrN/34-image.jpg" alt="" />
                    <img className='w-100 my-3' src="https://i.ibb.co/3h63mzf/32-image.jpg" alt="" />
                </div>
                <div className='d-flex flex-column '>
                    <img className='w-100 mt-0 mb-3' src="https://i.ibb.co/0KJHXB1/03-image-1.jpg" alt="" />
                    <img className='w-100 my-3' src="https://i.ibb.co/xhTHNyx/04-image.jpg" alt="" />
                </div>
                <div className='d-flex flex-column '>
                    <img className='w-100 mt-0 mb-3' src="https://i.ibb.co/7KHJSKJ/28-image.jpg" alt="" />
                    <img className='w-100 my-3' src="https://i.ibb.co/wJmPQG9/30-image.jpg" alt="" />
                    <img className='w-100 my-3' src="https://i.ibb.co/hyZDn11/29-image.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MyWork;