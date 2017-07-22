import { LOGGIN_IN, LOGGIN_OUT } from '../actions/layout';

export const initialState = {
  isLoggin: true
};

export const layout = (state = initialState, action) => {
  switch (action.type) {
    case LOGGIN_IN:
      return {
        ...state,
        isLoggin: true
      };
    case LOGGIN_OUT:
      return {
        ...state,
        isLoggin: false
      };
    default:
      return state;
  }
};
