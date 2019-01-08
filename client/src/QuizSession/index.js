import React, { Component } from 'react';
import Question from './Question';
import AnswerSet from './AnswerSet';
import { getAllQuestionsByQuiz } from '../services/questionAPIServices';
import { getAllAnswersByQuestion } from '../services/answerAPIServices';

class QuizSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuestions: [],
      totalAnswers: [],
      currentQuestion: 0,

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
      currentQuestion: questions[0].id
    })
  }
  render() {
    return (
      <div>
        <h1>{this.props.description}</h1>
        <h2>Hello World</h2>
        <Question />
        <AnswerSet />
      </div>
    );
  }
}

export default QuizSession;
