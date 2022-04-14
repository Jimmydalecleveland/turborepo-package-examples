import * as React from "react";
import get from "./get";

const obj = {
  a: {
    b: {
      c: "nested value",
    },
  },
};

function BigComponent() {
  console.log("BigComponent was called");
  const value = get(obj, "a.b.c") || "no value";
  return <p>{value}</p>;
}

export default BigComponent;
