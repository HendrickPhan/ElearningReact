import {
    LOGGED_IN
  } from './index';
  

const initialState = {
    loggedIn: false,
    userInfo: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
      case LOGGED_IN:
        return {
          ...state,
          loggedIn: true,
          userInfo: action.userInfo,
        };
      default:
        return state;
    }
  }
  