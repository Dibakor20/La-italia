import './App.css';
import React from "react";
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
     <Router>
       <Switch>
         <Route path="/home">
           <Home/>
         </Route>
         <Route path="/">
           <Home/>
         </Route>
       </Switch>
     </Router>
    
    </>
  );
}

export default App;
