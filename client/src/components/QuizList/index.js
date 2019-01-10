import React from 'react';
import QuestionAnswerBundle from '../QuestionAnswerBundle';

export default function QuizList(props) {

  return (
    <div>
      {props.questions.map(
        (question, index) => (
          <QuestionAnswerBundle key={question.id}
                                question={question}
                                answers={props.answers[index]}
          />
        )
      )}
    </div>
  )
}
