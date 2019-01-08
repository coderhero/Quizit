import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';
async function getAllQuizzes() {
  const resp = await axios.get(`${BASE_URL}/quizzes`);
  return resp.data;
}

export {
  getAllQuizzes
}
