# BMI-JS
An example of implementing the JavaScript specification for the CSDMS Basic Model Interface (BMI).

# Overview
This is an example of implementing a BMI for a simple model that solves the diffusion equation on a uniform rectangular plate with Dirichlet boundary conditions. Tests and examples of using the BMI are provided. The model and its BMI are written in JavaScript.

# This project is organized as follows:

bmi
bmi.js: Holds the Basic Model Interface (BMI) JavaScript specification.

test/data
data.xml: Holds the initializing values for Heat Model.

test/heat
bmiheat.js: Contains BMI methods that wrap the Heat class
heat.js: Uses heatconfig and solve2D to perform various operations on the model.
heatconfig.js: Makes an instance of HeatConfigFile.
solve2D.js: Solve the 2D heat equation on a uniform grid.

test/test-cases
test.js: Unit tests for the model
bmiHeatTest.js: Unit tests for the model BMI
