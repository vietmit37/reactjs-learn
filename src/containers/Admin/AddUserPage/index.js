import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actAddUserAPI } from "./reducers/actions";

export default function AddUSerPage() {
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
  });
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actAddUserAPI(state));
  };

  return (
    <div className="container">
      <h1>Them nguoi dung</h1>
      <div className="row">
        <div className="col-6 mx-auto ">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>UserName</label>
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="matKhau"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="hoTen"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label>email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                name="soDt"
                onChange={handleOnChange}
              />
            </div>
            <button className="btn btn-success">Add user</button>
          </form>
        </div>
      </div>
    </div>
  );
}
