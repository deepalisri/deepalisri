import React from "react";
import Banner from "../Banner";
import './style.scss';
import goldline from '../../assets/goldline.png';
import ideaa from '../../assets/ideaa.png';
import kanba from '../../assets/kanba.png';
import lighting from '../../assets/lighting.png';
import liva from '../../assets/liva.png';
import solaytic from '../../assets/solaytic.png';
import velocity from '../../assets/velocity-9.png';
import ztos from '../../assets/ztos.png';

function Homepage() {
    const trustedCompanies = [goldline, ideaa, kanba, lighting, liva, solaytic, velocity, ztos]
    return (
        <>
            <Banner />
            <div className="bottom-container">
                <section>
                    <h2>Why Us</h2>
                    <div className="card-container flex space-between">
                        <div className="card">
                            <h2>Get More Visibility</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div className="card">
                            <h2>Organize Your Candidates</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div className="card">
                            <h2>Verify Their Abilities</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </section>
                <section className="company-container-wrapper">
                    <h2>Companies Who Trust Us</h2>
                    <div className="company-container flex space-between">
                        {trustedCompanies.map((company, index) =>
                            <div className="company" key={index}>
                                <img src={company} alt="company-name" />
                            </div>)
                        }
                    </div>
                </section>
            </div>
        </>
    )
}
export default Homepage