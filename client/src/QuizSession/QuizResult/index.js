import React from 'react';


export default function QuizResult(props) {
  function dynamicGreat() {
    const accuracy = props.totalCorrect/props.totalAnswer;
    if (accuracy > 0.8) {
      return (<h2>Excellent Job! You passed this Challenge</h2>)
    } else if (accuracy > 0.6 && accuracy < 0.8) {
      return (<h2>Good Work! You passed this Challenge</h2>)
    } else if (accuracy < 0.6) {
      return (<h2>Unfortunately you failed this Challenge</h2>)
    }
  }
  function showResult() {

    return (
      <div>
        {dynamicGreat()}
        <h4>
          You make {props.totalCorrect} out of {props.totalAnswer} and Your final score is {props.score}
        </h4>
      </div>

    )
  }
  return (
    showResult()
  )
}
