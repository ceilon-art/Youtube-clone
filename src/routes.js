import React from 'react';

import { BrowserRouter, Switch, Route } from  'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

function Routes() {
  return (
    <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search/:searchTerm' component={Search} />
        </Switch>
    </BrowserRouter>
  );    
}

export default Routes;