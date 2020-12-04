import './script/App.css';
import './script/Header.css';

import { BrowserRouter as Router, Route , Switch} from "react-router-dom";

import React from "react";

import Header from './Header';
//import Login from './Login';
//import Home from './Home';
//import Orders from './Orders';


function App() {
  

  return (

    <Router>
      <div className = "app">
        <Switch>
        <Route path = "/product">
            <h1>Hello Product!</h1>
          </Route>
        <Route path = "/checkout">
            <h1>Hello Checkout !</h1>
          </Route>
          <Route path = "/payment">
            <h1>Hello Payment!</h1>
          </Route>
          
        <Route path = "/login">
            <h1>Home Login Page !</h1>
          </Route>

          {/*  Default Router page */}
        <Route path = "/">
          <Header/>
            <h1>Home Page!!!!!!!!!!!!!</h1>
          </Route>

        </Switch>
      </div>
    </Router>

      
  
  );
}

export default App;
