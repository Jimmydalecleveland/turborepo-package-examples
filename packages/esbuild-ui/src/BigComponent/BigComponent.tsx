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
  const value = get(obj, "a.b.c") || "no value";
  return <p>{value}</p>;
}

export default BigComponent;
