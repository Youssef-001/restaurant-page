import './style.css';
import Home from './home';

const content = document.querySelector('#content');

let newHome = Home;
console.log(newHome.createHome());
content.appendChild(newHome.createHome());