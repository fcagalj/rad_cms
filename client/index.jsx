import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Entry point of app
const App = () => {
  return (

    <div />
  );
};

ReactDOM.render(
  // Wrap app in provider to make use of redux
  <Provider>
    <App />
  </Provider>,
  document.querySelector('.react-container'));
