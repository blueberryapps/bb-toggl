import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, LOGIN_START } from '../actions/toggl';

const initialState = {
  apiToken: null,
  clients: null,
  isLogged: false,
  response: null,
  isLoading: false,
  wasLoaded: false,
  error: false,
  projects: null,
  timeEntries: null,
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
        clients: action.payload.data.clients,
        isLogged: true,
        isLoading: false,
        wasLoaded: true,
        response: action.payload,
        projects: action.payload.data.projects,
        timeEntries: action.payload.data.time_entries
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
