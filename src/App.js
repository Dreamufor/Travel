import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import TravelDetails from './components/travels/TravelDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateTravel from './components/travels/CreateTravel';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component = { Dashboard } />
            <Route path='/travel/:id' component = {TravelDetails}/>
            <Route path='/signin' component = {SignIn}/>
            <Route path='/signup' component = {SignUp}/>
            <Route path='/create' component = {CreateTravel}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
