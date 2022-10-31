import React, { useState } from "react";
import About from "./about";
import "./home.css";
import Navbar from "./navbar";
import Shots from "./shots";
import UxProjects from "./ux_projects";
import { useNavigate } from "react-router-dom";

export const tabs = {
    ux: 'UX PROJECTS',
    shots: 'SHOTS',
    about: 'ABOUT',

}

function Home(props) {
    let [selected, setSelected] = useState(tabs.ux);
    let navigate = useNavigate();


    let handleClick = (s) => {
        setSelected(s);
    };

    let content;
    switch (selected) {
        case tabs.ux:
            content = <UxProjects navigate={navigate}></UxProjects>;
            break;
        case tabs.about:
            content = <About></About>;
            break;
        case tabs.shots:
            content = <Shots></Shots>;
            break;
    }
    return (
        <div className="App">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"></link>
            <Navbar selected={selected} handleClick={handleClick}></Navbar>
            <div className="home-content">
                <div className="home-content-wrapper">{content}</div>
            </div>
        </div>
    );

}

export default Home;