
import './App.css';
import Home from './Container/Home';
import Navbar from './Container/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Countries from './Container/Countries';

function App() {
  return (
    <  >
      <Router>
      <Navbar />
      
        <Switch>
          <Route exact path ='/' component={Home} />
          <Route exact path ='/countries'>
            <Countries />
          </Route>
        </Switch>
       
      </Router>

    </ >
  );
}

export default App;
