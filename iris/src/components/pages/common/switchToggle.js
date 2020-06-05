import React, { Component } from "react";
import Switch from "react-switch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
 
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
        <Switch 
            onChange={this.handleChange} 
            checked={this.state.checked}
            checkedIcon={<FontAwesomeIcon icon={faMoon} />}
            uncheckedIcon={<FontAwesomeIcon icon={faSun} />}
            height={32}
            width={60}
            onColor={'#f2f9f8'}
            onHandleColor={'#21272e'}
            // offColor={'#5c5c5c'}
            offColor={'#313a44'}
        />
      </label>
    );
  }
}

export default SwitchToggle;