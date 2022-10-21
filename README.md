<a href="https://uihilab.github.io/BMI-JS/" target="_blank">**Read the package documentation here**</a>

[**Go back to the Repo**](https://github.com/uihilab/BMI-JS)

# bmi-JavaScript
JavaScript bindings for the CSDMS [Basic Model Interface 2.0](https://bmi.readthedocs.io/en/latest/).
The Basic Model Interface (BMI) is a specification and standard interface to couple numerical models in the geosciences.
We encourage you to familiarize yourself with the BMI specification documentation and then return here to learn about how to leverage the JavaScript implementation of the standard.

As a very quick overview, the BMI standard prescribes to developers a set of functions to implement on their model or data source, which enables it to communicate to external resources through syntactical variable naming. 
In total, the current version of the standard describes 41 functions, falling within six functional groups that must be implemented for a resource to be considered BMI-compliant.
The functional groups and examples of the functions that are listed in the table below.

| **Functional Group**           | **Examples**                                       |
| ------------------------------ | -------------------------------------------------- |
| **Model control**              | _initialize, update, finalize_                     |
| **Model information**          | _get\_input\_var\_names, get\_output\_item\_count_ |
| **Variable information**       | _get\_var\_units, get\_var\_location_              |
| **Time**                       | _get\_start\_time, get\_time\_step_                |
| **Variable getter and setter** | _get\_value, set\_value_                           |
| **Model grid**                 | _get\_grid\_size, get\_grid\_shape_                |

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
