import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  togle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div className="Dropdown">
        <button type="button" className="Dropdown__toggle" onClick={this.togle}>
          {visible ? "Заховати" : "Показати"}
        </button>

        {visible && <div className="Dropdown__menu">Випадаюче меню</div>}
      </div>
    );
  }
}

export default Dropdown;
