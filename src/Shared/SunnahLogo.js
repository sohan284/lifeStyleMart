import React from 'react';
import { useNavigate } from 'react-router-dom';

const SunnahLogo = () => {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    }
    return (
        <div className='flex justify-center'>
        <img onClick={navigateToHome} className='w-48 ml-5' src="https://i.ibb.co/10QD21D/martLogo.png" alt="" />
        </div>
    );
};

export default SunnahLogo;