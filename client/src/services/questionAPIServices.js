import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

async function getAllQuestionsByQuiz(id) {
  const response = await axios.get(`${BASE_URL}/quizzes/${id}/questions`);
  return response.data;
}


export {
  getAllQuestionsByQuiz,
}
