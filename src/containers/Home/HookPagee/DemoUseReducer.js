import React, { useReducer } from "react";
const initialState = {
  number: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      console.log(state);
      return { number: state.number + 1 };
    case "decrement":
      return { number: state.number - 1 };
    default:
      return { ...state };
  }
};
export default function DemoUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>DemoUseReducer</h3>
      <button
        className="btn btn-danger"
        onClick={() => {
          dispatch({
            type: "decrement",
          });
        }}
      >
        -
      </button>
      <span>Number:{state.number}</span>
      <button
        className="btn btn-success"
        onClick={() => {
          dispatch({
            type: "increment",
          });
        }}
      >
        +
      </button>
    </div>
  );
}
