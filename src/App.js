import './script/App.css';
import './script/Header.css';

import { BrowserRouter as Router, Route , Switch} from "react-router-dom";

import React from "react";

import Header from './Header';
import Login from './Login';
import Checkout from './Checkout';
//import Home from './Home';
import Orders from './Orders';


function App() {
  

  return (

    <Router>
      <div className = "app">
        <Switch>
          <Route path = "/product">
            <h1>Hello Product!</h1>
          </Route>
        {/* ----------This link for checkout Product ---------------------*/}
          <Route path = "/checkout">
            <Header/>
            <Checkout/>
            <h1>Hello Basket how are you !</h1>
          </Route>
          {/* ----------This link for Orders ---------------------*/}

          <Route path = "/orders">
            <Header/>
            <Orders/>
          </Route>
           {/* ----------This link for Payments---------------------*/}
          <Route path = "/payment">
            <h1>Hello Payment!</h1>
          </Route>
           {/* ----------This link for Login Pages---------------------*/}
          <Route path = "/login">
            <Login/>
            <h1>Home Login Page !</h1>
          </Route>

         {/* ----------Default pages of the Website---------------------*/}
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
