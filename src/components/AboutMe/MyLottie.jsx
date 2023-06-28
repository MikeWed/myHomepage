import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../assets/avatarLottie.json';

export default function MyLottie() {

    return (
        <Lottie animationData={animationData} loop={true} className='mikeLottie'/>
    );
}