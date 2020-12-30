import React from 'react';
import AVATAR from '../../static/avatar.png';
import '../styles/hero.css';

export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                Welcome to my blog!<br />
                Enjoy lots of posts.<br />
            </h1>

            <div className="hero-author">
                <img
                    src={ AVATAR } className="hero-author-image"
                    alt="avatar"></img>
                <p className="hero-author-text">
                    Written by ndj.<br />
                    I have no money.
                </p>
            </div>
        </div>
    );
}
