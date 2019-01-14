import React from 'react';
import { Button } from 'reactstrap';
import CreateAnswerForm from './CreateAnswerForm';

import './EachAnswer.css';

class EachAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toCreateAnswer: false,
      questionID: 0
    }
  }
  createAnswer = e => {
    const { id } = e.currentTarget;
    this.setState({
      toCreateAnswer: true,
      questionID: id,
    })
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.toCloseAnswer === true) {
      this.setState({
        toCreateAnswer: false
      })
    }
  }
  // static getDerivedStateFromProps(props, current_state) {
  //   if (props.toCloseAnswer === current_state.toCreateAnswer) {
  //     this.setState({
  //       toCreateAnswer: false
  //     })
  //   }
  // }

  showOneAnswer = () => {
    return (
      <div className="each-answer">
        <span>{this.props.answer}</span>
          <Button size="sm"
                  color="success"
                  id={this.props.questionid}
                  onClick={this.createAnswer}
                  >Create</Button>
          <Button size="sm"
                  color="info"
                  id={this.props.id}
                  >Edit</Button>
          <Button size="sm"
                  color="danger"
                  id={this.props.id}
                  onClick={this.props.handleDelete}
                  >Delete</Button>
      </div>
    )
  }
  render() {
    return (
      <div>
        { this.showOneAnswer() }
        { this.state.toCreateAnswer ?
          <CreateAnswerForm handleAnswerCreate={this.props.handleAnswerCreate}
                            handleAnswerSubmit={this.props.handleAnswerSubmit}
                            answerCreate={this.props.answerCreate}
                            id={this.state.questionID}

          /> : null }
      </div>
    )
  }
}
export default EachAnswer;
