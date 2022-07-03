import React from "react";
import { useSpring, animated } from "react-spring";
export default function DemoReactSpring() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  const changeColor = useSpring({
    color_text: "red",
    from: { color_text: "blue", config: { duration: 1000 } },
  });
  const propsAnimatedNumber = useSpring({
    num: 500,
    // bỏ số thập phân
    color: "red",
    from: { num: 0, color: "blue" },
    config: { duration: 5000, precision: 0.1 },
  });
  console.log(propsAnimatedNumber.num);
  return (
    <div>
      <animated.div style={props}>I will fade in</animated.div>;
      <animated.h1 style={{ color: propsAnimatedNumber.color }}>
        {Math.round(propsAnimatedNumber.num)}
      </animated.h1>
      <animated.h5 style={{ fontSize: propsAnimatedNumber.num }}>2</animated.h5>
    </div>
  );
}
