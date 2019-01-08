import React, { Component } from 'react';
import QuizSession from './components/QuizSession'
import { getAllQuizzes } from './services/quizAPIServices';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuizzes: [],
    }
  }
  async componentDidMount() {
    const quizzes = await getAllQuizzes();
    const quizID = quizzes[0].id;


    this.setState({
      totalQuizzes: quizzes
    })
  }
  // attachAnswersToQuestions(answers, questions) {
  //   return Promise.all(questions.map((e, index) => {
  //     e.answers = answers[index]
  //   }))
  // }
  render() {
    return (
      <div className="App">
        <QuizSession quizID = {4}/>
      </div>
    );
  }
}

export default App;
