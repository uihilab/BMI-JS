var assert = require('assert');
/**
 * JUnit tests for the Heat class.
 */
class HeatTest {

    #shape;
    #spacing;
    #origin;
    #alpha;
    #time;
    #temperature;
    #heat;
    
    
    setUp() {
      nRows = 8;
      nCols = 6;
      dx = 1.0;
      dy = 1.0;
      xStart = 0.0;
      yStart = 0.0;
      alpha = 1.0;
  
      heat = new Heat(nRows, nCols, dx, dy, xStart, yStart, alpha);
  
      time = 0.0;
      shape = this.create2DArray(nRows,nCols);
      spacing = this.create2DArray(dy,dx);
      origin = this.create2DArray(yStart,xStart);
  
      // Initialize plate temperature.
      temperature = this.create2DArray(nRows,nCols);
    }
  
    create2DArray(M,N){
        var arr1 = new Array(M);            // create an empty array of length `M`
        for (var i = 0; i < M; i++) {
            arr1[i] = new Array(N);        // make each element an array
        }
        return arr1;
      }
    

    
    tearDown(){
    }
  
    
    testHeatIntegerIntegerDoubleDoubleDoubleDoubleDouble() {
      nRows = 8;
      nCols = 6;
      dx = 1.0;
      dy = 1.0;
      xStart = 0.0;
      yStart = 0.0;
      alpha = 1.0;
      let newHeat = new Heat(nRows, nCols, dx, dy, xStart, yStart, alpha);
      assertNotNull(newHeat);
    }
  
    /**
     * Test method for {@link edu.colorado.csdms.heat.Heat#Heat()}.
     */
    @Test
    public final void testHeat() {
      Heat newHeat = new Heat();
      assertNotNull(newHeat);
    }
  
    /**
     * Test method for {@link edu.colorado.csdms.heat.Heat#Heat(java.lang.String)}.
     */
    @Test
    public final void testHeatString() {
      String fileName = "src/test/resources/data/heat.xml";
      Heat newHeat = new Heat(fileName);
      assertNotNull(newHeat);
    }
  
    /**
     * Test method for {@link edu.colorado.csdms.heat.Heat#getShape()}.
     */
    @Test
    public final void testGetShape() {
      assertEquals(shape, heat.getShape());
    }
  
    /**
     * Test method for {@link edu.colorado.csdms.heat.Heat#setShape(java.util.List)}.
     */
    @Test
    public final void testSetShape() {
      List<Integer> newShape = new ArrayList<Integer>();
      newShape.add(100);
      newShape.add(50);
      heat.setShape(newShape);
      assertEquals(newShape, heat.getShape());
    }
  
    /**
     * Test method for {@link edu.colorado.csdms.heat.Heat#getSpacing()}.
     */
    @Test
    public final void testGetSpacing() {
      assertEquals(spacing, heat.getSpacing());
    }
  
    /**
     * Test method for {@link edu.colorado.csdms.heat.Heat#setSpacing(java.util.List)}.
     */
    @Test
    public final void testSetSpacing() {
      List<Double> newSpacing = new ArrayList<Double>();
      newSpacing.add(500.0);
      newSpacing.add(250.0);
      heat.setSpacing(newSpacing);
      assertEquals(newSpacing, heat.getSpacing());
    }
  
    /**
     * Test method for {@link edu.colorado.csdms.heat.Heat#getOrigin()}.
     */
    @Test
    public final void testGetOrigin() {
      assertEquals(origin, heat.getOrigin());
    }
  
    /**
     * Test method for {@link edu.colorado.csdms.heat.Heat#setOrigin(java.util.List)}.
     */
    @Test
    public final void testSetOrigin() {
      List<Double> newOrigin = new ArrayList<Double>();
      newOrigin.add(10.0);
      newOrigin.add(15.0);
      heat.setOrigin(newOrigin);
      assertEquals(newOrigin, heat.getOrigin());
    }
  
    /**
     * Test method for {@link edu.colorado.csdms.heat.Heat#getAlpha()}.
     */
    @Test
    public final void testGetAlpha() {
      assertEquals(alpha, heat.getAlpha());
    }
  
    /**
     * Test method for {@link edu.colorado.csdms.heat.Heat#setAlpha(java.lang.Double)}.
     */
    @Test
    public final void testSetAlpha() {
      Double newAlpha = 0.2;
      heat.setAlpha(newAlpha);
      assertEquals(newAlpha, heat.getAlpha());
    }
  
    /**
     * Test method for {@link edu.colorado.csdms.heat.Heat#getTime()}.
     */
    @Test
    public final void testGetTime() {
      assertEquals(time, heat.getTime());
    }
  
    /**
     * Test method for {@link edu.colorado.csdms.heat.Heat#setTime(java.lang.Double)}.
     */
    @Test
    public final void testSetTime() {
      Double newTime = 42.0;
      heat.setTime(newTime);
      assertEquals(newTime, heat.getTime());
    }
  
    /**
     * Test method for {@link edu.colorado.csdms.heat.Heat#getTimeStep()}.
     */
    @Test
    public final void testGetTimeStep() {
      assertTrue(heat.getTimeStep() > 0.0);
    }
  
    /**
     * Test method for {@link edu.colorado.csdms.heat.Heat#setTimeStep(java.lang.Double)}.
     */
    @Test
    public final void testSetTimeStep() {
      Double newTimeStep = 5.0;
      heat.setTimeStep(newTimeStep);
      assertEquals(newTimeStep, heat.getTimeStep());
    }
  
    /**
     * Test method for {@link edu.colorado.csdms.heat.Heat#getTemperature()}.
     */
    @Test
    public final void testGetTemperature() {
  
      // Check that the first row matches.
      double expected[] = temperature[0];
      double actual[] = heat.getTemperature()[0];
      assertArrayEquals(expected, actual, 0);
    }
  
    /**
     * Test method for {@link edu.colorado.csdms.heat.Heat#setTemperature(double[][])}.
     */
    @Test
    public final void testSetTemperature() {
      double[][] newTemperature = new double[shape.get(0)][shape.get(1)];
      for (int i = 0; i < shape.get(1); i++) {
        newTemperature[0][i] = i + 10.0;
      }
      heat.setTemperature(newTemperature);
  
      // Check that the first row matches.
      double expected[] = newTemperature[0];
      double actual[] = heat.getTemperature()[0];
      assertArrayEquals(expected, actual, 0);
    }
  
    /**
     * Test method for {@link edu.colorado.csdms.heat.Heat#advanceInTime()}.
     */
    @Test
    public final void testAdvanceInTime() {
      Double finalTime = heat.getTime() + heat.getTimeStep();
      heat.advanceInTime();
      assertEquals(finalTime, heat.getTime());
    }
  
  }