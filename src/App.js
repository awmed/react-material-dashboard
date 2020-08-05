import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';
import chartjs from 'src/helpers/chartjs';
import routes, { renderRoutes } from 'src/routes';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import validators from './common/validators';

const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        {renderRoutes(routes)}
      </Router>
    </ThemeProvider>
  );
};

export default App;
