import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './page/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
