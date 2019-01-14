import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Profile from './Profile'
import { login } from '../services/userAPIServices';

export default class AuthForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: '',
        email: '',
        password: ''
      },
      userid: 0
    }
  }


  handleLoginSubmit = async e => {
    e.preventDefault();
    try {
      const tokenData = await login(this.state.credentials);
      localStorage.setItem('token', tokenData.jwt);
      this.props.updateUserLogin(this.state.credentials.username);
      this.setState({
        credentials: {
          username: '',
          email: '',
          password: ''
        }
      })
    } catch (e) {
      console.log(e.message)
    }

  }
  handleChange = e => {
   const {id, value} = e.target
   this.setState(prevState => (
     {
       credentials: {
         ...prevState.credentials,
         [id] : value
       }
     }
   ))
  }
  showProfilePage = () => {

  }
  showLoginForm = () => {

  }
  render() {

    return (
      <div>
        {this.props.redirectToProfile ?
          <Profile userid={this.state.userid} /> :
          <LoginForm handleLogin={this.handleLoginSubmit}
                     handleChange={this.handleChange}
                     login={this.state.credentials}
          />}
      </div>
    )
  }
}
