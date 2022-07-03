import { api } from "utils/apiUtils";
import { AUTH_FAIL, AUTH_REQUEST, AUTH_SUCCESS } from "./constants";
export const actLogin = (user, navigate) => {
  return (dispatch) => {
    dispatch(actAuthRequest());

    api
      .post("QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        dispatch(actAuthSuccess(result.data.content));
        // check ma luong nguoi dung
        if (result.data.content.maLoaiNguoiDung === "KhachHang") {
          // Bao loi
          return Promise.reject({
            response: { data: { content: "Bạn không có quyền truy cập" } },
          });
        }
        // lưu thông tin vào localStorage
        localStorage.setItem("UserAdmin", JSON.stringify(result.data.content));

        // Redirect to /admin/dashboard
        navigate("/admin/dashboard", { replace: true });
      })
      .catch((error) => {
        dispatch(actAuthFail(error));
      });
  };
};
const actAuthRequest = () => {
  return {
    type: AUTH_REQUEST,
  };
};
const actAuthSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data,
  };
};
const actAuthFail = (error) => {
  return {
    type: AUTH_FAIL,
    payload: error,
  };
};
