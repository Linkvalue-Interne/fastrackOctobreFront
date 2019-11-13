import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from 'src/store';
import Form from 'src/components/Form';

const rootComponent = (
  <Provider store={store}>
    <Router>
    </Router>
  </Provider>

);

render(rootComponent, document.getElementById('root'));
