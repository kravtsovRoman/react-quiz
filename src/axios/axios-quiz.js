import axios from 'axios';

export default axios.create({
  baseURL: 'https://quiz-cb9c8.firebaseio.com/'
});