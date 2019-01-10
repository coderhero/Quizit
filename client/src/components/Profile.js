import React from 'react';
import QuizList from './QuizList';
import { fetchUserQuiz } from '../services/userAPIServices';
import { getOneQuiz } from '../services/quizAPIServices';
import { getQuizQuestions } from '../services/quizAPIServices';
import { getQuestionAnswers } from '../services/questionAPIServices';
import { getAllAnswersByQuestion } from '../services/answerAPIServices';
import { getAllQuestionsByQuiz } from '../services/questionAPIServices';


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuestions: null,
      totalAnswers: null,
      quizID: 12,
      isDataLoaded: false
    }
  }
  async componentDidMount() {
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
  render() {
    return (
      <div>
      {this.state.isDataLoaded ?
        <QuizList questions={this.state.totalQuestions}
                  answers={this.state.totalAnswers}
        /> : null}
      </div>
    )
  }
}
