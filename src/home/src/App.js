import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import logo from './logo.svg';
// import Navb from './Navb';
import Login from './Login';
import RegI from './RegI'
// import RegG from './RegG'
import NavBar from './NavBar'
import Background from './Background'
import Courses from './Courses'
import Class from './Class'
// import './App.css';s

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
            <NavBar />
            <Route path="/" exact component={Background} />
            <Route path="/" component={Courses} exact />
            <Route path="/sub/:class" component={Class} exact />
            <Route path="/register/individual" component={RegI} exact />
            {/* <Route path="/register/group" component={RegG} exact /> */}
            <Route path="/login" component={Login} />
        </Router>
      </div>
    );
  }
}


export default App;
