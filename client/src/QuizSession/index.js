import React, { Component } from 'react';
import Question from './Question';
import AnswerSet from './AnswerSet';
import QuizResult from './QuizResult';
import SessionInfo from './SessionInfo';
import LoadingMask from '../util/LoadingMask';
import { getAllQuestionsByQuiz } from '../services/questionAPIServices';
import { getAllAnswersByQuestion } from '../services/answerAPIServices';
import { Alert } from 'reactstrap';

class QuizSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ifStartQ: false,
      totalQuestions: null,
      totalAnswers: null,
      // currentAnswerSetIndex is the same as the questionIndex
      isQuizComplete: false,
      totalCorrectAnswer: 0,
      score: 0,
      currentQuestionIndex: 0,
      isAnswerCorrect: false,
      numberOfTry: 0,
      countDown: 20,
      answerDuration: 20
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
  startQuestion = () => {
    this.setState({
      ifStartQ: true
    })
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
              isAnswerCorrect: false,
              numberOfTry: 0,
              currentQuestionIndex: questionIndex,
              countDown: 20,
              answerDuration: 20
            }
          )
        })
        }
      }, 1200);
  }

  handleAnswerSelect = e => {
    const { value } = e.currentTarget;
    if (value === "true") {
      this.updateCorrectAnswer();
      this.resetNewQuestionState();
    } else if(value === "false" && this.state.numberOfTry === 1) {
        this.resetNewQuestionState();
        this.increaseAttempt();
    } else if(value === "false") {
        this.increaseAttempt();
    }
  }
  updateCorrectAnswer = () => {
    this.setState(prevState => {
      const numberOfTry = prevState.numberOfTry + 1;
      const answerDuration = 20 - prevState.countDown;
      const totalCorrectAnswer = prevState.totalCorrectAnswer + 1;
      // score update here but need to refactory
      const score = prevState.score + 300;
      return ({
        isAnswerCorrect: true,
        numberOfTry,
        countDown: 20,
        answerDuration,
        totalCorrectAnswer,
        score
      })
    })
  }

  increaseAttempt = () => {
    this.setState(prevState => {
      const numberOfTry = prevState.numberOfTry + 1;
      return ({
        numberOfTry
      })
    })
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
  showTimerOrMessage = () => {
    const attemp = this.state.numberOfTry;
    const isComplete = this.state.isQuizComplete;
    const isCorrect = this.state.isAnswerCorrect;
    if (!isComplete) {
      switch (attemp) {
        case 1:
          return (
            isCorrect ?
            <Alert color="success">Amazing! You are correct!</Alert>
            : <Alert color="warning">Answer is wrong, try again!</Alert>
          )
          break;
        case 2:
          return (
            isCorrect ?
            <Alert color="success">Wonderful! You make it right!</Alert>
            : <Alert color="danger">Maximum Attemp! Move on!</Alert>
          )
        default:
          return (
            <h3>{this.state.countDown}</h3>
          )
        }
      }
    }


  showResult = () => {
    if (this.state.isQuizComplete) {
      return (
        <QuizResult score={this.state.score}
                    tester={this.props.tester}
                    totalCorrect={this.state.totalCorrectAnswer}
                    totalAnswer={this.state.totalAnswers.length}
        />
      )
    }
  }
  render() {
    return (
      <div>
        { this.state.ifStartQ ? (
          <div>
          {this.showQuestion()}
          {this.showAnswerSet()}
          {this.showTimerOrMessage()}
          </div>
        ) : <SessionInfo description={this.props.description}
                         startQuestion={this.startQuestion}
        />}
        {this.showResult()}
      </div>
    );
  }
}

export default QuizSession;
