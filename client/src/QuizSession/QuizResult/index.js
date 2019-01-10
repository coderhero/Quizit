import React from 'react';

export default function QuizResult(props) {
  return (
    <div>
       Congratulation {props.tester}! You have finished this Challenge. You make
        {props.totalCorrect} out of {props.totalAnswer}
        your final score is {props.score}
    </div>
  )
}
