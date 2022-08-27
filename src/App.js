import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <switch>
      <Route exact={true} path="/">
        This is home page
      </Route>

      <Route exact={true} path="/stared">
        This is home page is stared
      </Route>

      <Route>404</Route>
    </switch>
  );
}

export default App;
