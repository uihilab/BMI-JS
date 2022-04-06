import { HeatConfigFile } from "../heat/heatconfig.js";
import { Solve2D } from "../heat/solve2D.js";

/**
 * @class Heat
 */

export class Heat {

  #shape;
  #spacing;
  #origin;
  #alpha;
  #time;
  #timeStep;
  #temperature;


  /**
    * Create a new Heat model.
    *
    * @param nRows the number of rows in the solution grid
    * @param nCols the number of columns in the solution grid
    * @param dx distance between columns in grid
    * @param dy distance between rows in grid
    * @param xStart coordinates of lower left corner of grid
    * @param yStart coordinates of lower left corner of grid
    * @param alpha parameter in heat equation
    */
  constructor(nRows, nCols, dx, dy, xStart, yStart, alpha) {
    this.#shape = [nRows, nCols];
    this.#spacing = [dy, dx];
    this.#origin = [yStart, xStart];
    this.#alpha = alpha;
    this.#time = 0.0;

    var minSpacing = Math.min(dy, dx);
    this.#timeStep = Math.pow(minSpacing, 2.0) / (4.0 * this.alpha);

    /**
     *  Initialize plate temperature.
     */
    this.#temperature = this.create2DArray(nRows, nCols);
  }


  /**
   * 
   * @param {Number} row 
   * @param {Number} column 
   * @returns 2D Array of size [Row][Column]
   */
  create2DArray(row, column) {
    var arr = new Array(row);
    for (var i = 0; i < row; i++) {
      arr[i] = new Array(column);
    }
    return arr;
  }


  // /**
  //  * Create a Heat model using default parameter values.
  //  */
  // constructor() {
  //   this(8, 6, 1.0, 1.0, 0.0, 0.0, 1.0);
  // }

  // /**
  //  * Create a Heat model from settings in a file.
  //  *
  //  * @param fileName an XML file with Heat model settings
  //  */
  // constructor(fileName) {
  //   this(parseInt(config(fileName).get("nRows")),
  //   parseInt(config(fileName).get("nCols")),
  //       config(fileName).get("dx"),
  //       config(fileName).get("dy"),
  //       config(fileName).get("xStart"),
  //       config(fileName).get("yStart"),
  //       config(fileName).get("alpha"));
  // }

  /**
   * @private
   * @method #configFile
   * @memberof Heat
   * A helper method for returning parameters read from a model configuration
   * file. This is a workaround for requiring "this()" to be the first statement
   * in a constructor.
   */
  #config(fileName) {
    let h = new HeatConfigFile(fileName);
    return h.load();
  }

  /**
   * Getter for the field shape
   *
   * @return an array.
   */
  getShape() {
    return this.#shape;
  }

  /**
   * Setter for the field shape
   *
   * @param shape an array.
   */
  setShape(shape) {
    this.#shape = shape;
  }

  /**
   * Getter for the field spacing. 
   *
   * @return an array.
   */
  getSpacing() {
    return this.#spacing;
  }

  /**
   *  Setter for the field spacing. 
   *
   * @param spacing an array.
   */
  setSpacing(spacing) {
    this.#spacing = spacing;
  }

  /**
   *  Getter for the field origin. 
   *
   * @return an array..
   */
  getOrigin() {
    return this.#origin;
  }

  /**
   *  Setter for the field origin. 
   *
   * @param origin an array.
   */
  setOrigin(origin) {
    this.#origin = origin;
  }

  /**
   *  Getter for the field alpha. 
   *
   * @return a Number Object.
   */
  getAlpha() {
    return this.#alpha;
  }

  /**
   *  Setter for the field alpha. 
   *
   * @param alpha a Number Object.
   */
  setAlpha(alpha) {
    this.#alpha = alpha;
  }

  /**
   *  Getter for the field time. 
   *
   * @return a Number Object.
   */
  getTime() {
    return this.#time;
  }

  /**
   *  Setter for the field time.
   *
   * @param time a Number Object.
   */
  setTime(time) {
    this.#time = time;
  }

  /**
   *  Getter for the field timeStep . 
   *
   * @return a Number Object.
   */
  getTimeStep() {
    return this.#timeStep;
  }

  /**
   *  Setter for the field timeStep . 
   *
   * @param timeStep a Number Object.
   */
  setTimeStep(timeStep) {
    this.#timeStep = timeStep;
  }

  /**
   *  Getter for the field temperature . 
   *
   * @return a 2D array of Number.
   */
  getTemperature() {
    return this.#temperature;
  }

  /**
   *  Setter for the field temperature . 
   *
   * @param temperature a 2D array of Number.
   */
  setTemperature(temperature) {
    this.#temperature = temperature;
  }

  /**
     * Helper function to deal with array copying
     */
  deepCopy(arr) {
    let copy = [];
    arr.forEach(elem => {
      if (Array.isArray(elem)) {
        copy.push(this.deepCopy(elem))
      } else {
        if (typeof elem === 'object') {
          copy.push(this.deepCopyObject(elem))
        } else {
          copy.push(elem)
        }
      }
    })
    return copy;
  }

  /**
   * Helper function to deal with Objects
   */
  deepCopyObject(obj) {
    let tempObj = {};
    for (let [key, value] of Object.entries(obj)) {
      if (Array.isArray(value)) {
        tempObj[key] = this.deepCopy(value);
      } else {
        if (typeof value === 'object') {
          tempObj[key] = this.deepCopyObject(value);
        } else {
          tempObj[key] = value
        }
      }
    }
    return tempObj;
  }

  /**
   * Calculate new temperatures for the next time step.
   */
  advanceInTime() {
    let copy = this.deepCopy(this.#temperature);
    this.#temperature = Solve2D.solve(copy, this.#shape, this.#spacing, this.#alpha, this.#timeStep);
    this.#time += this.#timeStep;
  }
}


console.log("*\n* Example: Heat Model\n*");
let heat = new Heat(8, 6, 1.0, 1.0, 0.0, 0.0, 1.0);
console.log("shape: " + heat.getShape().toString());
console.log("spacing: " + heat.getSpacing().toString());
console.log("origin: " + heat.getOrigin().toString());

// Place impulse in termperature field.
let temp0 = heat.getTemperature();
temp0[3][2] = 100.0;
heat.setTemperature(temp0);

// Advance model over several time steps.
let currentTime = heat.getTime();
while (currentTime < 1.0) {
  console.log("time = " + currentTime.toString());
  console.log("temperature =");
  let temp = heat.getTemperature();
  for (let j = 0; j < (heat.getShape())[0]; j++) {
    for (let i = 0; i < (heat.getShape())[1]; i++) {
      console.log(temp[j][i]);
    }
    console.log("\n");
  }
  heat.advanceInTime();
  currentTime = heat.getTime();
}
