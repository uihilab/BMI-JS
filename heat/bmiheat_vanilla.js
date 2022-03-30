import { BMI } from "../bmi/bmi.js";
import { Heat } from "../heat/heat_vanilla_java.js";

/**
 * BMI methods that wrap the {@link edu.colorado.csdms.heat.Heat} class.
 */
  class BmiHeat extends BMI {

      MODEL_NAME = "Heat"; 
      INPUT_VAR_NAMES = ["plate_surface__temperature"];
      OUTPUT_VAR_NAMES = ["plate_surface__temperature"];
    
    #model;
    #varUnits;
    #grids;
    #gridType;
    
    /**
     * Creates a new BmiHeat model that is ready for initialization.
     */
    constructor() {
        super(); 
      this.#model = null;
      this.#varUnits = {};
      this.#grids = {};
      this.#gridType = {};
    }
  
    /*
     * Model control functions
     */
  
     
      initialize(configFile) {
    //   File theFile = new File(configFile);
    //   if (theFile.exists()) {
        this.#model = new Heat(configFile);
        this.#initializeHelper();
    //   }
    }
  
     
      initialize() {
      this.#model = new Heat(8, 6, 1.0, 1.0, 0.0, 0.0, 1.0);
      this.#initializeHelper();
    }
  
    /**
     * Initializes BmiHeat properties using properties from the enclosed Heat
     * instance.
     */
    #initializeHelper() {
      let varname=this.INPUT_VAR_NAMES[0];
      this.#varUnits={varname: "K"};
      this.#grids={0: varname};
      this.#gridType={0: "uniform_rectilinear"};
    }
  
     
      update() {
        this.#model.advanceInTime();
    }
  
     
      updateUntil(then) {
      let nSteps = (then - getCurrentTime()) / getTimeStep();
      for (let i = 0; i < Math.floor(nSteps); i++) {
        update();
      }
      updateFrac(nSteps - Math.floor(nSteps));
    }
  
    /**
     * A helper for updating a model to a fractional time step.
     * @param timeFrac
     */
    #updateFrac(timeFrac) {
      let timeStep = getTimeStep();
      this.#model.setTimeStep(timeFrac * timeStep);
      update();
      this.#model.setTimeStep(timeStep);
    }
  
     
      finalize() {
        this.#model = null;
    }
  
    /*
     * Model information functions
     */
  
     
      getComponentName() {
      return this.MODEL_NAME;
    }
  
     
      getInputItemCount() {
      return this.INPUT_VAR_NAMES.length;
    }
  
     
      getOutputItemCount() {
      return this.OUTPUT_VAR_NAMES.length;
    }
  
     
      getInputVarNames() {
      return this.INPUT_VAR_NAMES;
    }
  
     
      getOutputVarNames() {
      return this.OUTPUT_VAR_NAMES;
    }
  
    /*
     * Variable information functions
     */
  
     
      getVarGrid(varName) {
        let arr=Object.values(this.#grids)
        for(let i=0;i<arr.length;i++){
            if(arr[i]==varName){
               return (Object.keys(this.#grids))[i];
            }
        }
      return -1;
    }
  
     
      getVarType(varName) {
      // if (varName == this.getOutputVarNames()[0]) {
      //   if (this.#model.getTemperature()) {
      //     return "double";
      //   }
      //   return typeof()
      // }
      return typeof(varName);
    }
  
     
      getVarUnits(varName) {
      return this.#varUnits[varName];
    }
  
     
      getVarItemsize(varName) {
      let itemSize = 0;
      if (this.getVarType(varName)=== "Number") {
        itemSize = 8;
      }
      return itemSize;
    }
  
     
      getVarNbytes(varName) {
      if (varName == this.getOutputVarNames()[0]) {
        return this.getVarItemsize(varName) * this.getGridSize(this.getVarGrid(varName));
      } else {
        return -1;
      }
    }
  
     
      getVarLocation(varName) {
      return "node";
    }
  
    /*
     * Time functions
     */
  
     
      getStartTime() {
      return 0;
    }
  
     
    getCurrentTime() {
      return this.#model.getTime();
    }
  
     
      getEndTime() {
      return Number.MAX_VALUE;
    }
  
     
      getTimeUnits() {
      return null; // Not implemented for Heat
    }
  
     
      getTimeStep() {
      return this.#model.getTimeStep();
    }
  
    /*
     * Getters and setters
     */
  
     
      getValue(varName,dest) {
      let nRows = (this.#model.getShape())[0];
      let nCols = (this.#model.getShape())[1];
      for (let i = 0; i < nRows; i++) {
        System.arraycopy((this.#model.getTemperature())[i], 0, dest, (i*nCols), nCols);
      }
    }
  
     
      getValue( varName,dest) {
      return; // Not implemented for Heat
    }
  
     
      getValue(varName,dest) {
      return; // Not implemented for Heat
    }
  
     
      getValuePtr( varName) {
      return null; // Not implemented for Heat
    }
  
     
      getValueAtIndices(varName, dest,indices) {
      return; // Not implemented
    }
  
     
      getValueAtIndices(varName,dest,indices) {
      return; // Not implemented
    }
  
     
      getValueAtIndices(varName,  dest,indices) {
      return; // Not implemented
    }
  
     
      setValue(varName, src) {
      let nRows = (this.#model.getShape())[0];
      let nCols = (this.#model.getShape())[1];
      let temperature = this.#model.getTemperature();
      for (let i = 0; i < nRows; i++) {
        System.arraycopy(src, (i*nCols), temperature[i], 0, nCols);
      }
    }
  
     
      setValue( varName, src) {
      return; // Not implemented for Heat
    }
  
     
      setValue( varName, src) {
      return; // Not implemented for Heat
    }
  
     
      setValueAtIndices( varName, indices,src) {
      return; // Not implemented for Heat
    }
  
     
      setValueAtIndices( varName, indices, src) {
      return; // Not implemented for Heat
    }
  
     
      setValueAtIndices( varName,  indices, src) {
      return; // Not implemented for Heat
    }
  
    /*
     * Model grid functions
     */
  
     
      getGridRank( gridId) {
      return this.#model.getShape().length;
    }
  
     
      getGridSize( gridId) {
       let product = 1;
      for (let i = 0; i < this.#model.getShape().length; i++) {
        product *= (this.#model.getShape())[i];
      }
      return product;
    }
  
     
      getGridType( gridId) {
      return this.#gridType[gridId];
    }
  
     
      getGridShape( gridId, gridShape) {
      for (let i = 0; i < this.#model.getShape().length; i++) {
        gridShape[i] = (this.#model.getShape())[i];
      }
    }
  
     
      getGridSpacing( gridId, gridSpacing) {
      for (let i = 0; i < this.#model.getSpacing().length; i++) {
        gridSpacing[i] = (this.#model.getSpacing())[i];
      }
    }
  
     
      getGridOrigin( gridId, gridOrigin) {
      for (let i = 0; i < this.#model.getOrigin().length; i++) {
        gridOrigin[i] = (this.#model.getOrigin())[i];
      }
    }
  
     
      getGridX( gridId, gridX) {
      return; // Not implemented for Heat
    }
  
     
      getGridY( gridId, gridY) {
      return; // Not implemented for Heat
    }
  
     
      getGridZ( gridId, gridZ) {
      return; // Not implemented for Heat
    }
  
     
      getGridNodeCount( gridId) {
      return -1; // Not implemented for Heat
    }
    
     
      getGridEdgeCount( gridId) {
      return -1; // Not implemented for Heat
    }
    
     
      getGridFaceCount( gridId) {
      return -1; // Not implemented for Heat
    }
  
     
      getGridEdgeNodes( gridId, edgeNodes) {
      return; // Not implemented for Heat
    }
    
     
      getGridFaceEdges( gridId, faceEdges) {
      return; // Not implemented for Heat  
    }
    
     
      getGridFaceNodes( gridId, faceNodes) {
      return; // Not implemented for Heat  
    }
    
     
      getGridNodesPerFace( gridId, nodesPerFace) {
      return; // Not implemented for Heat  
    }
  
  }

      console.log("*\n* Example: Heat Model run through its BMI\n*");
  
      // Instantiate and initialize this.#model.
      let bmi = new BmiHeat();
      bmi.initialize();
  
      let componentName = bmi.getComponentName();
      console.log("Model name: " + componentName);
  
      console.log("Start time: " + bmi.getStartTime());
      console.log("End time: " + bmi.getEndTime());
      console.log("Current time: " + bmi.getCurrentTime());
      console.log("Time step: " + bmi.getTimeStep());
      console.log("Time unit: " + bmi.getTimeUnits());
  
      console.log("Input variables: ");
      for (let i = 0; i < bmi.getInputItemCount(); i++) {
        console.log("- " + bmi.getInputVarNames()[i]);
      }
      console.log("Output variables: ");
      for (let i = 0; i < bmi.getOutputItemCount(); i++) {
        console.log("- " + bmi.getOutputVarNames()[i]);
      }
  
      // Get the grid and variable info for the temperature variable.
      let var_name = bmi.getOutputVarNames()[0];
      console.log("Variable: " + var_name);
      let gridId = bmi.getVarGrid(var_name);
      console.log("- grid_id: " + gridId);
      console.log("- grid type: " + bmi.getGridType(gridId));
      let gridRank = bmi.getGridRank(gridId);
      console.log("- grid rank: " + gridRank);
      console.log("- grid size: " + bmi.getGridSize(gridId));
      console.log("- grid shape:");
      let gridShape = new Array(parseInt(gridRank));
      bmi.getGridShape(gridId, gridShape);
      for (let i = 0; i < gridRank; i++) {
        console.log("  - " + gridShape[i]);
      }
      console.log("- grid spacing:");
      let gridSpacing = new Array(parseInt(gridRank));
      bmi.getGridSpacing(gridId, gridSpacing);
      for (let i = 0; i < gridRank; i++) {
        console.log("  - " + gridSpacing[i]);
      }
      console.log("- grid origin:");
      let gridOrigin = new Array(parseInt(gridRank));
      bmi.getGridOrigin(gridId, gridOrigin);
      for (let i = 0; i < gridRank; i++) {
        console.log("  - " + gridOrigin[i]);
      }
      console.log("- var type: " + bmi.getVarType(var_name));
      console.log("- var units: " + bmi.getVarUnits(var_name));
      console.log("- var itemsize: " + bmi.getVarItemsize(var_name));
      console.log("- var nbytes: " + bmi.getVarNbytes(var_name));
  
      // Add an impulse to the default initial temperature field.
      let temp0 = new Array(bmi.getGridSize(gridId));
      bmi.getValue(var_name, temp0);
      temp0[3*gridShape[1] + 2] = 100.0;
      bmi.setValue(var_name, temp0);
  
      // Advance the model over several time steps.
      let currentTime = bmi.getCurrentTime();
      let temp = new Array(bmi.getGridSize(gridId));
      while (currentTime < 1.0) {
        console.log("time = " + currentTime.toString());
        console.log("temperature =");
        bmi.getValue(var_name, temp);
        for (let j = 0; j < gridShape[0]; j++) {
          for (let i = 0; i < gridShape[1]; i++) {
            console.log( temp[j*gridShape[1] + i]);
          }
          console.log("\n");
        }
        bmi.update();
        currentTime = bmi.getCurrentTime();
      }
  
      bmi.finalize();
    
  