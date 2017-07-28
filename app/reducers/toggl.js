import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, LOGIN_START, TRACKING_START_SUCCESS, TRACKING_STOP_SUCCESS } from '../actions/toggl';
import { getDayInDateFormat } from '../utils/helpers';

export type TogglState = {
  apiToken: ?string,
  clients: Array<Client>,
  isLogged: boolean,
  response: any,
  isLoading: boolean,
  wasLoaded: boolean,
  error: boolean,
  projects: Array<Project>,
  timeEntries: GrouppedTimeEntries
};

export type Client = {
  id: number,
  wid: number,
  name: string,
  at: string
};

export type GrouppedTimeEntries = {
  [date: string]: GrouppedTimeEntry
};

export type GrouppedTimeEntry = {
  totalTime: number,
  entries: Array<TimeEntry>
};

export type TimeEntry = {
  id: number,
  guid?: string,
  wid: number,
  pid?: number,
  billable: boolean,
  start: string,
  stop?: string,
  duration: number,
  description?: string,
  duronly: boolean,
  at: string,
  uid: number
};

export type Project = {
  id: number,
  wid: number,
  name: ?string,
  billable: boolean,
  is_private: boolean,
  active: boolean,
  template: boolean,
  at: string,
  created_at: string,
  color: string,
  auto_estimates: boolean,
  hex_color: string
};

const initialState:TogglState = {
  apiToken: null,
  clients: [],
  isLogged: false,
  response: null,
  isLoading: false,
  wasLoaded: false,
  error: false,
  projects: [],
  timeEntries: {},
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
        apiToken: action.payload.apiToken,
        clients: action.payload.clients,
        isLogged: true,
        isLoading: false,
        wasLoaded: true,
        response: action.payload,
        projects: action.payload.projects,
        timeEntries: action.payload.timeEntries
      };
    case LOGIN_ERROR:
      return {
        ...initialState,
        error: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        wasLoaded: false,
        error: false,
        apiToken: null
      };
    case TRACKING_START_SUCCESS: {
      let currentDay = state.timeEntries[getDayInDateFormat(action.payload.at)];

      if (!currentDay) {
        currentDay = {
          entries: [],
          totalTime: 0
        };
      }

      return {
        ...state,
        timeEntries: {
          ...state.timeEntries,
          [getDayInDateFormat(action.payload.at)]: {
            ...currentDay,
            entries: [
              ...currentDay.entries,
              action.payload
            ]
          }
        }
      };
    }
    case TRACKING_STOP_SUCCESS: {
      const currentDay = state.timeEntries[getDayInDateFormat(action.payload.at)];

      return {
        ...state,
        timeEntries: {
          ...state.timeEntries,
          [getDayInDateFormat(action.payload.at)]: {
            ...currentDay,
            entries: [
              ...(currentDay.entries.filter((e) => e.id !== action.payload.id)),
              action.payload,
            ]
          }
        }
      };
    }
    default:
      return state;
  }
};
