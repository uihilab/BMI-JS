export class HeatConfigFile {
  
    #fileName="";
    #doc = null;
    #parameters;
  
    /**
     * Makes an instance of HeatConfigFile.
     *
     * @param fileName the path to the configuration file
     */
    static HeatConfigFile(fileName) {
      this.#fileName = fileName;
      this.#parameters = {};
    }
    
    /**
     * Extracts parameter names and values from the file.
     *
     * @return a {@link java.util.HashMap} with parameter names and values
     */
    static load() {
      loadFile();
      parseParameters();
      return this.#parameters;
    }
  
    /**
     * Load the contents of an XML file.
     * 
     * @param fileName the name of the XML file
     * @return the file contents as a Document
     */
    static loadFile() {
        const parser = new DOMParser();
        this.#doc = parser.parseFromString(this.#fileName, "application/xml");
    //   DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
    //   DocumentBuilder db;
      
    //   try {
    //     db = dbf.newDocumentBuilder();
    //     doc = db.parse(new File(fileName));
    //   } catch (Exception e) {
    //     e.printStackTrace();
    //   }
    }
  
    /**
     * Parse parameter names and values from the XML document.
     */
    static parseParameters() {
    //   Node modelNode = doc.getLastChild();
    //   NodeList list = modelNode.getChildNodes();
      
    //   for (int i = 0; i < list.getLength(); i++) {
    //     Node node = list.item(i);
    //     if (node.getNodeName().equals("parameter")) {
    //       NamedNodeMap attr = node.getAttributes();
    //       String key = attr.item(0).getNodeValue();
    //       Double value = Double.valueOf(attr.item(1).getNodeValue());
    //       parameters.put(key, value);
    //     }
    //   }
    }
  }