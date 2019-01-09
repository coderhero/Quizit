import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
  }
  showQuestionTitle = () => {
      return (
        <h2>{this.props.question.title}</h2>
      )
  }
  render() {
    return (
      <div>
        { this.showQuestionTitle() }
      </div>
    )
  }
}
export default Question;
