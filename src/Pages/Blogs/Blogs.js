import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center mt-5'>BLOGS</h1>
            <div className='caro my-5'>
                <div className='w-50 mx-auto my-5 '>
                    <h3 className='text-center my-2'>Difference between authorization and authentication</h3>
                    <p className='justification'>The process of verifying who the user is, is Authentication. On the other hand determining which user has access to which applications, files, and data is authorization. Comparing these processes to a real-world example,the process of verifying and confirming employees ID and passwords in an organization is called authentication, but authorization is the process of verifying what specific floor an employee has access to. Authentication is done before the authorization process, whereas authorization process is done after the authentication process.
                    </p>
                </div>
            </div>
            <div className='caro my-5'>
                <div className='w-50 mx-auto my-5 '>
                    <h3 className='text-center my-2'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <h6>Reason of using Firebase :</h6>
                    <p className='justification'>Specifically for this project, I am using firebase for hosting & authentication. But Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. </p>
                    <h6>Other options to implement Firebase :</h6>
                    <p className='justification'>The best other options I have to implement authentication are Auth0, Passport, mongoDB, okta, keycloak and many more.</p>
                </div>
            </div>
            <div className='caro my-5'>
                <div className='w-50 mx-auto my-5 '>
                    <h3 className='text-center my-2'> What other services does firebase provide other than authentication?</h3>
                    <p className='justification'>Firebase is used for many purposes that can help apps to develop & grow and make it a quality app.
                        Moreover, Firebase is made with a developer in mind to solve all the issues they might face when making an app. The other services does firebase provide other than authentication are Database Cloud Storage, Hosting, Google Analytics, Cloud Messagin, Predictions and many more .


                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;