
function scoreForCorrect(answerDuration, numberOfTry) {
  if (numberOfTry === 1) {
    if (answerDuration <= 5) {
      return 500
    } else if(answerDuration > 5 && answerDuration <= 10) {
      return 400
    } else if(answerDuration > 10 && answerDuration <= 15) {
      return 300
    } else {
      return 250
    }
  } else if (numberOfTry === 2) {
    if (answerDuration <= 5) {
      return 220
    } else if(answerDuration > 5 && answerDuration <= 10) {
      return 180
    } else if(answerDuration > 10 && answerDuration <= 15) {
      return 120
    } else {
      return 60
    }
  }
}
