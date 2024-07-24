import Home from './home';

let newHome = Home;

const menuContent = document.createElement('div');
menuContent.className = 'menuContent';


const menuObject = {


    
    createCards(){

        let card1 = Home.createBreadCard("White bread", "white-bread.jpg", "breadCard-menu");
        let card2 = Home.createBreadCard("Rye bread", "rye.jpg", "breadCard-menu");
        let card3 = Home.createBreadCard("Hawaiian bread", "hawaiianBread.jpg", "breadCard-menu");
        let card4 = Home.createBreadCard("Focaccia bread", "focaccia.jpg", "breadCard-menu");
        let card5 = Home.createBreadCard("Ciabatta", "ciabatta.jpg", "breadCard-menu");
        let card6 = Home.createBreadCard("Pita", "pita.webp", "breadCard-menu");

        
        return {
            card1,card2,card3,card4,card5,card6
        }
    },

    createMenu(){
        let cardsObject = this.createCards();


        for (let card in cardsObject){
            menuContent.appendChild(cardsObject[card]);
        }

        return menuContent;
    }


}

export default menuObject;