# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Answer.destroy_all
Question.destroy_all
Quiz.destroy_all
User.destroy_all

# User seed creation
@user_1 = User.create(
  username: 'yan',
  email: 'yy@gmail.com',
  password: 'yy',
  password_confirmation: 'yy'
)
@user_2 = User.create(
  username: 'gg',
  email: 'gg@gmail.com',
  password: 'gg',
  password_confirmation: 'gg'
)
# Quiz creation
@react_quiz = @user_1.quizzes.create(
  title: 'React Quiz',
  description: 'Welcome to test your react knowledge'
)
# Question_1 creation
@question_1 = @react_quiz.questions.create(
  title: 'Which is first invoked in React Life Cycle?',
  timer: 10
)
# Answers creation
@answer_1 = @question_1.answers.create(
  answer: 'componentDidMount',
  correct: false
)
@answer_2 = @question_1.answers.create(
  answer: 'componentWillMount',
  correct: false
)
@answer_3 = @question_1.answers.create(
  answer: 'render',
  correct: false
)
@answer_4 = @question_1.answers.create(
  answer: 'getDefaultProp',
  correct: true
)
# Question_2 creation
@question_2 = @react_quiz.questions.create(
  title: 'What happens when you call setState() inside render() method?',
  timer: 10
)
@answer_5 = @question_2.answers.create(
  answer: 'Stack overflow error',
  correct: true
)
@answer_6 = @question_2.answers.create(
  answer: 'Duplicate key error',
  correct: false
)
@answer_7 = @question_2.answers.create(
  answer: 'Repetitive output appears on the screen',
  correct: false
)
@answer_8 = @question_2.answers.create(
  answer: 'Nothing happens',
  correct: false
)
@question_3 = @react_quiz.questions.create(
  title: 'Which method in a React Component should you override to stop the component from updating?',
  timer: 10
)
@answer_9 = @question_3.answers.create(
  answer: 'componentDidMount',
  correct: false
)
@answer_10 = @question_3.answers.create(
  answer: 'componentDidUpdate',
  correct: false
)
@answer_11 = @question_3.answers.create(
  answer: 'willComponentUpdate',
  correct: false
)
@answer_12 = @question_3.answers.create(
  answer: 'shouldComponentUpdate',
  correct: true
)
