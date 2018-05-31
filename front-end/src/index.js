import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import reducers from './reducers';

const store = applyMiddleware()(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
