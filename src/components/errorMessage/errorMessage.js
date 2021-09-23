import React from 'react';
import './errorMessage.css';
import img from './error.jpg';

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='error'></img> 
            <span>Something goes wrong</span>
        </>
    )
}

/* <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt='error'></img> // Достучаться до картинки из папки public */

export default ErrorMessage;