import React, { Component } from "react";
import { Outlet } from "react-router-dom";

export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        PageNotFound
        <Outlet />
      </div>
    );
  }
}
