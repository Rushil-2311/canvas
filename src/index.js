import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../node_modules/react-elastic-carousel/dist/index.es";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

