import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { KandyKorner } from ".KandyKorner.js"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <KandyKorner />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

