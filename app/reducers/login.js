import { LOGIN_SUCCESS } from '../actions/login';

export const login = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        response: action.payload
      };
    default:
      return state;
  }
}
