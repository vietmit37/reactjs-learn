import React from "react";
import "./style.css";
import { useMagicColor } from "./useMagicColor";

export default function Circle() {
  const color = useMagicColor();

  return (
    <div
      className="square"
      style={{ borderRadius: "50%", backgroundColor: color }}
    >
      Circle
    </div>
  );
}
