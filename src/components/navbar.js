import React from "react";
import PropTypes from "prop-types";
import behance from '../assets/icons/behance.svg';
import linkedin from '../assets/icons/linkedin.svg';
import github from '../assets/icons/github.svg';
import twitter from '../assets/icons/twitter.svg';
import './navbar.css'
import './nav_tab.js'
import NavTab from "./nav_tab.js";
import {tabs} from "./home.js";


export default class Navbar extends React.Component {
    static propTypes = {
        selected: PropTypes.string,
        clickHandler: PropTypes.func,
    };

    handleClick = tab => {
        this.props.handleClick(tab);
    };

    render() {
        return (
            <div className="navbar">
                <div className="nav-header">
                <div className="navbar-wrapper"  style={{paddingBottom:'32px',paddingTop:'32px'}}>
                    <div className="main-title">
                        Hello, I'm Jai
                    </div>
                    <div className="nav-body">
                        I'm a software engineer and product designer constantly looking for opportunities at the intersection. Moving away from ambiguity, one decision at a time.
                    </div>
                    <div className="icon-buttons">
                        <img src={behance} onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'https://behance.net/jai45';
                        }} />
                        <img src={linkedin} onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'https://behance.net/jai45';
                        }} />
                        <img src={github} onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'https://behance.net/jai45';
                        }} />
                        <img src={twitter} onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'https://behance.net/jai45';
                        }} />
                    </div>
                </div>
                </div>
                <div className="tab-bar-main">
                    <div className = "tabs-wrapper">
                    {Object.keys(tabs).map((t)=><NavTab main = {true} display = {tabs[t]} selectId = {tabs[t]} key={t} selected={tabs[t]===this.props.selected} handleClick={this.handleClick}></NavTab>)}
                    </div>
                </div>
            </div>
        );
    }
}


