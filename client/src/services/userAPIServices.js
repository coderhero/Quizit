import axios from 'axios';

const BASE_URL = 'https://nameless-earth-72847.herokuapp.com/api';
async function login(credentials) {
  try {
    // use post as the verb
    const token = await axios.post(`${BASE_URL}/user_token`,
      {
        "auth": credentials
      });
      return token.data
  } catch (e) {

  }
}
async function fetchUserQuiz(userid) {
  try {
    const resp = await axios.get(`${BASE_URL}/users/${userid}/quizzes`)
    return resp.data
  } catch (e) {

  }
}

export {
  login,
  fetchUserQuiz,

}
