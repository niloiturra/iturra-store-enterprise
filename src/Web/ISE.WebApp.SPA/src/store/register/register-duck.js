import { createActions, createReducer } from 'reduxsauce';
import { registerState } from './register-model';

const INITIAL_STATE = registerState;

const register = (state = INITIAL_STATE, action) => {
  return { ...state };
};

export const { Types, Creators } = createActions({
  register: [],
  registerAsync: ['formValues'],
});

const HANDLERS = {
  [Types.REGISTER]: register,
};

export const registerReducer = createReducer(INITIAL_STATE, HANDLERS);
