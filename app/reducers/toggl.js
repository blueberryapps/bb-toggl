import { LOAD_INIT_DATA_SUCCESS } from '../actions/toggl';

export const toggl = (state = {}, action) => {
  switch (action.type) {
    case LOAD_INIT_DATA_SUCCESS:
      return {
        ...state,
        response: action.payload
      };
    default:
      return state;
  }
};
