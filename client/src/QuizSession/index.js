import React, { Component } from 'react';
import Question from './Question';
import AnswerSet from './AnswerSet';
import QuizResult from './QuizResult';
import LoadingMask from '../util/LoadingMask';
import { getAllQuestionsByQuiz } from '../services/questionAPIServices';
import { getAllAnswersByQuestion } from '../services/answerAPIServices';

class QuizSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuestions: null,
      totalAnswers: null,
      // currentAnswerSetIndex is the same as the questionIndex
      isQuizComplete: false,
      totalCorrectAnswer: 0,
      score: 0,
      currentQuestionIndex: 0,
      isAnswerSelected: false,
      isAnswerCorrect: false,
      numberOfTry: 0
    }
  }
  async componentDidMount() {
    const questions = await getAllQuestionsByQuiz(this.props.quizID);
    const questionIDs = await questions.map(e => e.id);
    const answers = await getAllAnswersByQuestion(questionIDs);
    // const qWithAnswers = await this.attachAnswersToQuestions(answers, questions);
    this.setState({
      totalQuestions: questions,
      totalAnswers: answers,
      currentQuestionID: questions[0].id,

    })
  }
  goNextQuestion = () => {

  }

  resetNewQuestionState = () => {
    setTimeout(
      () => {
        if (this.state.currentQuestionIndex + 1 >= this.state.totalQuestions.length) {
          this.setState({
            isQuizComplete: true
          })
        } else {
          this.setState(prevState => {
          const questionIndex = prevState.currentQuestionIndex + 1;
          return (
            {
              isAnswerSelected: false,
              isAnswerCorrect: false,
              numberOfTry: 0,
              currentQuestionIndex: questionIndex
            }
          )
        })
        }
      }, 500);
  }

  handleAnswerSelect = e => {
    const { value } = e.currentTarget;
    if (value === "true") {
      this.setState(prevState => {
        const numberOfTry = prevState.numberOfTry + 1;
        return ({
          isAnswerSelected: true,
          isAnswerCorrect: true,
          numberOfTry
        })
      })
      this.resetNewQuestionState();
    } else if(value === "false") {
      this.setState(prevState => {
        const numberOfTry = prevState.numberOfTry + 1;
        return ({
          isAnswerSelected: true,
          isAnswerCorrect: false,
          numberOfTry
        })
      })
    }
  }

  showQuestion = () => {
    if (!this.state.isQuizComplete) {
      return (
        this.state.totalQuestions ? <Question question={this.state.totalQuestions[this.state.currentQuestionIndex]}
        /> : <LoadingMask />
      )
    }
  }
  showAnswerSet = () => {
    if (!this.state.isQuizComplete) {
      return (
        this.state.totalAnswers ?
        <AnswerSet answers={this.state.totalAnswers[this.state.currentQuestionIndex]}
                   handleSelect={this.handleAnswerSelect}

        /> : <LoadingMask />
      )
    }
  }
  showMessage = () => {
    if (this.state.numberOfTry && !this.state.isQuizComplete) {
      return (
        this.state.isAnswerCorrect ?
        <p>Wonderful! You are correct!</p>
        : <p>Unfortunately! Your answer is wrong, try it again</p>
      )
    }
  }

  showTimerOrResult = () => {
    if (this.state.isQuizComplete) {
      return (
        <QuizResult />
      )
    }
  }
  render() {
    return (
      <div>
        <h2>{this.props.description}</h2>
        {this.showQuestion()}
        {this.showAnswerSet()}
        {this.showMessage()}
        {this.showTimerOrResult()}
      </div>
    );
  }
}

export default QuizSession;
