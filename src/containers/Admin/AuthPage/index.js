import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { KEY_AUTH } from "./reducers";
import { actLogin } from "./reducers/actions";
import { useNavigate, Navigate } from "react-router-dom";

export default function AuthPage() {
  const [state, setState] = useState({ taiKhoan: "", matKhau: "" });
  const viewAuth = useSelector((state) => state[KEY_AUTH]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef(state);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    ref.current[name] = value;
  };
  const renderNotifi = () => {
    const { error } = viewAuth;
    return (
      error && <div className="text-danger">{error.response.data.content}</div>
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actLogin(state, navigate));
    console.log(state);
  };
  if (viewAuth.loading) return <h1>sdasdasd</h1>;
  if (localStorage.getItem("UserAdmin"))
    return <Navigate replace to="/admin" />;
  console.log("render");

  return (
    <div className="container">
      <h1>LOgin</h1>
      <div className="row">
        <div className="col-6 mx-auto ">
          {renderNotifi()}
          <form
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
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
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
