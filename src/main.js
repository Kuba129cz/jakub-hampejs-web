// src/main.js
import './main.styl';
import headHTML from './head.html?raw';
document.head.innerHTML = headHTML;

import { renderPVForecast } from './modules/pv_forecast.js';

// místo původní samostatné stránky
const mainContent = document.querySelector('.content');
if (mainContent) {
  renderPVForecast(mainContent);
}
