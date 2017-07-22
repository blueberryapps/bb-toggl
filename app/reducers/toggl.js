import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, LOGIN_START } from '../actions/toggl';

const initialState = {
  apiToken: null,
  isLogged: false,
  response: null,
  isLoading: false,
  wasLoaded: false,
  error: false
};

export const toggl = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS:
      return {
        ...state,
        apiToken: action.payload.data.api_token,
        isLogged: true,
        isLoading: false,
        wasLoaded: true,
        response: action.payload
      };
    case LOGIN_ERROR:
      return {
        ...initialState,
        error: true,
      };
    case LOGOUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
