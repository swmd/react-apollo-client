import {
  START_LOADING,
  FINISH_LOADING,
  LOGIN,
  REGISTER,
  LOGOUT,
} from '../constants';

export const startLoading = () => ({
  type: START_LOADING,
});

export const finishLoading = () => ({
  type: FINISH_LOADING,
});

export const logout = () => ({
  type: LOGOUT,
});

export const login = data => ({
  type: LOGIN,
  payload: data,
});

export const signup = user => ({
  type: REGISTER,
  payload: user,
});
