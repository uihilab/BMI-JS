const BmiHeat = require("../heat/bmiheat.js");

let delta;
let varName;
let gridSize;
let initialTemp;

beforeAll(() => {
  delta = 0.1;
  varName = "plate_surface__temperature";
  gridSize = 48;
  initialTemp = 0.0;
});

let bmi = new BmiHeat();
bmi.initialize("../data/heat.json");

describe("get_value", () => {
  let varCpy1 = new Array(gridSize);
  let varCpy2 = new Array(gridSize);

  let a1 = bmi.get_value(varName, varCpy1);
  let a2 = bmi.get_value(varName, varCpy2);

  test("test that they are not same", () => {
    expect(a1).not.toBe(a2);
  });
});
