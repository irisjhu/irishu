import React, { Component } from "react";
import Switch from "react-switch";
 
class SwitchToggle extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
    this.props.changeTheme();
  }
 
  render() {
    return (
      <label className="switch-toggle">
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label>
    );
  }
}

export default SwitchToggle;