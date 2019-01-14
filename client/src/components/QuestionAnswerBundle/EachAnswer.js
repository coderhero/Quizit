import React from 'react';
import { Button } from 'reactstrap';
import CreateAnswerForm from './CreateAnswerForm';
import EditAnswerForm from './EditAnswerForm';
import { fetchOneAnswer, editOneAnswer } from '../../services/answerAPIServices';
import './EachAnswer.css';

class EachAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toCreateAnswer: false,
      toEditAnswer: false,
      questionID: 0,
      editAnswerID: 0,
      editAnswerForm: {
        answer: '',
        correct: ''
      }
    }
  }
  createAnswer = e => {
    const { id } = e.currentTarget;
    this.setState({
      toCreateAnswer: true,
      questionID: id,
    })
  }
  editAnswer = async e => {
    console.log(e.currentTarget.id);
    const resp = await fetchOneAnswer(e.currentTarget.id);
    const { answer, correct } = resp;
    this.setState({
      editAnswerID: resp.id,
      toEditAnswer: true,
      editAnswerForm: {
        answer,
        correct
      }
    });
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
                  onClick={this.editAnswer}
                  >Edit</Button>
          <Button size="sm"
                  color="danger"
                  id={this.props.id}
                  onClick={this.props.handleDelete}
                  >Delete</Button>
      </div>
    )
  }
  showAnswerEditForm = () => {
    if (this.state.toEditAnswer) {
      return (
        <EditAnswerForm handleChange={this.handleAnswerEditChange}
                        handleSubmit={this.handleAnswerEditSubmit}
                        answerEdit={this.state.editAnswerForm}
                        id={this.state.editAnswerID}
          />
      )
    } else {
      return null;
    }
  }

  handleAnswerEditChange = e => {
    const { id, value } = e.target;
    this.setState(prevState => (
      {
        editAnswerForm: {
          ...prevState.editAnswerForm,
          [id]: value,
        }
      }
    ))
  }
  handleAnswerEditSubmit = async e => {
    e.preventDefault();
    const id = e.target.id;
    console.log(id);
    this.setState({
      toEditAnswer: false
    })
    await editOneAnswer(id, this.state.editAnswerForm);
    await this.props.fetchAll();
    this.setState({
      editAnswerForm: {
        answer: '',
        correct: ''
      }
    })
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

          /> : this.showAnswerEditForm()
         }
      </div>
    )
  }
}
export default EachAnswer;
