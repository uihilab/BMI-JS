// """The 2D heat model."""

var nj1 = require('jsnumpy');
var nj2 = require('numjs');
const yaml = require('js-yaml');
var scipy = require('scipy');
// import yaml
// from scipy import ndimage, random


function solve_2d(temp, spacing, out=null, alpha=1.0, time_step=1.0){
    // """Solve the 2D Heat Equation on a uniform mesh.
    // Parameters
    // ----------
    // temp : ndarray
    //     Temperature.
    // spacing : array_like
    //     Grid spacing in the row and column directions.
    // out : ndarray (optional)
    //     Output array.
    // alpha : float (optional)
    //     Thermal diffusivity.
    // time_step : float (optional)
    //     Time step.
    // Returns
    // -------
    // result : ndarray
    //     The temperatures after time *time_step*.
    // Examples
    // --------
    // >>> from heat import solve_2d
    // >>> z0 = np.zeros((3, 3))
    // >>> z0[1:-1, 1:-1] = 1.
    // >>> solve_2d(z0, (1., 1.), alpha=.25)
    // array([[0. , 0. , 0. ],
    //        [0. , 0.5, 0. ],
    //        [0. , 0. , 0. ]])
    // """
    dy2 = spacing[0] ** 2
    dx2 = spacing[1] ** 2
    var arr= nj2.array([[0.0, dy2, 0.0], [dx2, -2.0 * (dx2 + dy2), dx2], [0.0, dy2, 0.0]]);
    stencil = ( arr * alpha * time_step / (2.0 * (dx2 * dy2)))
        // np.array([[0.0, dy2, 0.0], [dx2, -2.0 * (dx2 + dy2), dx2], [0.0, dy2, 0.0]])
    if (out==null){
        out = nj2.zeros(nj2.shape(temp))
        // out = np.empty_like(temp)
    }
        
// to convert
    // ndimage.convolve(temp, stencil, output=out)
    // out[(0, -1), :] = 0.0
    // out[:, (0, -1)] = 0.0
    out = nj1.add(temp,out)
    return out
    }

class Heat{

    // """Solve the Heat equation on a grid.
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
    // """

    constructor(shape=[10, 20], spacing=[1.0, 1.0], origin=[0.0, 0.0], alpha=1.0){

    
        // """Create a new heat model.
        // Parameters
        // ---------
        // shape : array_like, optional
        //     The shape of the solution grid as (*rows*, *columns*).
        // spacing : array_like, optional
        //     Spacing of grid rows and columns.
        // origin : array_like, optional
        //     Coordinates of lower left corner of grid.
        // alpha : float
        //     Alpha parameter in the heat equation.
        // """
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
    
    get time(){
        // """Current model time."""
        return this._time
    }

    
    get temperature(){
        // """Temperature of the plate."""
        return this._temperature
    }

    
    set temperature(new_temp){
        // """Set the temperature of the plate.
        // Parameters
        // ----------
        // new_temp : array_like
        //     The new temperatures.
        // """
        this._temperature = new_temp
    }

    
    get time_step(){
        // """Model time step."""
        return this._time_step
    }
    
    set time_step(time_step){
        // """Set model time step."""
        this._time_step = time_step
    }
    
    get shape(){
        // """Shape of the model grid."""
        return this._shape
    }
    
    get spacing(){
        // """Spacing between nodes of the model grid."""
        return this._spacing
    }
    
    get origin(){
        // """Origin coordinates of the model grid."""
        return this._origin
    }
    
    from_file_like(cls, file_like){
        // """Create a Heat object from a file-like object.
        // Parameters
        // ----------
        // file_like : file_like
        //     Input parameter file.
        // Returns
        // -------
        // Heat
        //     A new instance of a Heat object.
        // """
        config = yaml.load(file_like)
        return cls(...config)
    }
    advance_in_time(){
        // """Calculate new temperatures for the next time step."""
        solve_2d(
            this._temperature,
            this._spacing,
            out=this._next_temperature,
            alpha=this._alpha,
            time_step=this._time_step,
        )
        this._temperature= this._next_temperature.clone()

        this._time += this._time_step
    }
}