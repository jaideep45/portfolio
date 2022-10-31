import React, { useState } from "react";
import NavTab from "./nav_tab";
import './te_main.css';
import TeOverview from './te-overview.js';

export const chapters = {
    1: 'PRODUCT OVERVIEW',
    2: 'DATA SCHEMA',
    3: 'INTELLIGENT BUILDING BLOCKS',

}

function TeMain(){
    let [theme_chapter,setChapter] = useState(1);
    return <div className="Theme-engine">
                <TeNav theme_chapter = {theme_chapter} setChapter = {setChapter}/>
                <TeOverview/>
            </div>;
}

function TeNav(props){
    return <div className="navbar">
            <div className="nav-header">
            <div className="navbar-wrapper" style={{paddingBottom:'24px',paddingTop:'24px'}}>
                <div className="main-title-theme" style={{display:"inline-flex",alignItems:"center",justifyContent:'ce',flexShrink:0,gap:"24px"}}>
                    <div style={{flexShrink:0}}>Theme engine</div>
                    {/* <div style={{fontSize:"16px",letterSpacing:"-1px",fontFamily:'Inter-Medium'}}>No-code theme designer for the Bikayi westore</div> */}
                </div>
                {/* <div className="nav-body" style={{fontSize:'16px',marginTop:'8px',fontFamily:'Inter-Medium',color:'#84401a'}}>
                    No-code theme designer for the Bikayi westore
                </div> */}
            </div>
            </div>
            <div className="tab-bar-main">
                <div className = "tabs-wrapper">
                {Object.keys(chapters).map((t)=><NavTab  display = {chapters[t]} key={t} selectId={t} selected={t==props.theme_chapter} handleClick={props.setChapter}></NavTab>)}
                </div>
            </div></div>;
}

export default TeMain;