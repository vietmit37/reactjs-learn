import { api } from "utils/apiUtils";
import { ADD_USER_FAIL, ADD_USER_REQUEST, ADD_USER_SUCCESS } from "./constants";

export const actAddUserAPI = (user) => {
  return async (dispatch) => {
    dispatch(actAddUserRequest());
    try {
      let { status, data } = await api.post(
        "QuanLyNguoiDung/ThemNguoiDung",
        user
      );
      if (status === 200) {
        console.log(data);
        dispatch(actAddUserSuccess(data));
      }
    } catch (err) {
      console.log(err);
      dispatch(actAddUserFail(err));
    }
  };
};

const actAddUserRequest = () => {
  return {
    type: ADD_USER_REQUEST,
  };
};
const actAddUserSuccess = (data) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: data,
  };
};
const actAddUserFail = (error) => {
  return {
    type: ADD_USER_FAIL,
    payload: error,
  };
};
