var nj1 = require('jsnumpy');
var nj2 = require('numjs');
const yaml = require('js-yaml');

/**
 * Solve the 2D Heat Equation on a uniform mesh.
 * @function solve_2d
 * @param {NdArray} temp - Temperature
 * @param {array_like} spacing - Grid spacing in the row and column directions
 * @param {NdArray} out - Output Array
 * @param {number} alpha - Thermal diffusivity
 * @param {number} time_step - Time step
 * @return {NdArray} - The temperatures after time *time_step*.
 * @example z0 = nj2.zeros([3, 3])
 *          z0.set(1,1,1.)
 *          console.log(solve_2d(z0, (1., 1.), alpha=.25),"solve")
 */

 function solve_2d(temp, spacing, out=null, alpha=1.0, time_step=1.0){
   
    dy2 = spacing[0] ** 2
    dx2 = spacing[1] ** 2
    var arr= nj2.array([[0.0, dy2, 0.0], [dx2, -2.0 * (dx2 + dy2), dx2], [0.0, dy2, 0.0]]);
    stencil = ( arr * alpha * time_step / (2.0 * (dx2 * dy2)))
       
    if (out==null){
        
        out = nj2.zeros([3,3])
        console.log(out,"out")
       
    }
    // to convert
    // ndimage.convolve(temp, stencil, output=out)
    // out[(0, -1), :] = 0.0
    // out[:, (0, -1)] = 0.0
    out = out.add(temp)
    return out
    }


export class Heat {

    //  Solve the Heat equation on a grid.
    // Examples
    // --------
    // >>> heat = Heat()
    // >>> heat.time
    // 0.0
    // >>> heat.time_step
    // 0.25
    // >>> heat.advance_in_time()
    // >>> heat.time
    // 0.25
    // >>> heat = Heat(shape=(5, 5))
    // >>> heat.temperature = np.zeros_like(heat.temperature)
    // >>> heat.temperature[2, 2] = 1.
    // >>> heat.advance_in_time()
    // >>> heat = Heat(alpha=.5)
    // >>> heat.time_step
    // 0.5
    // >>> heat = Heat(alpha=.5, spacing=(2., 3.))
    // >>> heat.time_step
    // 2.0
    //  

    /**
     * Create a new heat model.
     * @constructor
     * @param {array_like} shape - The shape of the solution grid as (*rows*, *columns*).
     * @param {array_like} spacing - Spacing of grid rows and columns.
     * @param {array_like} origin - Coordinates of lower left corner of grid.
     * @param {array_like} alpha - Alpha parameter in the heat equation.
     */

    constructor(shape = [10, 20], spacing = [1.0, 1.0], origin = [0.0, 0.0], alpha = 1.0) {
        this._shape = shape
        this._spacing = spacing
        this._origin = origin
        this._time = 0.0
        this._alpha = alpha
        this._time_step = Math.min(spacing) ** 2 / (4.0 * this._alpha)

        this._temperature = nj2.random(this._shape)
        this._next_temperature = nj2.zeros(nj2.shape(this._temperature))
        // this._next_temperature = np.empty_like(this._temperature)
    }

    /**
     * Current model time.
     * @getter time
     * @return {number} temperature.
     */

    get time() {
        return this._time
    }

    /**
     * Temperature of the plate.
     * @getter temperature
     * @return {array_like} temperature.
     */

    get temperature() {
        return this._temperature
    }


    /**
     * Set the temperature of the plate.
     * @setter temperature
     * @param {array_like} new_temp - The new temperatures.
     */

    set temperature(new_temp) {
        this._temperature = new_temp
    }

    /**
     * Model time step.
     * @getter time_step
     * @return {number} time step
     */

    get time_step() {
        return this._time_step
    }

    /**
     * Set model time step.
     * @setter time_step
     * @param {number} time_step
     */

    set time_step(time_step) {
        this._time_step = time_step
    }

    /**
     * Shape of the model grid.
     * @getter shape
     * @return shape
     */

    get shape() {
        return this._shape
    }

    /**
     * Spacing between nodes of the model grid.
     * @getter spacing
     * @return spacing
     */

    get spacing() {
        return this._spacing
    }

    /**
     * Origin coordinates of the model grid.
     * @getter origin
     * @return origin
     */

    get origin() {
        return this._origin
    }

    /**
     * Create a Heat object from a file-like object.
     * @method from_file_like
     * @param {string} cls - An input or output variable name, a CSDMS Standard Name
     * @param {file_like} file_like - Input parameter file.
     * @return {Heat} -  A new instance of a Heat object.
     */

    from_file_like(cls, file_like) {
        config = yaml.load(file_like)
        return cls(...config)
    }

    /**
     * Calculate new temperatures for the next time step.
     * @method advance_in_time
     */

    advance_in_time() {
        solve_2d(
            this._temperature,
            this._spacing,
            out = this._next_temperature,
            alpha = this._alpha,
            time_step = this._time_step,
        )
        this._temperature = this._next_temperature.clone()

        this._time += this._time_step
    }
}