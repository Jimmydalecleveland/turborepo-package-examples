console.log("sideEffectTest file");

function sideEffectTest(string: string) {
  console.log("inside sideEffectTest func");
  return "sideEffectResult with string: " + string;
}

export default sideEffectTest;
