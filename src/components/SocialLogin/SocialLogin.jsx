import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                navigate('/');
            })
        })
    }
    return (
        <div className='p-8'>
            <div className='divider'></div>
            <button onClick={handleGoogleSignIn} className="btn">
                <FaGoogle className='mr-2'></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;