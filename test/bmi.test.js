const Bmi = require("../bmijs/bmi.js");

describe("test_initialize", () => {
  let bmi = new Bmi();
  let randomString = "xyz";

  test("test initialize function", () => {
    expect(() => {
      bmi.initialize(randomString);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_update", () => {
  let bmi = new Bmi();

  test("test update function", () => {
    expect(() => {
      bmi.update();
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_update_until", () => {
  let bmi = new Bmi();

  test("test update_until function", () => {
    expect(() => {
      bmi.update_until(8);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_finalize", () => {
  let bmi = new Bmi();

  test("test finalize function", () => {
    expect(() => {
      bmi.finalize();
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_component_name", () => {
  let bmi = new Bmi();

  test("test get_component_name function", () => {
    expect(() => {
      bmi.get_component_name();
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_input_item_count", () => {
  let bmi = new Bmi();

  test("test get_input_item_count function", () => {
    expect(() => {
      bmi.get_input_item_count();
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_output_item_count", () => {
  let bmi = new Bmi();

  test("test get_output_item_count function", () => {
    expect(() => {
      bmi.get_output_item_count();
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_input_var_names", () => {
  let bmi = new Bmi();

  test("test get_input_var_names function", () => {
    expect(() => {
      bmi.get_input_var_names();
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_output_var_names", () => {
  let bmi = new Bmi();

  test("test get_output_var_names function", () => {
    expect(() => {
      bmi.get_output_var_names();
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_var_grid", () => {
  let bmi = new Bmi();

  test("test get_var_grid function", () => {
    expect(() => {
      bmi.get_var_grid("name");
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_var_type", () => {
  let bmi = new Bmi();

  test("test get_var_type function", () => {
    expect(() => {
      bmi.get_var_type("name");
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_var_units", () => {
  let bmi = new Bmi();

  test("test get_var_units function", () => {
    expect(() => {
      bmi.get_var_units("name");
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_var_itemsize", () => {
  let bmi = new Bmi();

  test("test get_var_itemsize function", () => {
    expect(() => {
      bmi.get_var_itemsize("name");
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_var_nbytes", () => {
  let bmi = new Bmi();

  test("test get_var_nbytes function", () => {
    expect(() => {
      bmi.get_var_nbytes("name");
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_var_location", () => {
  let bmi = new Bmi();

  test("test get_var_location function", () => {
    expect(() => {
      bmi.get_var_location("name");
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_current_time", () => {
  let bmi = new Bmi();

  test("test get_current_time function", () => {
    expect(() => {
      bmi.get_current_time();
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_start_time", () => {
  let bmi = new Bmi();

  test("test get_start_time function", () => {
    expect(() => {
      bmi.get_start_time();
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_end_time", () => {
  let bmi = new Bmi();

  test("test get_end_time function", () => {
    expect(() => {
      bmi.get_end_time();
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_time_units", () => {
  let bmi = new Bmi();

  test("test get_time_units function", () => {
    expect(() => {
      bmi.get_time_units();
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_time_step", () => {
  let bmi = new Bmi();

  test("test get_time_step function", () => {
    expect(() => {
      bmi.get_time_step();
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_value", () => {
  let bmi = new Bmi();

  test("test get_value function", () => {
    expect(() => {
      let varCpy = new Array(5);
      bmi.get_value("name", varCpy);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_value_ptr", () => {
  let bmi = new Bmi();

  test("test get_value_ptr function", () => {
    expect(() => {
      bmi.get_value_ptr("name");
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_value_at_indices", () => {
  let bmi = new Bmi();

  test("test get_value_at_indices function", () => {
    expect(() => {
      let varCpy1 = new Array(5);
      let varCpy2 = new Array(5);

      bmi.get_value_at_indices("name", varCpy1, varCpy2);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_set_value", () => {
  let bmi = new Bmi();

  test("test set_value function", () => {
    expect(() => {
      bmi.get_value_at_indices("name");
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_set_value_at_indices", () => {
  let bmi = new Bmi();

  test("test set_value_at_indices function", () => {
    expect(() => {
      let varCpy1 = new Array(5);
      let varCpy2 = new Array(5);
      bmi.set_value_at_indices("name", varCpy1, varCpy2);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_grid_type", () => {
  let bmi = new Bmi();

  test("test get_grid_type function", () => {
    expect(() => {
      bmi.get_grid_type(5);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_grid_rank", () => {
  let bmi = new Bmi();

  test("test get_grid_rank function", () => {
    expect(() => {
      bmi.get_grid_rank(5);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_grid_size", () => {
  let bmi = new Bmi();

  test("test get_grid_size function", () => {
    expect(() => {
      bmi.get_grid_size(5);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_grid_shape", () => {
  let bmi = new Bmi();

  test("test get_grid_shape function", () => {
    expect(() => {
      let varCpy = new Array(5);
      bmi.get_grid_shape(5, varCpy);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_grid_spacing", () => {
  let bmi = new Bmi();

  test("test get_grid_spacing function", () => {
    expect(() => {
      let varCpy = new Array(5);
      bmi.get_grid_spacing(5, varCpy);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_grid_origin", () => {
  let bmi = new Bmi();

  test("test get_grid_origin function", () => {
    expect(() => {
      let varCpy = new Array(5);
      bmi.get_grid_origin(5, varCpy);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_grid_x", () => {
  let bmi = new Bmi();

  test("test get_grid_x function", () => {
    expect(() => {
      let varCpy = new Array(5);
      bmi.get_grid_x(5, varCpy);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_grid_y", () => {
  let bmi = new Bmi();

  test("test get_grid_y function", () => {
    expect(() => {
      let varCpy = new Array(5);
      bmi.get_grid_y(5, varCpy);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_grid_z", () => {
  let bmi = new Bmi();

  test("test get_grid_z function", () => {
    expect(() => {
      let varCpy = new Array(5);
      bmi.get_grid_z(5, varCpy);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_grid_node_count", () => {
  let bmi = new Bmi();

  test("test get_grid_node_count function", () => {
    expect(() => {
      bmi.get_grid_node_count(5);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_grid_edge_count", () => {
  let bmi = new Bmi();

  test("test get_grid_edge_count function", () => {
    expect(() => {
      bmi.get_grid_edge_count(5);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_grid_face_count", () => {
  let bmi = new Bmi();

  test("test get_grid_face_count function", () => {
    expect(() => {
      bmi.get_grid_face_count(5);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_grid_edge_nodes", () => {
  let bmi = new Bmi();

  test("test get_grid_edge_nodes function", () => {
    expect(() => {
      let varCpy = new Array(5);
      bmi.get_grid_edge_nodes(5, varCpy);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_grid_face_edges", () => {
  let bmi = new Bmi();

  test("test get_grid_face_edges function", () => {
    expect(() => {
      let varCpy = new Array(5);
      bmi.get_grid_face_edges(5, varCpy);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_grid_face_nodes", () => {
  let bmi = new Bmi();

  test("test get_grid_face_nodes function", () => {
    expect(() => {
      let varCpy = new Array(5);
      bmi.get_grid_face_nodes(5, varCpy);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});

describe("test_get_grid_nodes_per_face", () => {
  let bmi = new Bmi();

  test("test get_grid_nodes_per_face function", () => {
    expect(() => {
      let varCpy = new Array(5);
      bmi.get_grid_nodes_per_face(5, varCpy);
    }).toThrowError(
      "BMI.js does not have an implementation of this method. Implement where class is inherited"
    );
  });
});
