import React, { useRef } from "react";
import Child1 from "./Child1";

const Parent1 = () => {
  const childRef = useRef();
  return (
    <div>
      <button onClick={() => childRef.current.focus()}>
        Focus Child Input
      </button>
      <Child1 ref={childRef} />
    </div>
  );
};

export default Parent1;
