import React, { Component } from 'react';
import classes from './Quiz.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends Component {

  state = {
    isFinished: true,
    activeQuestion: 0,
    answerState: null,
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

    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === 'success') {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {

      this.setState({
        answerState: { [answerId]: 'success' }
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinish()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }

        window.clearTimeout(timeout);
      }, 1000);

    } else {
      this.setState({
        answerState: { [answerId]: 'error' }
      })
    }
  }

  isQuizFinish() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className={classes.Quiz}>

        <div className={classes.QuizWrapper}>
          <h1>Ответьте на вопросы: </h1>

          {
            this.state.isFinished
              ? <FinishedQuiz />
              : <ActiveQuiz
                question={this.state.quiz[this.state.activeQuestion].qestion}
                onAnswerClick={this.onAnswerClickHandler}
                answers={this.state.quiz[this.state.activeQuestion].answers}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
          }

        </div>

      </div>
    )
  }
}

export default Quiz; 