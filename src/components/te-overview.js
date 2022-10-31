import { getRoles } from "@testing-library/react";
import React, { useState } from "react";
import './te_main.css';


function TeOverview(props){
    return <div className="project-content" style={{paddingTop:"64px",gap:"64px"}}>
        <RenderProblem/>
        <RenderThemeContext />
            </div>;
}

function RenderProblem(){
    return <div className="project-section">
    <div className="project-section-wrapper">
    <div className="slim-heading" style={{marginBottom:"24px",color: 'var(--grey-0)'}}>PROBLEM</div>
    <div className="special-text" style={{marginBottom:"32px",lineHeight:'32px'}}>
    A typical e-commerce merchant likes to choose from a broad range of visual themes for their online store, which suits their product line and requirements and would like to customize it to their needs. But the minimum time to ship a new webstore theme at Bikayi is <strong>1-2 months</strong>. 
    </div>
    <div className="body-text-bold" style={{marginBottom:"20px", color:'var(--grey-1)'}}>
        <strong>In summary,  we needed a process to</strong>
    </div>
    <div className="content-pointer-line" style={{display:"inline-flex",alignItems:'center',gap:"12px"}}>
        <div className="pointer">
            1
        </div>
        <div className="body-text" style={{color:'var(--grey-1)'}}>
        Ship new webstore themes as fast as possible
        </div>
    </div>
    <div className="content-pointer-line" style={{display:"inline-flex",alignItems:'center',gap:"12px"}}>
        <div className="pointer">
            2
        </div>
        <div className="body-text" style={{color:'var(--grey-1)'}}>
        Reduce the development cost as possible 
        </div>
    </div>
    <div className="content-pointer-line" style={{display:"inline-flex",alignItems:'center',gap:"12px"}}>
        <div className="pointer">
            3
        </div>
        <div className="body-text" style={{color:'var(--grey-1)'}}>
        Ship customizable themes, which the merchant can edit, while maintaining the consistency and aesthetic quality
        </div>
    </div>
    </div>
</div>;
}

function RenderThemeContext(){
    return <div className="project-section" style={{backgroundColor:'var(--light-orange)'}}>
    <div className="project-section-wrapper">
        Hi
    </div>
</div>;
}

export default TeOverview;