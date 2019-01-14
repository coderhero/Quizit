# Quizit
- an education quiz app
- flat, simple and colorful UI design

## Technical Stacks
- React, Ruby on Rails

## user story
### users (work in progress)
- Register/Login
- one account username: aa, email: aa@gmail.com password: aa
- After Login, user can create a quiz including multiple questions
- Each question has maximum four options and only one is correct
- Able to add edit and delete quiz, questions and answers

### participants/attendee
- Join a quiz by entering the quiz name
- try search React as it's the one complete quiz inside the database
- each question takes 20 seconds countdown (work in progress)
- after student has selected answer or time is up, the message page
 shows if student answer it right or wrong
- if the first choice is wrong, participant is offered the second chance
- after student finishes the quiz, results are rendered

## students scoring calculation system (work in progress)
## total points
### in the first try if answer is correct, points awarded depend on response time
 | response time | points awarded |
 | ------------- | -------------- |
 |    <= 5s      |      500       |
 |   5s to 10s   |      420       |
 |  10s to 15s   |      360       |
 |  15s to 20s   |      280       |

### in the second try if answer is correct
 | response time | points awarded |
 | ------------- | -------------- |
 |    <= 5s      |      240       |
 |   5s to 10s   |      180       |
 |  10s to 15s   |      120       |
 |  15s to 20s   |       60       |
