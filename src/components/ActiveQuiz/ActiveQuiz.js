import React from 'react';
import classes from './ActiveQuiz.scss';
import AnswerList from './AnswersList/AnswersList';

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>{props.answerNumber}.&nbsp;</strong>
        {props.question}
      </span>
      <small>{props.answerNumber} из {props.quizLength}</small>
    </p>


    <AnswerList
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
    />
  </div>
);

export default ActiveQuiz;
