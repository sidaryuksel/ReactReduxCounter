import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LinkPage from './component/LinkPage';
import HomePage from './component/HomePage';
import SagaPage from './component/SagaPage';


function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/page1" component={LinkPage}/>
        <Route path="/saga" component={SagaPage} />
      </Switch>
    </div>
  );
}

export default App;
