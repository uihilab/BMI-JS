# bmi-JavaScript
JavaScript bindings for the CSDMS [Basic Model Interface 2.0](https://bmi.readthedocs.io/en/latest/). You can find the documentation for each of the variables [here](https://uihilab.github.io/BMI-JS/).

## Usage
You can find the bmi-specification file in the location: `BMI-JS/bmi/bmi.js`, clone the repository into your project and inherit the file in your model as an imported class.


```JavaScript

  import { BMI } from "./bmi.js";
  
  class MyBmi extends BMI{
  
    function initialize(self, config_file){
          // Your implementation goes here
          }
    }
```

## Example Implementations
Complete model implementations for bmi-js

[BMI-Heat](https://github.com/uihilab/bmi-example-js)

[HLM-Web (BMI Version)](https://github.com/uihilab/HLM-Web/tree/main/bmi-version)

[Hydrolang (BMI Version)](https://github.com/uihilab/HydroLang/tree/master/hydrolang/bmi-implementation)

## Citations
The specification usage is following the standard set by:

Hutton, E.W.H., Piper, M.D., and Tucker, G.E., 2020. The Basic Model Interface 2.0: A standard interface for coupling numerical models in the geosciences. Journal of Open Source Software, 5(51), 2317, https://doi.org/10.21105/joss.02317.

Peckham, S.D., Hutton, E.W., and Norris, B., 2013. A component-based approach to integrated modeling in the geosciences: The design of CSDMS. Computers & Geosciences, 53, pp.3-12, http://dx.doi.org/10.1016/j.cageo.2012.04.002.

The publication describing the implementation in JavaScript as well as the derived case studies can be found in:

Ewing G., Erazo Ramirez C., Vaidya W., & Demir I. 2022. Client-side Web-based Model Coupling using Basic Model Interface for Hydrology and Water Resources. EarthArxiv, 4547. https://doi.org/10.31223/X5XP93

## Feedback
Feel free to send us feedback by filing an issue.

## License
This project is licensed under the MIT licence - see the [LICENSE](https://github.com/uihilab/BMI-JS/blob/main/LICENSE) file for details.

## Acknowledgements
This project has been developed by the University of Iowa Hydroinformatics Lab (UIHI Lab):
https://hydroinformatics.uiowa.edu/
