import axios from 'axios';
import { BASE_URL } from './BASEURLServices.js';


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
