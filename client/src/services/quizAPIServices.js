import axios from 'axios';

const BASE_URL = 'https://nameless-earth-72847.herokuapp.com/api';
async function getAllQuizzes() {
  const resp = await axios.get(`${BASE_URL}/quizzes`);
  return resp.data;
}
async function getOneQuiz(quizid) {
  const resp = await axios.get(`${BASE_URL}/quizzes/${quizid}`)
  return resp.data;
}

async function getQuizQuestions(quizid) {
  const resp = await axios.get(`${BASE_URL}/quizzes/${quizid}/questions`)
  return resp.data;
}

export {
  getAllQuizzes,
  getOneQuiz,
  getQuizQuestions,
}
