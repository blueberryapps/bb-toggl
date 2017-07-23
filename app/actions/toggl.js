export const LOGIN = 'LOGIN';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const TRACKING_START = 'TRACKING_START';
export const TRACKING_START_SUCCESS = 'TRACKING_START_SUCCESS';
export const TRACKING_STOP = 'TRACKING_STOP';

export const login = (username, password) => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${new Buffer(`${username}:${password}`, 'utf8').toString('base64')}`
    },
  };

  return {
    type: LOGIN,
    payload: fetch('https://www.toggl.com/api/v8/me?with_related_data=true', options)
      .then((r) => r.json())
  };
};

export const logout = () => ({
  type: LOGOUT
});

export const startTracking = (trackingDetails) => ({ getState }) => {
  const options = {
    body: JSON.stringify({
      time_entry: {
        description: '',
        tags: null,
        created_with: 'bb_toggl',
        ...trackingDetails
      }
    }),
    method: 'POST',
    headers: {
      Authorization: `Basic ${new Buffer(`${getState().toggl.apiToken}:api_token`, 'utf8').toString('base64')}`,
      'Content-Type': 'application/json',
    },
  };

  return {
    type: TRACKING_START,
    payload: fetch('https://www.toggl.com/api/v8/time_entries/start', options)
      .then(async (r) => {
        const { data } = await r.json();
        return data;
      })
  };
};

export const stopTracking = (timeEntryId) => ({ getState }) => {
  const options = {
    method: 'PUT',
    headers: {
      Authorization: `Basic ${new Buffer(`${getState().toggl.apiToken}:api_token`, 'utf8').toString('base64')}`,
      'Content-Type': 'application/json',
    },
  };

  return {
    type: TRACKING_STOP,
    payload: fetch(`https://www.toggl.com/api/v8/time_entries/${timeEntryId}/stop`, options)
      .then(async (r) => {
        const { data } = await r.json();
        return data;
      })
  };
};
