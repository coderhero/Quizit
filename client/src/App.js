import React, { Component } from 'react';
import QuizSession from './QuizSession';
import NavBar from './LandingPage/NavBar';
import SearchBar from './LandingPage/SearchBar';
import AuthForms from './components/AuthForms';
import QuizzesPage from './AllQuizzesPage';
import { getAllQuizzes } from './services/quizAPIServices';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuizzes: [],
      username: '',
      quizSessionID: 0,
      quizSessionDescription: '',
      screen: 'Home',
      searchTerm: '',
      tester: ''

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
        screen: 'QuizSession',
        searchTerm: '',
        tester: ''
      });

    }
  }
  navPage = evt => {
    const id = evt.currentTarget.id;
    this.setState({
      screen: id
    })
  }
  updateUserLogin = username => {
    this.setState({
      username
    })
  }
  showSearchBar() {
    return (
      <SearchBar
        searchTerm={this.state.searchTerm}
        tester={this.state.tester}
        handleChange={this.handleQuizSearchChange}
        handleSubmit={this.handleQuizSearchSubmit}

        />
    )
  }

  showQuizSession() {
    return (
       <QuizSession quizID={this.state.quizSessionID}
                    tester={this.state.tester}
                    description={this.state.quizSessionDescription} />
    )}

  getView = screen => {
    switch (this.state.screen) {
      case 'Home':
      return (
        <div>
          { this.showSearchBar() }
        </div>
      )

      case 'AllQuizzes':
        return (
          <QuizzesPage />
        )

      case 'AuthForms':
        return (
          <AuthForms updateUserLogin={this.updateUserLogin}/>
        )
      case "QuizSession":
       return (
        <div>
          { this.showQuizSession() }
        </div>
      )
      default:

    }
  }

  render() {
    return (
      <div className="App">
        <NavBar navPage={this.navPage}
                username={this.state.username}
          />
        { this.getView() }
      </div>
    );
  }
}

export default App;
