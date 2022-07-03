import React from "react";
import Circle from "./circle";
import Square from "./square";

export default function CustomHook() {
  return (
    <div>
      <h3>CustomHook</h3>
      <Square />
      <Circle />
    </div>
  );
}
