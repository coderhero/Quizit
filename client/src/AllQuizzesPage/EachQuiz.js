import React from 'react';
import { Button } from 'reactstrap';
import './EachQuiz.css';

export default function EachQuiz(props) {
  return (
    <div className="each-quiz">
      <span>{props.title}</span>
      <Button color="primary"
              id={props.id}
              onClick={props.enterQuizSession}

      >Enter</Button>
    </div>
  )
}
