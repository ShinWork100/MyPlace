import React from 'react';
import TableMain from './Table/TableMain';
import AiMain from './AI/AiMain';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';

// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

function App() {
  return (
    <Router>
      {/* <Home/> */}
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route extact path="/AiMain" ><AiMain/></Route>
        <Route extact path="/TableMain" ><TableMain/></Route>
      </Switch>
    </Router>
  );
}

export default App;

// function Navbar() {
//   return (
//     <nav>
//       <Link to="/Table">Home</Link>
//       <Link to="/AiMain">About</Link>
//     </nav>
//   )
// }