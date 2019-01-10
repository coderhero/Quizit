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
  username: 'aa',
  email: 'aa@gmail.com',
  password: 'aa',
  password_confirmation: 'aa'
)
@user_2 = User.create(
  username: 'gg',
  email: 'gg@gmail.com',
  password: 'gg',
  password_confirmation: 'gg'
)
@user_3 = User.create(
  username: 'bb',
  email: 'bb@gmail.com',
  password: 'bb',
  password_confirmation: 'bb'
)
# Quiz creation
@react_quiz = @user_1.quizzes.create(
  title: 'React Quiz',
  description: 'Welcome to Awesome React Challenge'
)
@question_1 = @react_quiz.questions.create(
  title: 'Everything in React is a _____')
@question_2 = @react_quiz.questions.create(
  title: 'What is Babel?'
)
@question_3 = @react_quiz.questions.create(
  title: 'What is NOT a feature of React?'
)
@question_4 = @react_quiz.questions.create(
  title: 'Which command do you use to run a local server and start react app?'
)
@question_5 = @react_quiz.questions.create(
  title: 'Which is first invoked in React Life Cycle?'
)
@question_6 = @react_quiz.questions.create(
  title: 'What happens when you call setState() inside render() method?'
)
@question_7 = @react_quiz.questions.create(
  title: 'Which method in a React Component should you override to stop the component from updating?'
)
@question_8 = @react_quiz.questions.create(
  title: 'In the MVC Model, React best represents the ___'
)
Answer.create([
  { answer: 'Module', correct: false, question:@question_1 },
  { answer: 'Component', correct: true, question:@question_1 },
  { answer: 'Package', correct: false, question:@question_1 },
  { answer: 'Class', correct: false, question:@question_1 },
  { answer: 'An Interpreter', correct: false, question:@question_2 },
  { answer: 'A Compiler', correct: true, question:@question_2 },
  { answer: 'A Text Editor ', correct: false, question:@question_2 },
  { answer: 'A programming language', correct: false, question:@question_2 },
  { answer: 'virtual DOM', correct: false, question:@question_3 },
  { answer: 'uni-directional data flow', correct: false, question:@question_3 },
  { answer: 'uses the virtual DOM', correct: false, question:@question_3 },
  { answer: 'easy state management', correct: true, question:@question_3 },
  { answer: 'npm start-react-app', correct: false, question:@question_4 },
  { answer: 'npm new app', correct: false, question:@question_4 },
  { answer: 'yarn start', correct: true, question:@question_4 },
  { answer: 'npm install', correct: false, question:@question_4 },
  { answer: 'componentDidMount', correct: false, question:@question_5 },
  { answer: 'componentDidUpdate', correct: false, question:@question_5 },
  { answer: 'componentWillMount', correct: false, question:@question_5 },
  { answer: 'getDefaultProp', correct: true, question:@question_5 },
  { answer: 'Stack overflow error', correct: true, question:@question_6},
  { answer: 'Duplicate key error', correct: false, question:@question_6},
  { answer: 'Repetitive output appears on the screen', correct: false, question:@question_6},
  { answer: 'No errors', correct: false, question:@question_6},
  { answer: 'shouldComponentUpdate', correct: true, question: @question_7 },
  { answer: 'componentDidMount', correct: false, question: @question_7 },
  { answer: 'willComponentUpdate', correct: false, question: @question_7 },
  { answer: 'componentDidUpdate', correct: false, question: @question_7 },
  { answer: 'M', correct: false, question:@question_8 },
  { answer: 'V', correct: true, question:@question_8 },
  { answer: 'C', correct: false, question:@question_8 },
  { answer: 'none of above', correct: false, question:@question_8 },


  ])

@ruby_quiz = @user_2.quizzes.create(
  title: 'Ruby Quiz',
  description: 'Welcome to test your Ruby Knowledge'
)
@question_ruby_1 = @ruby_quiz.questions.create(
  title: 'You need to send a value back to the code that called it (return a value to the caller). Which method can/should be used for this?',
  timer: 10
)
Answer.create([
    { answer: 'post', correct: false, question: @question_ruby_1 },
    { answer: 'send', correct: false, question: @question_ruby_1 },
    { answer: 'return', correct: true, question: @question_ruby_1 },
    { answer: 'json', correct: false, question: @question_ruby_1 }
  ])
