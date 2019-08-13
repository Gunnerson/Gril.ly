// import React, { Component } from 'react';
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

// Adding the bootstrap.min.css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Patrick adding the AppNavBar.js
import AppNavbar from "./components/AppNavbar";
import AppCarousel from "./components/AppCarousel";
// import Calendar from 'react-calendar';
import DatePicker from  "./components/DatePicker";
import Button from "./components/Button";
import PaymentPage from "./components/PaymentPage";
import Payment from "./components/Payment";
import QuantityGrill from "./components/QuantityGrill";
import GasGrillQuantity from "./components/GasGrillQuantity";
import SmokerQuantity from "./components/SmokerQuanitity";
import ConfirmationPage from "./components/ConfirmationPage";
import ItemSelection from "./components/ItemSelection";
// import PaymentSubmitButton from './components/PaymentSubmitButton';



// All of these elements were added by Paulina
// import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Search from "./components/layout/Search";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
// import PaymentSubmitButton from './components/PaymentSubmitButton';




// Adding new components to test the adding of values into the database for the reservations


//Check for token to keep user logged in
if (localStorage.jwtToken) {
  //Set auth token header 
  const token = localStorage.jwtToken;
  setAuthToken(token);
  //Decode token and get user info and exp
  const decoded = jwt_decode(token);
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //Check for expired token
  const currentTime = Date.now() /  1000;
  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());
    
    //Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">

          
        {/* Patrick commented out the old Nav, and included the link to AppNavbar.js */}
          {/* <Navbar /> */}
          <AppNavbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/carousel" component={AppCarousel} />
          {/* <Route exact path="/calendar" component={Calendar} /> */}
          <Route exact path="/datepicker" compone={DatePicker} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/button" component={Button} />
          {/* <Route exact path="/paymentsubmitbutton" component={PaymentSubmitButton} /> */}
          <Route exact path="/paymentpage" component={PaymentPage} /> 
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/quantitygrill" component={QuantityGrill} />
          <Route exact path="/gasquantitygrill" component={GasGrillQuantity} />
          <Route exact path="/smokerquantity" component={SmokerQuantity} />
          <Route exact path="/confirmationpage" component={ConfirmationPage} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/itemselection" component={ItemSelection} />
          {/* <Route exact path="/test">
            Hello does this work
          </Route> */}
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
          
          
        </div>
      </Router>
    </Provider>
  );
}

export default App;
