import React from 'react';
import './components/style/App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/routes/Home';
import Players from './components/Players';
import Navbar from './components/Navbar';
import PlayerPage from './components/routes/PlayerPage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/players' component={Players}/>
        <Route exact path='/players/:slug' component={PlayerPage}/>
      </Switch>
    </div>
  );
}

export default App;
