export const LOGGED_IN = 'LOGGED_IN';

export const loggedIn = userInfo => ({
  type: LOGGED_IN,
  userInfo
});
