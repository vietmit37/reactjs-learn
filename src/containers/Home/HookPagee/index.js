import React, { useState, useEffect, useCallback, useMemo } from "react";
import Cart from "./cart";
import Child from "./child";
import CustomHook from "./custom-hook";
import DemoUseReducer from "./DemoUseReducer";

export default function HookPage() {
  const [number, setNumber] = useState(0);
  const [like, setLike] = useState(0);

  const listCart = [
    { id: 1, product: "SM" },
    { id: 2, product: "SM" },
  ];
  const listCartMemo = useMemo(() => listCart, []);

  useEffect(() => {
    console.log("componentDidMount");
  }, []);
  useEffect(() => {
    console.log("componentDidUpdate");
  }, [number]);

  //   willUnmount
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("first");
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const renderNoti = () => {
    return `So like la ${like}`;
  };
  const renderNotiCallback = useCallback(renderNoti, [like]);

  return (
    <div>
      <h1>HookPage</h1>
      <h4>Number: {number}</h4>
      <button className="btn btn-success" onClick={() => setNumber(number + 1)}>
        Click
      </button>
      <div>
        <h4>Like:{like}</h4>
        <button className="btn btn-info" onClick={() => setLike(like + 1)}>
          Click
        </button>
      </div>
      <hr />
      <Child renderNoti={renderNotiCallback} />
      <hr />
      <Cart listCart={listCartMemo} />
      <hr />
      <DemoUseReducer />
      <hr />
      <CustomHook />
    </div>
  );
}
