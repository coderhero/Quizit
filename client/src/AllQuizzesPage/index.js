import React from 'react';
import EachQuiz from './EachQuiz';
import "./index.css"

 class QuizzesPage extends React.Component {
   constructor(props) {
     super(props);
   }
   render() {
    return (
      <div>
        {this.props.totalQuizzes.map(quiz => (
          <EachQuiz key={quiz.id}
                    id={quiz.id}
                    title={quiz.title}
                    className="each-quiz"
                    />
        ))}
      </div>
    )
  }
}
export default QuizzesPage;
