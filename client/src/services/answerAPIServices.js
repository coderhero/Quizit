import axios from 'axios';
import { BASE_URL } from './BASEURLServices.js'

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

async function getQuestionAnswers(questionID) {
  const response = await axios.get(`${BASE_URL}/questions/${questionID}/answers`);
  return response.data;
}

async function deleteOneAnswer(answerID) {
  const response = await axios.delete(`${BASE_URL}/answers/${answerID}`)
}

async function createOneAnswer(questionID, answerData) {
  const response = await axios.post(`${BASE_URL}/questions/${questionID}/answers`,
    {
      "answer": {
        "answer": answerData.answer,
        "correct": answerData.correct
      }
    }
  );
}
export {
  getAllAnswersByQuestion,
  deleteOneAnswer,
  createOneAnswer,
}
