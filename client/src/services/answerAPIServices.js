import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

async function getAllAnswersByQuestion(ids) {
  // have to use Promise.all or not gonna work
  const resp = Promise.all(ids.map(
    async id => {
      const answersForOneQ = await axios.get(`${BASE_URL}/questions/${id}/answers`);
      return answersForOneQ.data;
    }
  ))
  return resp;
}

async function getQuestionAnswers(questionid) {
  const response = await axios.get(`${BASE_URL}/questions/${questionid}/answers`);
  return response.data;
}

export {
  getAllAnswersByQuestion
}
