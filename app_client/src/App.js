import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// HOME PAGE
import Home from "./pages/home/Home";
// ARTICLE PAGE
import Saved from "./pages/saved/Saved";

import './App.css';

// APP COMPONENT
class App extends Component {

  render() {

    return (
      // ROUTES TO PAGES
      <div>
        <Router>
          <div>
            {/* NAVBAR COMPONENT */}
            <Navbar />
            {/* HOME PAGE */}
            <Route exact path="/" component={Home}/>
            {/* ARTICLE ADD PAGE */}
            <Route exact path="/saved" component={Saved}/>
            {/* FOOTER COMPONENT */}
            <Footer />
          </div>
        </Router>
      </div>
    ); // END RETURN 
  };  // END RENDER 
};  // END APP COMPONENT 

export default App;
