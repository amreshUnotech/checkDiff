import { LOGIN, LOGOUT, SET_REFRESH_TOKEN, SET_AUTH_TOKEN } from './authActions';

const defaultState = {
  authToken: null,
  refreshToken: null,
  user: null
};

const resetState = {
  form: null,
  auth: null,
  userProfileReducer: null,
  snackbarReducer:null,
  inboxReducer:null,
  applcationReducer:null,
  settingsReducer:null,
  welcomeReducer:null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user
      };

    case SET_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.token
      };

    case SET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.token
      };

    case LOGOUT:
      return {...resetState}

    default:
      return state;
  }
};


export const getCurrentUserFromState = state => state.auth.user
export const getAuthTokenFromState = state => state.auth.authToken
export const getRefreshTokenFromState = state => state.auth.refreshToken