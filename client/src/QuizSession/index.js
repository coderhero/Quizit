import React, { Component } from 'react';
import Question from './Question';
import AnswerSet from './AnswerSet';
import Result from './Result';
import LoadingMask from '../util/LoadingMask';
import { getAllQuestionsByQuiz } from '../services/questionAPIServices';
import { getAllAnswersByQuestion } from '../services/answerAPIServices';

class QuizSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuestions: null,
      totalAnswers: null,
      currentQuestionID: 0,
      // currentAnswerSetIndex is the same as the questionIndex
      currentQuestionIndex: 0,
      isQuizComplete: false,
      answerSelected: 0,
      scores: 0
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
  goNextQuestion = () => [

  ]

  showQuestion = () => {
    if (!this.state.isQuizComplete) {
      return (
        this.state.totalQuestions ? <Question question={this.state.totalQuestions[0]}
        /> : <LoadingMask />
      )
    }
  }
  showAnswerSet = () => {
    if (!this.state.isQuizComplete) {
      return (
        this.state.totalAnswers ? <AnswerSet answers={this.state.totalAnswers[0]}
        /> : <LoadingMask />
      )
    }
  }
  showResult = () => {
    if (this.state.isQuizComplete) {
      return (
        <Result />
      )
    }
  }
  render() {
    return (
      <div>
        <h2>{this.props.description}</h2>
        {this.showQuestion()}
        {this.showAnswerSet()}
        {this.showResult()}
      </div>
    );
  }
}

export default QuizSession;
