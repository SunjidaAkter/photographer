import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/logIn');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleSignUp = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log("profile updated");
        navigate('/');
    }
    return (
        <div className='container my-5 caro'>
            <div className='w-50 mx-auto my-5'>
                <h1 className='text-center'>SIGN UP</h1>
                <Form onSubmit={handleSignUp}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='mt-2'>Name</Form.Label>
                        <Form.Control className='mb-2' type="text" name="name" placeholder="Enter name" required />
                        <Form.Label className='mt-2'>Email Address</Form.Label>
                        <Form.Control className='mb-2' type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                    <label className={`accept mb-3 mt-1 ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept INSHOT Terms and Conditions</label>

                    <div className='d-flex '>
                        <Button disabled={!agree} className='d-block w-100 mx-auto' variant="dark" type="submit">
                            Sign Up
                        </Button>
                    </div>
                </Form>
                <p className='my-3'>Already have an account? <Link to="/logIn" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            </div>
            <SocialLogin></SocialLogin>
        </div>

    );
};

export default SignUp;