import { ADD_USER_FAIL, ADD_USER_REQUEST, ADD_USER_SUCCESS } from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const KEY_ADD_USER = "addUserReducer";

export const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case ADD_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
