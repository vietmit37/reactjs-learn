import {
  DETAIL_MOVIE_FAIL,
  DETAIL_MOVIE_REQUEST,
  DETAIL_MOVIE_SUCCESS,
} from "./constant";
export const KEY_DETAIL = "detailReducer";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DETAIL_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case DETAIL_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
