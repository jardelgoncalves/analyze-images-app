import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const goToTop = useCallback(
//   () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     })
//   },
//   []
// )