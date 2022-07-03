import {
  DETAIL_MOVIE_FAIL,
  DETAIL_MOVIE_REQUEST,
  DETAIL_MOVIE_SUCCESS,
} from "./constant";
import { api } from "utils/apiUtils";

export const actFecthData = (id) => {
  return (dispatch) => {
    dispatch(actMovieRequest());

    api
      .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(actMovieSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actMovieFail(error));
      });
  };
};

const actMovieRequest = () => {
  return {
    type: DETAIL_MOVIE_REQUEST,
  };
};
const actMovieSuccess = (data) => {
  return {
    type: DETAIL_MOVIE_SUCCESS,
    payload: data,
  };
};
const actMovieFail = (error) => {
  return {
    type: DETAIL_MOVIE_FAIL,
    payload: error,
  };
};
