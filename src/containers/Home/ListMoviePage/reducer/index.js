import {
  FETCH_MOVIE,
  FETCH_MOVIE_FAIL,
  FETCH_MOVIE_SUCCESS,
} from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };

    case FETCH_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return { ...state };
  }
};
export default filmReducer;
