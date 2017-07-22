// @flow
export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = () => {
  const token = '07a76def6edd1dfa079f811115ca25f3';
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${new Buffer(`${token}:api_token`, 'utf8').toString('base64')}`
    },
  };

  return {
    type: LOGIN,
    payload: fetch('https://www.toggl.com/api/v8/me?with_related_data=true', options)
      .then(async (r) => {
        const response = await r.json();
        return response;
      })
  };
};
