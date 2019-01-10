
function scoreForCorrect(answerDuration, numberOfTry) {
  if (numberOfTry === 1) {
    if (answerDuration <= 5) {
      return 500
    } else if(answerDuration > 5 && answerDuration <= 10) {
      return 420
    } else if(answerDuration > 10 && answerDuration <= 15) {
      return 360
    } else {
      return 280
    }
  } else if (numberOfTry === 2) {
    if (answerDuration <= 5) {
      return 240
    } else if(answerDuration > 5 && answerDuration <= 10) {
      return 180
    } else if(answerDuration > 10 && answerDuration <= 15) {
      return 120
    } else {
      return 60
    }
  }
}
