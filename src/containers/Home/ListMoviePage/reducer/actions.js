import * as CONSTANTS from "./constants";
import { api } from "utils/apiUtils";

export const actFetchData = () => {
  return (dispatch) => {
    dispatch(actFetchMovie());

    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
      .then((result) => {
        dispatch(actFetchMovieSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actFetchMovieFail(error));
      });
  };
};
const actFetchMovie = () => {
  return {
    type: CONSTANTS.FETCH_MOVIE,
  };
};
const actFetchMovieSuccess = (data) => {
  return {
    type: CONSTANTS.FETCH_MOVIE_SUCCESS,
    data,
  };
};
const actFetchMovieFail = (error) => {
  return {
    type: CONSTANTS.FETCH_MOVIE_FAIL,
    error,
  };
};
