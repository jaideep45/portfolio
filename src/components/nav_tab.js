import React from "react";
import PropTypes from "prop-types";
import "./nav_tab.css";

export default class NavTab extends React.Component {
  static propTypes = {
    main : PropTypes.bool,
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
      this.props.main ? "nav-tab-main" : "nav-tab",
      this.props.selected? "selected":""
    ];

    return (
      <div className={className.join(" ").trim()} onClick={this.handleClick}>
        {this.props.display} 
        {this.props.selected && <div className={this.props.main? 'selected-line-main':'selected-line'}></div>}
      </div>
    );
  }
}
