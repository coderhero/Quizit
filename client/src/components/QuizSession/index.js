import React, { Component } from 'react';
import { getAllQuestionsByQuiz } from '../../services/questionAPIServices';
import { getAllAnswersByQuestion } from '../../services/answerAPIServices';

class QuizSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuestions: [],
      totalAnswers: []
    }
  }
  async componentDidMount() {
    const questions = await getAllQuestionsByQuiz(this.props.quizID);
    const questionIDs = await questions.map(e => e.id);
    const answers = await getAllAnswersByQuestion(questionIDs);
    // const qWithAnswers = await this.attachAnswersToQuestions(answers, questions);
    this.setState({
      totalQuestions: questions,
      totalAnswers: answers
    })
  }
  render() {
    return (
      <div>
        <Question />
        <AnswerOption />
      </div>
    );
  }
}

export default QuizSession;
