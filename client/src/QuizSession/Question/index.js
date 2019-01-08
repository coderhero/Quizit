import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}
export default Question;
