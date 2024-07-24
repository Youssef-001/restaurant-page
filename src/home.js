const homeObject = {

    createBreadCard(breadName, imageSrc, className){

        let breadOne = document.createElement('div');
        breadOne.className = className;
        let breadOneImage = document.createElement('img');
        breadOneImage.src = `../src/images/${imageSrc}`;
        let breadOneName = document.createElement('p');
        breadOneName.textContent = breadName;
        breadOneName.classList.add(className);

        breadOne.appendChild(breadOneImage);
        breadOne.appendChild(breadOneName);



        return breadOne;


    },

    createHome() {


        let mainContent = document.createElement('div');
        mainContent.className ='mainContent';

        let hero = document.createElement('div');
        hero.className = 'hero';


        
        let brandName = document.createElement('p');
        brandName.className = 'brandName';
        brandName.textContent = 'Bread Bazaar'
        
        let brandDescription = document.createElement('p');
        brandDescription.className = 'brandDescription';
        brandDescription.textContent = '"Bread Bliss" aims to celebrate the rich diversity and artistry of bread-making from around the world. We provide bread enthusiasts with recipes, tips, and insights to explore, bake, and enjoy a wide variety of breads, fostering a global community of passionate bakers.'
        hero.appendChild(brandName);
        hero.appendChild(brandDescription);


        mainContent.appendChild(hero);


        let showParagraph = document.createElement('p');
        showParagraph.textContent = 'Discover our range of breads';
        showParagraph.classList.add("show-header")

        let showCase = document.createElement('div');
        showCase.className ='showcase';


        let breadOne = homeObject.createBreadCard('White Bread', 'white-bread.jpg', 'breadCard');
        let breadTwo = homeObject.createBreadCard('Focaccia', 'focaccia.jpg', 'breadCard');
        let breadThree = homeObject.createBreadCard('Hawaiian Bread', 'hawaiianBread.jpg', 'breadCard');

        showCase.appendChild(breadOne);
        showCase.appendChild(breadTwo);
        showCase.appendChild(breadThree);



        let pageContent = document.createElement('div');
        pageContent.className = 'pageContent';
        pageContent.appendChild(showParagraph);
        pageContent.appendChild(showCase);

        mainContent.appendChild(pageContent);

        return mainContent;
    }


}

export default homeObject;