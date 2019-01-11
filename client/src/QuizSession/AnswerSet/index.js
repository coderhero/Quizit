import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './index.css';

class AnswerSet extends Component {
  constructor(props) {
    super(props);
  }
  showAnswerList = () => {
      return (
        <div className='answer-set'>
          {this.props.answers.map(answer => {
            return (
              <Button id={answer.id}
                      className="option-btn"
                      key={answer.id}
                      color="info"
                      value={answer.correct}
                      onClick={this.props.handleSelect}>
              { answer.answer }
              </Button>
            )
          })}
        </div>
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
