import * as React from "react";
import sideEffectTest from "./sideEffectTest";

function SideEffect() {
  console.log("SideEffect rendered");
  const result = sideEffectTest("testing");
  return <p>{result}</p>;
}

export default SideEffect;
