export const LOGGIN_IN = 'LOGGIN_IN';
export const LOGGIN_OUT = 'LOGGIN_OUT';

export const loginIn = () => {
  return {
    type: LOGGIN_IN
  };
};

export const loginOut = () => {
  return {
    type: LOGGIN_OUT
  };
};
