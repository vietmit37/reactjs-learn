import { AUTH_FAIL, AUTH_REQUEST, AUTH_SUCCESS } from "./constants";

export const KEY_AUTH = "authReducer";
const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};
