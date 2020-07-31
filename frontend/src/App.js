import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import Navigation from "./components/Navigation"; 
import Login from "./components/Login";
import Register from "./components/Register";
import Item from "./components/Item";
import Catalogue from "./components/Catalogue";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/" exact component={Catalogue} />
        <Route path="/item/:id" exact component={Item} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </div>
    </Router>
  );
}

export default App;
