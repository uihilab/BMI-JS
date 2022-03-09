var nj = require('numjs');
var Heat = require('./heat')
var Bmi = require('./bmi')

class BmiHeat extends Bmi{
    
    _name = "The 2D Heat Equation"
    _input_var_names = ["plate_surface__temperature",]
    _output_var_names = ["plate_surface__temperature",]


    constructor(){
        //  Create a BmiHeat model that is ready for initialization. 
        this._model = null;
        this._values = {};
        this._var_units = {}
        this._var_loc = {}
        this._grids = {}
        this._grid_type = {}

        this._start_time = 0.0
        this._end_time = 1.7976931348623157e+308
        this._time_units = "s"
    }

    initialize(filename=null){
        //  Initialize the Heat model.
        // Parameters
        // ----------
        // filename : str, optional
        //     Path to name of input file.
        //  
        if (filename==null){
            this._model =new Heat();
        }
        else if (filename instanceof String){
                var rawFile = new XMLHttpRequest();
                rawFile.open("GET", filename, false);
                rawFile.onreadystatechange = function ()
                {
                    if(rawFile.readyState === 4)
                    {
                        if(rawFile.status === 200 || rawFile.status == 0)
                        {
                            var allText = rawFile.responseText;
                            this._model = Heat.from_file_like(allText)
                        }
                    }
                }
                rawFile.send(null);

        }
        else{
            this._model = Heat.from_file_like(filename)

        }
            
        this._values = {"plate_surface__temperature": this._model.temperature}
        this._var_units = {"plate_surface__temperature": "K"}
        this._var_loc = {"plate_surface__temperature": "node"}
        this._grids = {0: ["plate_surface__temperature"]}
        this._grid_type = {0: "uniform_rectilinear"}
    }
        

    update(){
        //  Advance model by one time step. 
        this._model.advance_in_time()
    }

    update_frac(time_frac){
        //  Update model by a fraction of a time step.
        // Parameters
        // ----------
        // time_frac : float
        //     Fraction fo a time step.
        //  
        time_step = this.get_time_step()
        this._model.time_step = time_frac * time_step
        this.update()
        this._model.time_step = time_step
    }

    update_until(then){
        //  Update model until a particular time.
        // Parameters
        // ----------
        // then : float
        //     Time to run model until.
        //  
        n_steps = (then - this._model.time) / this._model.time_step

        for (i in parseInt(n_steps)){
            this.update()
        }
            
        this.update_frac(n_steps - parseInt(n_steps))
    }

    finalize(){
        this._model = null
    }

    get_var_type(var_name){
        return String(this.value_ptr(var_name).dtype)
    }

    get_var_units(var_name){
        return this._var_units[var_name]
    }
    
    // get var_nbytes(var_name){

    //     return this.value_ptr(var_name).nbytes
    // }

    get_var_itemsize(name){
        return nj.dtype(this.var_type(name)).itemsize
    }
        

    get_var_location(name){
        return this._var_loc[name]
    }
       

    get_var_grid(var_name){
        for (grid_id, var_name_list in this._grids.items()){
            if (var_name in var_name_list){
                return grid_id
            }
            
        }
       
    }
        
      

    get_grid_rank(grid_id){
        return len(this._model.shape)
    }
        
    // get_grid_size(grid_id){
    //     return parseInt(np.prod(this._model.shape))
    // }
       

    get_value_ptr(var_name){
        return this._values[var_name]

    }
        

    get_value(var_name, dest){

        dest = this.value_ptr(var_name).flatten()
        return dest
    }
        

    get_value_at_indices(var_name, dest, indices){
        dest = this.value_ptr(var_name).slice(indices)
        return dest
    }
        
      

    set_value(var_name, src){
        val = this.value_ptr(var_name)
        val = src.reshape(val.shape)
    }
       
       

    set_value_at_indices(name, inds, src){
        val = this.get_value_ptr(name)
        val.flat[inds] = src
    }
        
       

    get component_name(){
        return this._name
    }
      
       

    get input_item_count(){
        return len(this._input_var_names)

    }

    get output_item_count(){
        return len(this._output_var_names)

    }

    get input_var_names(){
        return this._input_var_names
    }

    get output_var_names(){
        return this._output_var_names
    }

    get_grid_shape(grid_id, shape){
        var_name = this._grids[grid_id][0]
        shape = this.value_ptr(var_name).shape
        return shape
    }
       

    get_grid_spacing(grid_id, spacing){
        spacing = this._model.spacing
        return spacing
    }
       
    get_grid_origin(grid_id, origin){
        origin = this._model.origin
        return origin
    }
        

    get_grid_type( grid_id){
        return this._grid_type[grid_id]
    }

    get start_time(){
        return this._start_time
    }

    get end_time(){
        return this._end_time
    }

    get current_time(){
        return this._model.time
    }

    get time_step(){
        return this._model.time_step
    }

    get time_units(){
        return this._time_units
    }

    get_grid_edge_count(grid){
        throw "NotImplementedError: get_grid_edge_count"
    }

    get_grid_edge_nodes(grid, edge_nodes){
        throw "NotImplementedError get_grid_edge_nodes"
    }

    get_grid_face_count(grid){
        throw "NotImplementedError get_grid_face_count"
    }

    get_grid_face_nodes(grid, face_nodes){
        throw "NotImplementedError get_grid_face_nodes"
    }

    get_grid_node_count(grid){
        return this.get_grid_size(grid)
    }
       

    get_grid_nodes_per_face(grid, nodes_per_face){
        throw "NotImplementedError get_grid_nodes_per_face"
    }

    get_grid_face_edges(grid, face_edges){
        throw "NotImplementedError get_grid_face_edges"
    }

    get_grid_x( grid, x){
        throw "NotImplementedError get_grid_x"

    }

    get_grid_y(grid, y){
        throw "NotImplementedError get_grid_y"

    }

    get_grid_z(this, grid, z){
        throw "NotImplementedError get_grid_z"

    }
       
        
        
        
}