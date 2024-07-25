import './style.css';
import Home from './home';
import Menu from './menu';
import About from './about';

const content = document.querySelector('#content');

let newHome = Home;
let newMenu = Menu;
let newAbout = About;
console.log(newHome.createHome());
content.appendChild(newHome.createHome());



const menu = document.querySelector('.menu');
const home = document.querySelector('.home');
const about = document.querySelector('.about');

menu.addEventListener('click', (e) => {
    if(document.querySelector('.newMenu') == null){
    content.remove();

    if (document.querySelector('.aboutContent') != null)
    {
        document.querySelector('.aboutContent').remove();
    }


    let menu = newMenu.createMenu();
        
    if (document.querySelector('.menuContent') == null){
    document.body.appendChild(menu);
    menu.classList.add('newMenu');
    console.log(menu);}}

})

home.addEventListener('click', (e) => {

    

    if ( document.querySelector('.mainContent') == null)
    {
        if (document.querySelector('.newMenu'))
        document.querySelector('.newMenu').remove();;

        if (document.querySelector('.aboutContent'))
            document.querySelector('.aboutContent').remove();

        document.body.appendChild(content);

    }


    

})


about.addEventListener('click', (e) => {

    if (document.querySelector('.aboutContent') == null)
    {
        if (document.querySelector('.newMenu'))
        document.querySelector('.newMenu').remove();

        if (document.querySelector('#content'))
            document.querySelector('#content').remove();

        
        document.body.appendChild(newAbout.createAboutPage());
    }

});