export const LOGIN = 'LOGIN';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const TRACKING_START = 'TRACKING_START';

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

export const startTracking = (apiToken, trackingDetails) => {
  const options = {
    body: trackingDetails,
    method: 'POST',
    headers: {
      Authorization: `Basic ${new Buffer(`${apiToken}:api_token`, 'utf8').toString('base64')}`
    },
  };

  return {
    type: TRACKING_START,
    payload: fetch('https://www.toggl.com/api/v8/time_entries/start', options)
  };
};
