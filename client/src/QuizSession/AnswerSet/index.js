import React, { Component } from 'react';

class AnswerSet extends Component {
  constructor(props) {
    super(props);
  }
  showAnswerList = () => {
      return (
        <ul>
          {this.props.answers.map(answer => {
            return (
              <li key={answer.id}>
              <button onClick={this.props.handleAnswerSelect}>
              { answer.answer }</button>
              </li>
            )
          })}
        </ul>
      )
  }
  render() {
    return (
      <div>
        {this.showAnswerList()}
      </div>
    )
  }

}
export default AnswerSet;
