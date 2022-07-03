import { useEffect, useState } from "react";

function useMagicColor() {
  const [state, setState] = useState("yellow");
  useEffect(() => {
    const interval = setInterval(() => {
      let newColor = Math.floor(Math.random() * 999999);
      setState(`#${newColor}`);
      return () => {
        clearInterval(interval);
      };
    }, 1000);
  }, []);
  return state;
}
export { useMagicColor };
