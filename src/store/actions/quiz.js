import axios from '../../axios/axios-quiz';
import { FETCH_QUIZES_START, FETCH_QUIZES_ERROR, FETCH_QUIZES_SUCCESS } from './actionTypes';

export function fetchQuizes() {
  return async dispatch => {

    dispatch(fetchQuizesStart());

    try {
      const res = await axios.get('/quizes.json');
      const quizes = [];

      Object.keys(res.data).forEach((key, index) => {

        console.log(res.data)
        quizes.push({
          id: key,
          name: `Тест №${index + 1}`
        });
      });
      dispatch(fetchQuizesSuccess(quizes));
    }
    catch (e) {
      dispatch(fetchQuizesError());
    }
  }
}

export function fetchQuizesStart() {
  return {
    type: FETCH_QUIZES_START
  }
}

export function fetchQuizesSuccess(quizes) {
  return {
    type: FETCH_QUIZES_SUCCESS,
    quizes
  }
}

export function fetchQuizesError(error) {
  return {
    type: FETCH_QUIZES_ERROR,
    error
  }
}