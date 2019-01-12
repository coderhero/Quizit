import axios from 'axios';

const BASE_URL = 'https://nameless-earth-72847.herokuapp.com/api';

async function getAllQuestionsByQuiz(id) {
  const response = await axios.get(`${BASE_URL}/quizzes/${id}/questions`);
  return response.data;
}


export {
  getAllQuestionsByQuiz,
}
