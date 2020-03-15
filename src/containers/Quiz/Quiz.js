import React, { Component } from 'react';
import classes from './Quiz.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {

  state = {
    activeQuestion: 0,
    quiz: [
      {
        id: 1,
        qestion: 'Какого цвета солнце?',
        rightAnswerId: 3,
        answers: [
          { text: 'Черное', id: 1 },
          { text: 'Синие', id: 2 },
          { text: 'Желтое', id: 3 },
          { text: 'Зеленое', id: 4 }
        ]
      },
      {
        id: 1,
        qestion: 'Выберите язык программирования?',
        rightAnswerId: 4,
        answers: [
          { text: 'Bootstrap', id: 1 },
          { text: 'HTML', id: 2 },
          { text: 'CSS', id: 3 },
          { text: 'JavaScript', id: 4 }
        ]
      }
    ]
  }

  onAnswerClickHandler = (answerId) => {
    console.log('answer Id:', answerId);

    this.setState({
      activeQuestion: this.state.activeQuestion + 1
    })
  }

  render() {
    return (
      <div className={classes.Quiz}>

        <div className={classes.QuizWrapper}>
          <h1>Ответьте на вопросы: </h1>
          <ActiveQuiz
            question={this.state.quiz[this.state.activeQuestion].qestion}
            onAnswerClick={this.onAnswerClickHandler}
            answers={this.state.quiz[this.state.activeQuestion].answers}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>

      </div>
    )
  }
}

export default Quiz;