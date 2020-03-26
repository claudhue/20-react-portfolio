import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style.css';
import Nav from "./components/Nav"
import Home from "./components/home"
import Portfolio from './components/portfolio';
import Contact from './components/contact';


function App() {
  return (
    <Router>
      <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/20-react-portfolio" component={Home}/>
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
