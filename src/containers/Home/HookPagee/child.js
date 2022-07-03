import React, { memo } from "react";

function Child(props) {
  console.log("Child");
  return (
    <div>
      Child
      <h3>{props.renderNoti()}</h3>
    </div>
  );
}
export default memo(Child);
