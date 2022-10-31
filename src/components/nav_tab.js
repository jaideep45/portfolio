import React from "react";
import PropTypes from "prop-types";
import "./nav_tab.css";

export default class NavTab extends React.Component {
  static propTypes = {
    display: PropTypes.string,
    selected: PropTypes.bool,
    selectId: PropTypes.string,
    handleClick: PropTypes.func,
  };

  handleClick = () => {
    this.props.handleClick(this.props.selectId);
  };

  render() {
    const className = [
      "nav-tab",
      this.props.selected? "selected":""
    ];

    return (
      <div className={className.join(" ").trim()} onClick={this.handleClick}>
        {this.props.display} 
        {this.props.selected && <div className='selected-line'></div>}
      </div>
    );
  }
}
