import React, { Component } from "react";
import { Link } from "react-router-dom";

class Movie extends Component {
  render() {
    const { tenPhim, hinhAnh, maPhim } = this.props.danhSachPhim;

    return (
      <div className="col-3 mt-3">
        <div className="card">
          <img className="card-img-top" src={`${hinhAnh}`} alt="123" />
          <div className="card-body">
            <h4 className="card-title">{tenPhim}</h4>
            <Link className="btn btn-success" to={`/detail/${maPhim}`}>
              {" "}
              Detail
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
