// @flow
export const LOAD_INIT_DATA = 'LOAD_INIT_DATA';
export const LOAD_INIT_DATA_ERROR = 'LOAD_INIT_DATA_ERROR';
export const LOAD_INIT_DATA_SUCCESS = 'LOAD_INIT_DATA_SUCCESS';

export const loadInitialData = () => {
  const token = '07a76def6edd1dfa079f811115ca25f3';
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${new Buffer(`${token}:api_token`, 'utf8').toString('base64')}`
    },
  };

  return {
    type: LOAD_INIT_DATA,
    payload: fetch('https://www.toggl.com/api/v8/me?with_related_data=true', options)
      .then(async (r) => {
        const response = await r.json();
        return response;
      })
  };
};
