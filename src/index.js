import './style.css';
import Home from './home';
import Menu from './menu';

const content = document.querySelector('#content');

let newHome = Home;
let newMenu = Menu;
console.log(newHome.createHome());
content.appendChild(newHome.createHome());


const menu = document.querySelector('.menu');

menu.addEventListener('click', (e) => {
    content.remove();

    let menu = newMenu.createMenu();
    document.body.appendChild(menu);
    console.log(menu);

})