export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

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
