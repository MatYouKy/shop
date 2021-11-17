import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Home.scss';

export const Home = () => {
    const navigate = useNavigate();
    return(
        <article id="home-section" className="home-section">
            <div className="home-shadow"/>
            <div className="blur"/>
            <div className="home-text">
                <h1 className="home-text__header">welcome to the world!</h1>
                <p>in the best store of electronics</p>
                <button 
                    className='home-text__button' type='button'
                    onClick={() => navigate('products')}
                    >check it
                </button>
            </div>
        </article>
    );
}