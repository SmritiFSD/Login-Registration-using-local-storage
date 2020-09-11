import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

// import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import CompanyInfo from './components/CompanyInfo/CompanyInfo'
function App() {
  // const [title, updateTitle] = useState(null);
  return (

    <Router>
        <Navbar/>
            
      <div className="App">
        <div className="container d-flex align-items-center flex-column">
          <Switch>
          <Route exact path="/" component={Home}/>
            <Route path="/register" exact={true}>
              <RegistrationForm/>
            </Route>
            <Route path="/login">
              <LoginForm/>
            </Route>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
            <Route path="/companyinfo">
              <CompanyInfo/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
