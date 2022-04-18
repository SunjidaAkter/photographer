import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import googleIcon from "../../../icons/googleIcon.png";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    if (user) {
        navigate('/home');
    }
    return (
        <div>
            <div className='container w-50'>
                <div className='d-flex align-items-center'>
                    <div style={{ height: '1px', backgroundColor: '#404040' }} className=' w-50'></div>
                    <p className='mt-2 px-2'>or</p>
                    <div style={{ height: '1px', backgroundColor: '#404040' }} className='w-50'></div>
                </div>
                <div className=''>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-dark w-100 d-block mx-auto my-2'>
                        <img style={{ width: '30px' }} src={googleIcon} alt="" />
                        <span className='px-2'>Google Sign In</span>
                    </button>
                    {errorElement}
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;