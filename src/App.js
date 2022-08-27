import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <div>
      <Navs />
      <switch>
        <Route exact={true} path="/">
          <Home />
        </Route>

        <Route exact={true} path="/starred">
          <Starred />
        </Route>

        <Route>
          <div>404 Not found</div>
        </Route>
      </switch>
    </div>
  );
}

export default App;
