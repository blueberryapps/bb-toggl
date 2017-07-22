// @flow
type actionType = {
  +type: string
};

export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = () => {
    const token = '4565377c99fdcacdc9069e5d397cc2cf';
    const options = {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${new Buffer(`${token}:api_token`, 'utf8').toString('base64')}`
        },
    };

    return {
      type: LOGIN,
      payload: fetch(`https://www.toggl.com/api/v8/me?with_related_data=true`, options)
        .then(async (r) => {
          const response = await r.json();
          return response;
        })
    };
}
