import React from "react";
import './style.scss';
import Logo from '../../assets/MyJobs.svg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTE_HOME, ROUTE_LOGIN } from "../../Components/constants"
import DownIcon from "../../assets/down.svg"

function Header() {
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const getLoginDetails = sessionStorage.getItem(('userDetails')) && JSON.parse(sessionStorage.getItem(('userDetails')));
    const handleLogout = () => {
        sessionStorage.removeItem("userDetails");
        navigate(ROUTE_HOME);
    }
    const showLoginButton = () => {
        if (location !== ROUTE_LOGIN) {
            if (!getLoginDetails) {
                return (
                    <div className="login">
                        <Link to={ROUTE_LOGIN}><button className="bg-dark-blue btn">Login/Signup</button></Link>
                    </div>
                )
            } else if (getLoginDetails && getLoginDetails.isLoggedIn) {
                return (
                    <div className="user-icon flex space-between align-center">
                        <div className="icon">
                            <p>{getLoginDetails && getLoginDetails.name.charAt(0)}</p>
                        </div>
                        <div className="tooltip" title="Logout">
                            <span onClick={handleLogout}>Logout</span>
                            <img src={DownIcon} alt="icon-down" />
                        </div>
                    </div>
                )
            }
        } else {
            return
        }
    }
    return (
        <div className="header-container flex space-between align-center">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            {showLoginButton()}
        </div>
    )
}

export default Header