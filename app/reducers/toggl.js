import { LOGIN_SUCCESS, LOGOUT } from '../actions/toggl';

const initialState = {
  apiToken: null,
  isLogged: false,
  projects: null,
  timeEntries: null,
};

export const toggl = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        apiToken: action.payload.data.api_token,
        isLogged: true,
        projects: action.payload.data.projects,
        timeEntries: action.payload.data.time_entries
      };
    case LOGOUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
