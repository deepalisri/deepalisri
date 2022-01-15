import React from "react";
import { Component } from "react/cjs/react.production.min";

import "./style.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <>
                <div className="header-container">
                    <div className="header">
                        <div className="header-logo">
                            <img src="" alt="logo"></img>
                        </div>
                        <div className="header-content">
                            <h2 className="header-title">Discover AR/VR Apps created by our community members</h2>
                            <div className="icon-input search-box">
                                <i className="fa fa-search icon-input__icon material-icons"></i>
                                <input className="icon-input__text-field" type="text" placeholder="Search recent events" onChange={(e) => this.props.handleChange(e)} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;