import React from "react";
import PropTypes from "prop-types";
import "./ux_projects.css";
import power from '../assets/icons/power.svg';
import visual from '../assets/icons/visual.svg';
import interaction from '../assets/icons/interaction.svg';

export default class UxProjects extends React.Component {
  static propTypes = {
  };

  NavigateLink =(link)=>{
    return ()=>{this.props.navigate(link);}
  }
  

  RenderProjectTile(title, description, bgColor, strokeColor, icon, link){
    return (<div className="project-tile" style={{backgroundColor:bgColor,borderColor:strokeColor}} onClick={this.NavigateLink(link)}>
        <div className="icon-background" style={{backgroundColor:strokeColor}}>
            <img src={icon} style={{fill:'#FFECE1',height: '32px'}}></img>
        </div>
        <div className="tile-content">
            <div className="tile-title" style={{color:strokeColor}}>{title}</div>
            <div className="tile-description body-text">{description}</div>
        </div>
    </div>);
  }

  render() {
    const className = [
    ];

    return (
      <div className="ux-projects">
        <div className="project-tile-grid">
            {this.RenderProjectTile('Theme engine','No-code webstore theme builder for Bikayi infrastructure','#fff9f5','#FE9256',power,'/theme')}
            {this.RenderProjectTile('IxD - Bikayi','Subscription management, Review management and other projects','#f8f3fe','#9B51E0',interaction,'/interaction')}
            {this.RenderProjectTile('Visual Design - Bikayi','Compilation of visual design tasks at Bikayi','#f8f3fe','#9B51E0',visual,'visual')}
        </div>
      </div>
    );
  }
}
