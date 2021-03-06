/**
 * Created by apyreev on 05-Apr-17.
 */
import React      from 'react';
import ReactDOM   from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import DevTools from './components/DevTools';

import configureStore from './redux/configureStore';
import routes from './routes';

const store = configureStore();

const component = (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
);

ReactDOM.render(
  component,
  document.getElementById('react-view')
);
ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('dev-tools')
);
