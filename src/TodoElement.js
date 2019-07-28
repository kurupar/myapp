import React, { Component } from "react";

class TodoElement extends Component {
  render() {
    const {
      element: { id },
    } = this.props;

    return (
      <li>
        <span>{this.props.element.content}</span>
      </li>
    );
  }
}

export default TodoElement;
