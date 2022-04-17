import React from "react";
import './style.scss';
import banner from "../../assets/banner.png";
import Logo from '../../assets/MyJobs.svg';

function Banner() {
    return (
        <div className="banner-container flex space-between align-start">
            <div className="title-container">
                <p className="title">Welcome to </p>
                <div className="banner-logo"><img src={Logo} alt="logo" /></div>
                <div className="my-20">
                    <button className="bg-light-blue btn">Get Started</button>
                </div>
            </div>
            <div className="banner-image">
                <img src={banner} alt="banner" />
            </div>
        </div>
    )
}
export default Banner