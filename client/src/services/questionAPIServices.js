import axios from 'axios';
import { BASE_URL } from './BASEURLServices.js'

async function getAllQuestionsByQuiz(id) {
  const response = await axios.get(`${BASE_URL}/quizzes/${id}/questions`);
  return response.data;
}


export {
  getAllQuestionsByQuiz,
}
