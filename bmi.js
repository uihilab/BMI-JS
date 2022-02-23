class BMI{

initialize(config_file) {
    // """Perform startup tasks for the model.
    // Perform all tasks that take place before entering the model's time
    // loop, including opening files and initializing the model state. Model
    // inputs are read from a text-based configuration file, specified by
    // `config_file`.
    // Parameters
    // ----------
    // config_file : str, optional
    //     The path to the model configuration file.
    // Notes
    // -----
    // Models should be refactored, if necessary, to use a
    // configuration file. CSDMS does not impose any constraint on
    // how configuration files are formatted, although YAML is
    // recommended. A template of a model's configuration file
    // with placeholder values is used by the BMI.
    // """
}

update(){
    // Advance model state by one time step.
    // Perform all tasks that take place within one pass through the model's
    // time loop. This typically includes incrementing all of the model's
    // state variables. If the model's state variables don't change in time,
    // then they can be computed by the :func:`initialize` method and this
    // method can return with no action.
}

update_until(time){
    // """Advance model state until the given time.
    // Parameters
    // ----------
    // time : float
    //     A model time later than the current model time.
    // """
}

finalize(){
    // """Perform tear-down tasks for the model.
    // Perform all tasks that take place after exiting the model's time
    // loop. This typically includes deallocating memory, closing files and
    // printing reports.
    // """
}

get component_name(){
    // Name of the component.
    //     Returns
    //     -------
    //     str
    //         The name of the component.
    //     """
return cname;
}

get input_item_count(){
    // Count of a model's input variables.
    //     Returns
    //     -------
    //     int
    //       The number of input variables.
    return number_of_input_variables;
}

get output_item_count(){
    // """Count of a model's output variables.
    //     Returns
    //     -------
    //     int
    //       The number of output variables.
    //     """
    return number_of_output_variables;
}

get var_grid(name){
    // """Get grid identifier for the given variable.
    //     Parameters
    //     ----------
    //     name : str
    //         An input or output variable name, a CSDMS Standard Name.
    //     Returns
    //     -------
    //     int
    //       The grid identifier.
    //     """
    return grid_identifier;
}

get var_type(name){
    // """Get data type of the given variable.
    //     Parameters
    //     ----------
    //     name : str
    //         An input or output variable name, a CSDMS Standard Name.
    //     Returns
    //     -------
    //     str
    //         The Python variable type; e.g., ``str``, ``int``, ``float``.
    //     """
    return python_variable;
}

get var_units(name){
    // """Get units of the given variable.
    //     Standard unit names, in lower case, should be used, such as
    //     ``meters`` or ``seconds``. Standard abbreviations, like ``m`` for
    //     meters, are also supported. For variables with compound units,
    //     each unit name is separated by a single space, with exponents
    //     other than 1 placed immediately after the name, as in ``m s-1``
    //     for velocity, ``W m-2`` for an energy flux, or ``km2`` for an
    //     area.
    //     Parameters
    //     ----------
    //     name : str
    //         An input or output variable name, a CSDMS Standard Name.
    //     Returns
    //     -------
    //     str
    //         The variable units.
    //     Notes
    //     -----
    //     CSDMS uses the `UDUNITS`_ standard from Unidata.
    //     .. _UDUNITS: http://www.unidata.ucar.edu/software/udunits
    //     """
    return var_units;
}

get var_itemsize(name){
    // """Get memory use for each array element in bytes.
    //     Parameters
    //     ----------
    //     name : str
    //         An input or output variable name, a CSDMS Standard Name.
    //     Returns
    //     -------
    //     int
    //         Item size in bytes.
    //     """
    return item_size;
}

get var_nbytes(name){
    // """Get size, in bytes, of the given variable.
    //     Parameters
    //     ----------
    //     name : str
    //         An input or output variable name, a CSDMS Standard Name.
    //     Returns
    //     -------
    //     int
    //         The size of the variable, counted in bytes.
    //     """
    return variable_size;
}

get var_location(name){
    // """Get the grid element type that the a given variable is defined on.
    //     The grid topology can be composed of *nodes*, *edges*, and *faces*.
    //     *node*
    //         A point that has a coordinate pair or triplet: the most
    //         basic element of the topology.
    //     *edge*
    //         A line or curve bounded by two *nodes*.
    //     *face*
    //         A plane or surface enclosed by a set of edges. In a 2D
    //         horizontal application one may consider the word “polygon”,
    //         but in the hierarchy of elements the word “face” is most common.
    //     Parameters
    //     ----------
    //     name : str
    //         An input or output variable name, a CSDMS Standard Name.
    //     Returns
    //     -------
    //     str
    //         The grid location on which the variable is defined. Must be one of
    //         `"node"`, `"edge"`, or `"face"`.
    //     Notes
    //     -----
    //     CSDMS uses the `ugrid conventions`_ to define unstructured grids.
    //     .. _ugrid conventions: http://ugrid-conventions.github.io/ugrid-conventions
    //     """
    return grid_location;
}

get current_time(){
    // """Current time of the model.
    //     Returns
    //     -------
    //     float
    //         The current model time.
    //     """
    return current_model_time;
}

get start_time(){
    // """Start time of the model.
    //     Model times should be of type float.
    //     Returns
    //     -------
    //     float
    //         The model start time.
    //     """
    return model_start_time;
}

get end_time(){
    // """End time of the model.
    //     Returns
    //     -------
    //     float
    //         The maximum model time.
    //     """
    return max_model_time;
}

get time_units(){
    // """Time units of the model.
    // Returns
    // -------
    // str
    //     The model time unit; e.g., `days` or `s`.
    // Notes
    // -----
    // CSDMS uses the UDUNITS standard from Unidata.
    // """
    return model_time_unit;
}

get time_step(){
    // """Current time step of the model.
    // The model time step should be of type float.
    // Returns
    // -------
    // float
    //     The time step used in model.
    // """
    return this.get_time_step;
}

get value(name,dest){
    // """Get a copy of values of the given variable.
    //     This is a getter for the model, used to access the model's
    //     current state. It returns a *copy* of a model variable, with
    //     the return type, size and rank dependent on the variable.
    //     Parameters
    //     ----------
    //     name : str
    //         An input or output variable name, a CSDMS Standard Name.
    //     dest : ndarray
    //         A numpy array into which to place the values.
    //     Returns
    //     -------
    //     ndarray
    //         The same numpy array that was passed as an input buffer.
    //     """
    return np_array;
}

get value_ptr(name){
    // """Get a reference to values of the given variable.
    //     This is a getter for the model, used to access the model's
    //     current state. It returns a reference to a model variable,
    //     with the return type, size and rank dependent on the variable.
    //     Parameters
    //     ----------
    //     name : str
    //         An input or output variable name, a CSDMS Standard Name.
    //     Returns
    //     -------
    //     array_like
    //         A reference to a model variable.
    //     """
    return np_array;
}

get value_at_indices(name,dest,inds){
    // """Get values at particular indices.
    //     Parameters
    //     ----------
    //     name : str
    //         An input or output variable name, a CSDMS Standard Name.
    //     dest : ndarray
    //         A numpy array into which to place the values.
    //     inds : array_like
    //         The indices into the variable array.
    //     Returns
    //     -------
    //     array_like
    //         Value of the model variable at the given location.
    //     """
    return model_value;
}

set value(name,src){
    // """Specify a new value for a model variable.
    // This is the setter for the model, used to change the model's
    // current state. It accepts, through *src*, a new value for a
    // model variable, with the type, size and rank of *src*
    // dependent on the variable.
    // Parameters
    // ----------
    // name : str
    //     An input or output variable name, a CSDMS Standard Name.
    // src : array_like
    //     The new value for the specified variable.
    // """
}

set value_at_indices(name,inds,src){
    // """Specify a new value for a model variable at particular indices.
    // Parameters
    // ----------
    // name : str
    //     An input or output variable name, a CSDMS Standard Name.
    // inds : array_like
    //     The indices into the variable array.
    // src : array_like
    //     The new value for the specified variable.
    // """
}

get grid_rank(grid){
    // """Get number of dimensions of the computational grid.
    //     Parameters
    //     ----------
    //     grid : int
    //         A grid identifier.
    //     Returns
    //     -------
    //     int
    //         Rank of the grid.
    //     """
    return rank;
}

get grid_size(grid){
    // """Get the total number of elements in the computational grid.
    //     Parameters
    //     ----------
    //     grid : int
    //         A grid identifier.
    //     Returns
    //     -------
    //     int
    //         Size of the grid.
    //     """
    return size
}

get grid_type(grid){
    // """Get the grid type as a string.
    // Parameters
    // ----------
    // grid : int
    //     A grid identifier.
    // Returns
    // -------
    // str
    //     Type of grid as a string.
    // """
    return type
}

get grid_shape(grid,shape){
    // """Get dimensions of the computational grid.
    // Parameters
    // ----------
    // grid : int
    //     A grid identifier.
    // shape : ndarray of int, shape *(ndim,)*
    //     A numpy array into which to place the shape of the grid.
    // Returns
    // -------
    // ndarray of int
    //     The input numpy array that holds the grid's shape.
    // """
    return grid_shape;
}

get grid_spacing(grid,spacing){
    // """Get distance between nodes of the computational grid.
    //     Parameters
    //     ----------
    //     grid : int
    //         A grid identifier.
    //     spacing : ndarray of float, shape *(ndim,)*
    //         A numpy array to hold the spacing between grid rows and columns.
    //     Returns
    //     -------
    //     ndarray of float
    //         The input numpy array that holds the grid's spacing.
    //     """
    return grid_spacing;
}

get grid_origin(grid,origin){
    // """Get coordinates for the lower-left corner of the computational grid.
    //     Parameters
    //     ----------
    //     grid : int
    //         A grid identifier.
    //     origin : ndarray of float, shape *(ndim,)*
    //         A numpy array to hold the coordinates of the lower-left corner of
    //         the grid.
    //     Returns
    //     -------
    //     ndarray of float
    //         The input numpy array that holds the coordinates of the grid's
    //         lower-left corner.
    //     """
    return grid_origin;
}

get grid_x(grid,x){
    // """Get coordinates of grid nodes in the x direction.
    //     Parameters
    //     ----------
    //     grid : int
    //         A grid identifier.
    //     x : ndarray of float, shape *(nrows,)*
    //         A numpy array to hold the x-coordinates of the grid node columns.
    //     Returns
    //     -------
    //     ndarray of float
    //         The input numpy array that holds the grid's column x-coordinates.
    //     """
    return x_np_array
}

get grid_y(grid,y){
    // """Get coordinates of grid nodes in the y direction.
    //     Parameters
    //     ----------
    //     grid : int
    //         A grid identifier.
    //     y : ndarray of float, shape *(ncols,)*
    //         A numpy array to hold the y-coordinates of the grid node rows.
    //     Returns
    //     -------
    //     ndarray of float
    //         The input numpy array that holds the grid's row y-coordinates.
    //     """
    return y_np_array
}

get grid_z(grid,z){
    // """Get coordinates of grid nodes in the z direction.
    //     Parameters
    //     ----------
    //     grid : int
    //         A grid identifier.
    //     z : ndarray of float, shape *(nlayers,)*
    //         A numpy array to hold the z-coordinates of the grid nodes layers.
    //     Returns
    //     -------
    //     ndarray of float
    //         The input numpy array that holds the grid's layer z-coordinates.
    //     """
    return z_np_array
}

get grid_node_count(grid){
    // """Get the number of nodes in the grid.
    //     Parameters
    //     ----------
    //     grid : int
    //         A grid identifier.
    //     Returns
    //     -------
    //     int
    //         The total number of grid nodes.
    //     """
    return count
}

get grid_edge_count(grid){
    // """Get the number of edges in the grid.
    // Parameters
    // ----------
    // grid : int
    //     A grid identifier.
    // Returns
    // -------
    // int
    //     The total number of grid edges.
    // """
    return total_edges
}

get grid_face_count(grid){
    // """Get the number of faces in the grid.
    //     Parameters
    //     ----------
    //     grid : int
    //         A grid identifier.
    //     Returns
    //     -------
    //     int
    //         The total number of grid faces.
    //     """
    return total_faces
}

get grid_edge_nodes(grid,edge_nodes){
    // """Get the edge-node connectivity.
    //     Parameters
    //     ----------
    //     grid : int
    //         A grid identifier.
    //     edge_nodes : ndarray of int, shape *(2 x nnodes,)*
    //         A numpy array to place the edge-node connectivity. For each edge,
    //         connectivity is given as node at edge tail, followed by node at
    //         edge head.
    //     Returns
    //     -------
    //     ndarray of int
    //         The input numpy array that holds the edge-node connectivity.
    //     """
    return edge_connectivity_array;
}

get grid_face_edges(grid,face_edges){
    // """Get the face-edge connectivity.
    //     Parameters
    //     ----------
    //     grid : int
    //         A grid identifier.
    //     face_edges : ndarray of int
    //         A numpy array to place the face-edge connectivity.
    //     Returns
    //     -------
    //     ndarray of int
    //         The input numpy array that holds the face-edge connectivity.
    //     """
    return face_edge_connectivity_array;
}

get grid_face_nodes(grid,face_nodes){
    // """Get the face-node connectivity.
    //     Parameters
    //     ----------
    //     grid : int
    //         A grid identifier.
    //     face_nodes : ndarray of int
    //         A numpy array to place the face-node connectivity. For each face,
    //         the nodes (listed in a counter-clockwise direction) that form the
    //         boundary of the face.
    //     Returns
    //     -------
    //     ndarray of int
    //         The input numpy array that holds the face-node connectivity.
    //     """
    return face_node_connectivity_array;
}

get grid_nodes_per_face(grids,nodes_per_face){
    // """Get the number of nodes for each face.
    // Parameters
    // ----------
    // grid : int
    //     A grid identifier.
    // nodes_per_face : ndarray of int, shape *(nfaces,)*
    //     A numpy array to place the number of nodes per face.
    // Returns
    // -------
    // ndarray of int
    //     The input numpy array that holds the number of nodes per face.
    // """
    return nodes_count_array
}

}
