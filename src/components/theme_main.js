import React, { useState } from "react";
import NavTab from "./nav_tab";

export const chapters = {
    1: 'PRODUCT OVERVIEW',
    2: 'DATA SCHEMA',
    3: 'INTELLIGENT BUILDING BLOCKS',

}

function ThemeMain(){
    let [theme_chapter,setChapter] = useState(1);
    return <div ><ThemeNav theme_chapter = {theme_chapter} setChapter = {setChapter}/></div>;
}

function ThemeNav(props){
    return <div className="navbar">
            <div className="nav-header">
            <div className="navbar-wrapper">
                <div className="main-title">
                    Theme engine
                </div>
            </div>
            </div>
            <div className="tab-bar">
                <div className = "tabs-wrapper">
                {Object.keys(chapters).map((t)=><NavTab display = {chapters[t]} key={t} selectId={t} selected={t===props.theme_chapter} handleClick={props.setChapter}></NavTab>)}
                </div>
            </div>
        </div>;
}

export default ThemeMain;