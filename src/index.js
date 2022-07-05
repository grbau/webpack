import _ from 'lodash';
//import './sass/main.scss'
import printMe from './print.js';

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  element.onclick = printMe;

   return element;
 }

 document.body.appendChild(component());