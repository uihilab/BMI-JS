# BMI for JavaScript
JavaScript bindings for the CSDMS Basic Model Interface

# Download
You can find the bmi-specification file in the location: BMI-JS/bmi/bmi.js, download it into your repository and inherit the file in your model class

# Usage
.. code-block:: JavaScript

  import { BMI } from "./bmi.js";
  
  class MyBmi extends BMI{
  
    function initialize(self, config_file){
          # Your implementation goes here
          }
    }


# Link to bmi-example-js:

[BMI-Heat](https://github.com/uihilab/bmi-example-js)

[HLM-Web (BMI Version)](https://github.com/uihilab/HLM-Web/tree/main/bmi-version)

[Hydrolang (BMI Version)]()
