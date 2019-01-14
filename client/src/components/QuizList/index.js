import React from 'react';
import QuestionAnswerBundle from '../QuestionAnswerBundle';

export default function QuizList(props) {

  return (
    <div>
      {props.questions.map(
        (question, index) => (
          <QuestionAnswerBundle key={question.id}
                                question={question}
                                questionid={question.id}
                                answers={props.answers[index]}
                                handleDelete={props.handleDelete}
                                handleAnswerCreate={props.handleAnswerCreate}
                                handleAnswerSubmit={props.handleAnswerSubmit}
                                answerCreate={props.answerCreate}
                                toCloseAnswer={props.toCloseAnswer}
                                fetchAll={props.fetchAll}
          />
        )
      )}
    </div>
  )
}
