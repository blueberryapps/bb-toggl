import { LOGIN_SUCCESS } from '../actions/toggl';

const initialState = {
  apiToken: null,
  isLogged: false,
  response: null,
};

export const toggl = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        apiToken: action.payload.data.api_token,
        isLogged: true,
        response: action.payload
      };
    default:
      return state;
  }
};
