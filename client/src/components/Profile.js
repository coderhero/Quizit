import React from 'react';
import QuizList from './QuizList';
import { fetchUserQuiz } from '../services/userAPIServices';
import { getOneQuiz } from '../services/quizAPIServices';
import { getQuizQuestions } from '../services/quizAPIServices';
import { getQuestionAnswers } from '../services/questionAPIServices';
import { getAllAnswersByQuestion } from '../services/answerAPIServices';
import { getAllQuestionsByQuiz } from '../services/questionAPIServices';
import { deleteOneAnswer,
         createOneAnswer
       } from '../services/answerAPIServices';



export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuestions: null,
      totalAnswers: null,
      quizID: 1,
      isDataLoaded: false,
      createAnswerForm: {
        answer: '',
        correct: '',
      },
      createAQuestionID: 0,
      editAQuestionID: 0,
      toCloseAnswer: false,
    }
  }
  handleAnswerDelete = async e => {
    // console.log(e.currentTarget.id)
    // console.log('ready to delete')
    await deleteOneAnswer(e.currentTarget.id);
    await this.fetchAllQuestionsAnswers();
  }

  handleAnswerSubmit = async e => {
    console.log('about to submit')
    e.preventDefault();
    const id = e.target.id;
    console.log(id)
    await createOneAnswer(id, this.state.createAnswerForm);
    await this.fetchAllQuestionsAnswers();
    this.setState({
      toCloseAnswer: true,
      createAnswerForm: {
        answer: '',
        correct: '',
      }
    })
  }

  handleAnswerCreate = e => {
    let { id, value } = e.target;
    if (value === "true") {
      value = true;
    } else if (value === "false") {
      value = false;
    }
    this.setState(prevState => (
      {
        createAnswerForm: {
          ...prevState.createAnswerForm,
          [id]: value,
        }
      }
    ))
  }


  fetchAllQuestionsAnswers = async() => {
    const questions = await getAllQuestionsByQuiz(this.state.quizID);
    const questionIDs = await questions.map(e => e.id);
    const answers = await getAllAnswersByQuestion(questionIDs);
    // const qWithAnswers = await this.attachAnswersToQuestions(answers, questions);
    this.setState({
      totalQuestions: questions,
      totalAnswers: answers,
      isDataLoaded: true
    })
  }
  async componentDidMount() {
    await this.fetchAllQuestionsAnswers();
  }
  render() {
    return (
      <div>
      {this.state.isDataLoaded ?
        <QuizList questions={this.state.totalQuestions}
                  answers={this.state.totalAnswers}
                  handleDelete={this.handleAnswerDelete}
                  handleAnswerCreate={this.handleAnswerCreate}
                  handleAnswerSubmit={this.handleAnswerSubmit}
                  answerCreate={this.state.createAnswerForm}
                  toCloseAnswer={this.state.toCloseAnswer}
                  fetchAll={this.fetchAllQuestionsAnswers}
        /> : null}
      </div>
    )
  }
}
