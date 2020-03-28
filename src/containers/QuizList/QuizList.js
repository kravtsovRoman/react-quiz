import React, { Component } from 'react';
import classes from './QuizList.scss';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class QuizList extends Component {

  state = {
    quizes: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('https://quiz-cb9c8.firebaseio.com/quizes.json');
      const quizes = [];

      Object.keys(res.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест №${index + 1}`
        });

        this.setState({
          quizes
        })
      });
    }
    catch (e) {
      console.log(e);
    }

  }

  renderQuizes() {
    return this.state.quizes.map(quiz => {
      return (
        <li key={quiz.id}>
          <NavLink to={'/quiz/' + quiz.id}>
            {quiz.name}
          </NavLink>
        </li>
      );
    })
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>

          <ul>
            {this.renderQuizes()}
          </ul>
        </div>
      </div>
    );
  }
}