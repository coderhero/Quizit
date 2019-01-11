import React from 'react';
import EachAnswer from './EachAnswer'
export default function QuestionAnswerBundle(props) {
  return (
    <div>
      <h2>{props.question.title}</h2>
      <div>
        {props.answers.map(answer => {
          return <EachAnswer key={answer.id}
                             id={answer.id}
                             answer={answer.answer}
                             handleDelete={props.handleDelete}/>
        })}
      </div>
    </div>
  )
}
