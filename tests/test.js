var nj2 = require('numjs');
var bmiHeat = require('./heat/bmiheat')


test_get_initial_value()
test_get_value_at_indices()
test_get_value_copy()
test_get_value_pointer()
test_value_nbytes()
test_value_size()

function test_get_initial_value(){
model = new bmiHeat()
    model.initialize()

    z0 = model.get_value_ptr("plate_surface__temperature")
    if(z0.max()>1){
        console.log("Values not less than 1")
    }
    if(z0.min()<0){
        console.log("Values less than 0")
    }

}
    


function test_get_value_copy(){
    model = bmiHeat()
    model.initialize()

    dest0 = nj2.zeros(model.get_grid_size(0))
    dest1 = nj2.zeros(model.get_grid_size(0))
    // dest0 = np.empty(model.get_grid_size(0))
    // dest1 = np.empty(model.get_grid_size(0))

    z0 = model.get_value("plate_surface__temperature", dest0)
    z1 = model.get_value("plate_surface__temperature", dest1)

    if(z0!=z1){
        console.log("Mismatched elements")
    }
    // assert z0 is not z1
    // assert_array_almost_equal(z0, z1)
}

function test_get_value_pointer(){
    model = bmiHeat()
    model.initialize()

    dest1 = nj2.zeros(model.get_grid_size(0))
    // dest1 = np.empty(model.get_grid_size(0))

    z0 = model.get_value_ptr("plate_surface__temperature")
    z1 = model.get_value("plate_surface__temperature", dest1)

    if(z0!=z1){
        console.log("Mismatched elements")
    }

    // assert z0 is not z1
    // assert_array_almost_equal(z0.flatten(), z1)

    for(var i=0;i<5;i++){
        model.update()
    }
        
    z3=model.get_value_ptr("plate_surface__temperature")
    if(z0!=z3){
        console.log("Mismatched elements")
    }
    // assert z0 is model.get_value_ptr("plate_surface__temperature")
}

function test_get_value_at_indices(){
    model = bmiHeat()
    model.initialize()

    dest = nj2.zeros(3)

    z0 = model.get_value_ptr("plate_surface__temperature")
    z1 = model.get_value_at_indices("plate_surface__temperature", dest, [0, 2, 4])

    if(z0!=z1){
        console.log("Mismatched elements")
    }
    // assert_array_almost_equal(z0.take((0, 2, 4)), z1)
}

function test_value_size(){
    model = bmiHeat()
    model.initialize()

    z = model.get_value_ptr("plate_surface__temperature")

    z0=model.get_grid_size(0)
    if(z0!=z.length){
        console.log("Mismatched elements")
    }
    // assert model.get_grid_size(0) == z.size
}

function test_value_nbytes(){
    model = bmiHeat()
    model.initialize()

    z = model.get_value_ptr("plate_surface__temperature")

    z0=model.get_var_nbytes("plate_surface__temperature")
    if(z0!=z.nbytes){
        console.log("Mismatched elements")
    }
    // assert model.get_var_nbytes("plate_surface__temperature") == z.nbytes
}