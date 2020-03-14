import React from 'react';
import classes from './ActiveQuiz.scss';
import AnswerList from './AnswersList/AnswersList';

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>1.&nbsp;</strong>
        What do you doing ?
      </span>
      <small>4 of 12</small>
    </p>


    <AnswerList
      answers={props.answers}
    />
  </div>
);

export default ActiveQuiz;
