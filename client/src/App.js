import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import "../src/assets/css/app.css"



function App() {
    return (
      <div className = "background">
          <div className = "layer">
      <Router>
        <div >
          <Route exact path="/" component={Home} />
        </div>
      </Router>
      </div>
      </div>
    );
  }
  
  export default App;