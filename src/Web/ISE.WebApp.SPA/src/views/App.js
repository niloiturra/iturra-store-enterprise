import React from 'react';
import PropTypes from 'prop-types';
import RouteConfig from 'routes';
import { history } from '_helpers/history';
import { Provider } from 'react-redux';
import store from '../store/create';

const App = () => {
  return (
    <Provider store={store}>
      <RouteConfig history={history} />
    </Provider>
  );
};

App.propTypes = {
  history: PropTypes.object,
};

export default App;
