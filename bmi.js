const NdArray = require('numjs/src/ndarray');

class BMI {

    /**
     * Perform startup tasks for the model.
     * Perform all tasks that take place before entering the model's time
     * loop, including opening files and initializing the model state. Model
     * inputs are read from a text-based configuration file, specified by
     * "config_file".
     * @method initialize
     * @param {Object} config_file - string,optional The path to the model configuration file
     */

     initialize(config_file) {
        if (this.constructor == BMI) {
            throw new Error(" Object of Abstract Class cannot be created");
        }
    }

    /**
     * Advance model state by one time step.
     * Perform all tasks that take place within one pass through the model's
     * time loop. This typically includes incrementing all of the model's
     * state variables. If the model's state variables don't change in time,
     * then they can be computed by the :func:`initialize` method and this
     * method can return with no action.
     * @method update
     */

    update() {
        throw new Error("Abstract Method has no implementation");
    }

    /**
     * Advance model state until the given time.
     * @method update_until
     * @param {number} time - A model time later than the current model time.
     */

    update_until(time) {
        throw new Error("Abstract Method has no implementation");
    }

    /**
     * Perform tear-down tasks for the model.
     * Perform all tasks that take place after exiting the model's time
     * loop. This typically includes deallocating memory, closing files and
     * printing reports.
     * @method finalize
     */

    finalize() {
        throw new Error("Abstract Method has no implementation");
    }

    /**
     * Gets name of the component.
     * @getter component_name
     * @return {string} - The name of the component
     */

    get component_name() {
        return this.cname;
    }

    /**
     * Count of a model's input variables.
     * @Getter input_item_count
     * @return {number} - The number of input variables.
     */

    get input_item_count() {
        return this.number_of_input_variables;
    }

    /**
     * Count of a model's output variables.
     * @Getter output_item_count
     * @return {number} - The number of output variables.
     */

    get output_item_count() {
        return this.number_of_output_variables;
    }

    /**
     * Get grid identifier for the given variable.
     * @method get_var_grid
     * @param {string} name - An input or output variable name, a CSDMS Standard Name
     * @return {number} - The grid identifier.
     */

    get_var_grid(name) {
        return this.grid_identifier;
    }

    /**
     * Get data type of the given variable.
     * @method get_var_type
     * @param {string} name - An input or output variable name, a CSDMS Standard Name
     * @return {string} - The variable type; e.g., "str", "int", "float".
     */

    get_var_type(name) {
        return this._variable;
    }

    /**
     *  Get units of the given variable.
     *  Standard unit names, in lower case, should be used, such as
     *  "meters" or "seconds". Standard abbreviations, like "m" for
     *  meters, are also supported. For variables with compound units,
     *  each unit name is separated by a single space, with exponents
     *  other than 1 placed immediately after the name, as in "m s-1"
     *  for velocity, "W m-2" for an energy flux, or "km2" for an
     *  area.
     * @method get_var_units
     * @param {string} name - An input or output variable name, a CSDMS Standard Name
     * @return {string} - The variable units.
     */

    get_var_units(name) {
        return this.var_units;
    }

    /**
     * Get memory use for each array element in bytes
     * @method get_var_itemsize
     * @param {string} name - An input or output variable name, a CSDMS Standard Name
     * @return {number} - Item size in bytes.
     */

    get_var_itemsize(name) {
        return this.item_size;
    }

    /**
     * Get size, in bytes, of the given variable
     * @method get_var_nbytes
     * @param {string} name - An input or output variable name, a CSDMS Standard Name
     * @return {number} - The size of the variable, counted in bytes.
     */

    get_var_nbytes(name) {
        return this.variable_size;
    }

    /**
     * Get the grid element type that the a given variable is defined on.
     * The grid topology can be composed of *nodes*, *edges*, and *faces*.
     * *node*
     *     A point that has a coordinate pair or triplet: the most
     *     basic element of the topology.
     * *edge*
     *     A line or curve bounded by two *nodes*.
     * *face*
     *     A plane or surface enclosed by a set of edges. In a 2D
     *     horizontal application one may consider the word “polygon”,
     *     but in the hierarchy of elements the word “face” is most common.
     * @method get_var_location
     * @param {string} name - An input or output variable name, a CSDMS Standard Name
     * @return {string} - The grid location on which the variable is defined. Must be one of "node", "edge", or "face".
     */

    get_var_location(name) {
        return this.grid_location;
    }

    /**
     * Current time of the model
     * @getter current_time
     * @param {string} name - An input or output variable name, a CSDMS Standard Name
     * @return {number} - The current model time.
     */

    get current_time() {
        return this.current_model_time;
    }

    /**
     * Start time of the model. Model times should be of type float
     * @getter start_time
     * @return {number} -The model start time.
     */

    get start_time() {
        return this.model_start_time;
    }

    /**
     * End time of the model
     * @getter end_time
     * @return {number} -The maximum model time.
     */

    get end_time() {
        return this.max_model_time;
    }

    /**
     * Time units of the model
     * @getter time_units
     * @return {string} -The model time unit; e.g., 'days' or 's'.
     */

    get time_units() {
        return this.model_time_unit;
    }

    /**
     * Current time step of the model. The model time step should be of type float
     * @getter time_step
     * @return {number} -The time step used in model.
     */

    get time_step() {
        return this.get_time_step;
    }

    /**
     *  Get a copy of values of the given variable.
     *  This is a getter for the model, used to access the model's
     *  current state. It returns a *copy* of a model variable, with
     *  the return type, size and rank dependent on the variable.
     * @method get_value
     * @param {string} name - An input or output variable name, a CSDMS Standard Name
     * @param {NdArray} dest - A numpy array into which to place the values
     * @return {NdArray} -The same numpy array that was passed as an input buffer.
     */

    get_value(name, dest) {
        return this.np_array;
    }

    /**
     *  Get a reference to values of the given variable.
     *  This is a getter for the model, used to access the model's
     *  current state. It returns a reference to a model variable,
     *  with the return type, size and rank dependent on the variable.
     * @method get_value_ptr
     * @param {string} name - An input or output variable name, a CSDMS Standard Name
     * @return {array_like} -A reference to a model variable.
     */

    get_value_ptr(name) {
        return this.np_array;
    }

    /**
     * Get values at particular indices.
     * @method get_value_at_indices
     * @param {string} name - An input or output variable name, a CSDMS Standard Name
     * @param {NdArray} dest - A numpy array into which to place the values
     * @param {array_like} inds - The indices into the variable array
     * @return {array_like} -Value of the model variable at the given location.
     */

    get_value_at_indices(name, dest, inds) {
        return this.model_value;
    }

    /**
     * Specify a new value for a model variable.
     * This is the setter for the model, used to change the model's
     * current state. It accepts, through *src*, a new value for a
     * model variable, with the type, size and rank of *src*
     * dependent on the variable.
     * @method set_value
     * @param {string} name - An input or output variable name, a CSDMS Standard Name
     * @param {array_like} src - The new value for the specified variable
     */

    set_value(name, src) {
        throw new Error("Abstract Method has no implementation");
    }

    /**
     * Specify a new value for a model variable at particular indices.
     * @method set_value_at_indices
     * @param {string} name - An input or output variable name, a CSDMS Standard Name
     * @param {array_like} inds - The indices into the variable array
     * @param {array_like} src - The new value for the specified variable
     */

    set_value_at_indices(name, inds, src) {
        throw new Error("Abstract Method has no implementation");
    }

    /**
     * Get number of dimensions of the computational grid.
     * @method get_grid_rank
     * @param {number} grid - A grid identifier
     * @return {number} Rank of the grid.
     */

    get_grid_rank(grid) {
        return this.rank;
    }

    /**
     * Get the total number of elements in the computational grid.
     * @method get_grid_size
     * @param {number} grid - A grid identifier
     * @return {number} Size of the grid.
     */

    get_grid_size(grid) {
        return this.size
    }

    /**
     * Get the grid type as a string.
     * @method get_grid_type(
     * @param {number} grid - A grid identifier
     * @return {string} Type of grid as a string.
     */

    get_grid_type(grid) {
        return this.type
    }

    /**
     * Get dimensions of the computational grid
     * @method get_grid_shape(
     * @param {number} grid - A grid identifier
     * @param {ndarray of number, shape *(ndim,)*} shape - A numpy array into which to place the shape of the grid.
     * @return {NdArray of number} The input numpy array that holds the grid's shape.
     */

    get_grid_shape(grid, shape) {
        return this.grid_shape;
    }

    /**
     * Get dimensions of the computational grid
     * @method get_grid_spacing(
     * @param {number} grid - A grid identifier
     * @param {NdArray of number, shape *(ndim,)*} spacing - A numpy array to hold the spacing between grid rows and columns.
     * @return {NdArray of number} The input numpy array that holds the grid's spacing.
     */

    get_grid_spacing(grid, spacing) {
        return this.grid_spacing;
    }

    /**
     * Get coordinates for the lower-left corner of the computational grid.
     * @method get_grid_origin(
     * @param {number} grid - A grid identifier
     * @param {NdArray of number, shape *(ndim,)*} origin - A numpy array to hold the coordinates of the lower-left corner of the grid.
     * @return {NdArray of number} The input numpy array that holds the coordinates of the grid's lower-left corner.
     */

    get_grid_origin(grid, origin) {
        return this.grid_origin;
    }

    /**
     * Get coordinates of grid nodes in the x direction.
     * @method get_grid_x(
     * @param {number} grid - A grid identifier
     * @param {ndarray of number, shape *(nrows,)*} x - A numpy array to hold the x-coordinates of the grid node columns
     * @return {NdArray of number} The input numpy array that holds the grid's column x-coordinates.
     */

    get_grid_x(grid, x) {
        return this.x_np_array
    }

    /**
     * Get coordinates of grid nodes in the y direction.
     * @method get_grid_y(
     * @param {number} grid - A grid identifier
     * @param {ndarray of number, shape *(ncols,)*} y - A numpy array to hold the y-coordinates of the grid node rows
     * @return {NdArray of number} The input numpy array that holds the grid's row y-coordinates
     */

    get_grid_y(grid, y) {
        return this.y_np_array
    }

    /**
     * Get coordinates of grid nodes in the z direction.
     * @method get_grid_z(
     * @param {number} grid - A grid identifier
     * @param {ndarray of number, shape *(nlayers,)*} z - A numpy array to hold the z-coordinates of the grid nodes layers.
     * @return {NdArray of number} The input numpy array that holds the grid's layer z-coordinates.
     */

    get_grid_z(grid, z) {
        return this.z_np_array
    }

    /**
     * Get the number of nodes in the grid.
     * @method get_grid_node_count(
     * @param {number} grid - A grid identifier
     * @return {number} The total number of grid nodes
     */

    get_grid_node_count(grid) {
        return this.count
    }

    /**
     * Get the number of edges in the grid
     * @method get_grid_edge_count(
     * @param {number} grid - A grid identifier
     * @return {number} The total number of grid edges
     */

    get_grid_edge_count(grid) {
        return this.total_edges
    }

    /**
     * Get the number of faces in the grid.
     * @method get_grid_face_count(
     * @param {number} grid - A grid identifier
     * @return {number} The total number of grid faces.
     */

    get_grid_face_count(grid) {
        return this.total_faces
    }

    /**
     * Get the edge-node connectivity.
     * @method get_grid_edge_nodes(
     * @param {number} grid - A grid identifier
     * @param {ndarray of int, shape *(2 x nnodes,)*} edge_nodes - A numpy array to place the edge-node connectivity. For each edge, connectivity is given as node at edge tail, followed by node at edge head.
     * @return {ndarray of number} The input numpy array that holds the edge-node connectivity.
     */

    get_grid_edge_nodes(grid, edge_nodes) {
        return this.edge_connectivity_array;
    }

    /**
     * Get the face-edge connectivity.
     * @method get_grid_face_edges(
     * @param {number} grid - A grid identifier
     * @param {ndarray of number} face_edges - A numpy array to place the face-edge connectivity.
     * @return {ndarray of number} The input numpy array that holds the face-edge connectivity.
     */

    get_grid_face_edges(grid, face_edges) {
        return this.face_edge_connectivity_array;
    }

    /**
     * Get the face-edge connectivity.
     * @method get_grid_face_nodes(
     * @param {number} grid - A grid identifier
     * @param {ndarray of number} face_nodes - A numpy array to place the face-node connectivity. For each face, the nodes (listed in a counter-clockwise direction) that form the boundary of the face.
     * @return {ndarray of number} The input numpy array that holds the face-node connectivity.
     */

    get_grid_face_nodes(grid, face_nodes) {
        return this.face_node_connectivity_array;
    }

    /**
     * Get the face-edge connectivity.
     * @method get_grid_nodes_per_face(
     * @param {number} grid - A grid identifier
     * @param {ndarray of int, shape *(nfaces,)*} nodes_per_face - A numpy array to place the number of nodes per face.
     * @return {ndarray of number} The input numpy array that holds the number of nodes per face.
     */

    get_grid_nodes_per_face(grid, nodes_per_face) {
        return this.nodes_count_array
    }

}
