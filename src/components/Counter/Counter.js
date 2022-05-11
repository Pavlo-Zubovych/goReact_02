import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handlIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handlDicrement = () => {
    this.setState((prevState) => {
      return { value: prevState.value - 1 };
    });
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        <div className="Counter__controls">
          <button type="button" onClick={this.handlIncrement}>
            Кнопка + 1
          </button>
          <button type="button" onClick={this.handlDicrement}>
            Кнопка - 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
