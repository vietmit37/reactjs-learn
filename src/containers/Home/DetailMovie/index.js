import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { KEY_DETAIL } from "./reducer";
import { actFecthData } from "./reducer/actions";

export default function DetailMovie() {
  const params = useParams();
  const view = useSelector((state) => state[KEY_DETAIL]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFecthData(params.id));
  }, []);
  if (view.loading) return <div>...loading</div>;

  return (
    <div>
      <h1>DetailMovie</h1>
      <h3>{view.data?.tenPhim}</h3>
    </div>
  );
}
