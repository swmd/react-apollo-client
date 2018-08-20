import {
  START_LOADING,
  FINISH_LOADING,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT,
} from "../constants";

const initialState = {
  loading: false,
  token: '',
  user: {},
  error: '',
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: {
          ...action.payload.user,
        },
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: {
          ...action.payload.user,
        },
      };
    case LOGOUT:
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
}
