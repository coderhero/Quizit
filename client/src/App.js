import React, { Component } from 'react';
import QuizSession from './QuizSession';
import NavBar from './LandingPage/NavBar';
import SearchBar from './LandingPage/SearchBar';
import { getAllQuizzes } from './services/quizAPIServices';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuizzes: [],
      searchTerm: '',
      quizSessionID: 0,
      quizSessionDescription: '',
      isLandingPage: true

    }
  }
  async componentDidMount() {
    const quizzes = await getAllQuizzes();

    this.setState({
      totalQuizzes: quizzes
    })
  }
  // attachAnswersToQuestions(answers, questions) {
  //   return Promise.all(questions.map((e, index) => {
  //     e.answers = answers[index]
  //   }))
  // }
  handleQuizSearchChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value})
    )
  }

  handleQuizSearchSubmit = e => {
    e.preventDefault();
    const matchedQuiz = this.state.totalQuizzes.filter(quiz =>
      quiz.title.toLowerCase().includes(this.state.searchTerm)
    );
    const sessionQuiz = matchedQuiz[0];
    console.log(sessionQuiz)
    if (sessionQuiz) {
      this.setState({
        quizSessionID: sessionQuiz.id,
        quizSessionDescription: sessionQuiz.description,
        isLandingPage: false
      })
    }
  }

  showSearchBar() {
    return (
      this.state.isLandingPage ?
      <SearchBar
        searchTerm={this.state.searchTerm}
        handleChange={this.handleQuizSearchChange}
        handleSubmit={this.handleQuizSearchSubmit} /> : null
    )
  }
  showQuizSession() {
    const sessionID = this.state.quizSessionID;
    return (
      sessionID ? <QuizSession quizID={sessionID}
                               description={this.state.quizSessionDescription}
      />
    : null
    )
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        { this.showSearchBar() }
        { this.showQuizSession() }
      </div>
    );
  }
}

export default App;
