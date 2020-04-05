import axios from 'axios';
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes';

export function auth(email, password, isLogin) {
  return async dispatch => {

    const authData = {
      email, password,
      returnSecureToken: true
    }

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCG0KdQZaIrfMCoxOioq1g4XZ1Ksboya_4';

    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCG0KdQZaIrfMCoxOioq1g4XZ1Ksboya_4';
    }

    const res = await axios.post(url, authData);

    const data = res.data;
    const experationDate = new Date(new Date().getTime() + data.expiresIn * 1000);

    localStorage.setItem('token', data.idToken);
    localStorage.setItem('userId', data.localId);
    localStorage.setItem('experationDate', experationDate);

    dispatch(authSuccess(data.idToken));
    dispatch(autoLogout(data.expiresIn));

  }
}

export function autoLogout(time) {
  return dispatch => {
    setTimeout(() => { dispatch(logout()) }, time * 1000);
  }
}

export function logout() {

  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('experationDate');

  return {
    type: AUTH_LOGOUT,

  }
}

export function autoLogin() {

}

export function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token
  }
}