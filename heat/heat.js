import { HeatConfigFile } from "../heat/heatconfig.js";
import { Solve2D } from "../heat/solve2D.js";
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
  constructor(nRows,nCols,dx,dy,xStart,yStart,alpha) {
  this.#shape = [nRows, nCols];
  this.#spacing = [dy, dx];
  this.#origin = [yStart, xStart];
  this.#alpha = alpha;
  this.#time = 0.0;

  var minSpacing = Math.min(dy, dx);
  this.#timeStep = Math.pow(minSpacing, 2.0) / (4.0 * this.alpha);

  // Initialize plate temperature.
  const M = nRows, N = nCols;
 
    var arr = new Array(M);            // create an empty array of length `M`
    for (var i = 0; i < M; i++) {
        arr[i] = new Array(N);        // make each element an array
    }
  this.#temperature = arr;
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
 * A helper method for returning parameters read from a model configuration
 * file. This is a workaround for requiring "this()" to be the first statement
 * in a constructor.
 */
   #config(fileName) {
  let h = new HeatConfigFile(fileName);
  return h.load();
}

/**
 * <p>Getter for the field <code>shape</code>.</p>
 *
 * @return a {@link java.util.List} object.
 */
    getShape() {
  return this.#shape;
}

/**
 * <p>Setter for the field <code>shape</code>.</p>
 *
 * @param shape a {@link java.util.List} object.
 */
    setShape(shape) {
    this.#shape = shape;
}

/**
 * <p>Getter for the field <code>spacing</code>.</p>
 *
 * @return a {@link java.util.List} object.
 */
    getSpacing() {
  return this.#spacing;
}

/**
 * <p>Setter for the field <code>spacing</code>.</p>
 *
 * @param spacing a {@link java.util.List} object.
 */
    setSpacing(spacing) {
    this.#spacing = spacing;
}

/**
 * <p>Getter for the field <code>origin</code>.</p>
 *
 * @return a {@link java.util.List} object.
 */
    getOrigin() {
  return this.#origin;
}

/**
 * <p>Setter for the field <code>origin</code>.</p>
 *
 * @param origin a {@link java.util.List} object.
 */
    setOrigin(origin) {
    this.#origin = origin;
}

/**
 * <p>Getter for the field <code>alpha</code>.</p>
 *
 * @return a {@link java.lang.Double} object.
 */
    getAlpha() {
  return this.#alpha;
}

/**
 * <p>Setter for the field <code>alpha</code>.</p>
 *
 * @param alpha a {@link java.lang.Double} object.
 */
    setAlpha(alpha) {
    this.#alpha = alpha;
}

/**
 * <p>Getter for the field <code>time</code>.</p>
 *
 * @return a {@link java.lang.Double} object.
 */
    getTime() {
  return this.#time;
}

/**
 * <p>Setter for the field <code>time</code>.</p>
 *
 * @param time a {@link java.lang.Double} object.
 */
    setTime(time) {
    this.#time = time;
}

/**
 * <p>Getter for the field <code>timeStep</code>.</p>
 *
 * @return a {@link java.lang.Double} object.
 */
    getTimeStep() {
  return this.#timeStep;
}

/**
 * <p>Setter for the field <code>timeStep</code>.</p>
 *
 * @param timeStep a {@link java.lang.Double} object.
 */
    setTimeStep(timeStep) {
    this.#timeStep = timeStep;
}

/**
 * <p>Getter for the field <code>temperature</code>.</p>
 *
 * @return an array of double.
 */
    getTemperature() {
  return this.#temperature;
}

/**
 * <p>Setter for the field <code>temperature</code>.</p>
 *
 * @param temperature an array of double.
 */
   setTemperature(temperature) {
    this.#temperature = temperature;
}


 deepCopy(arr) {
    let copy = [];
    arr.forEach(elem => {
      if(Array.isArray(elem)){
        copy.push(this.deepCopy(elem))
      }else{
        if (typeof elem === 'object') {
          copy.push(this.deepCopyObject(elem))
      } else {
          copy.push(elem)
        }
      }
    })
    return copy;
  }
  // Helper function to deal with Objects
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
  this.#temperature = Solve2D.solve(copy,this.#shape, this.#spacing, this.#alpha, this.#timeStep);
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
