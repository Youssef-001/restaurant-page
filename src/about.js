const aboutPage = {

     createAboutPage(){

      // Create about page content here
      let aboutContent = document.createElement('div');
      aboutContent.className = 'aboutContent';
       
      let aboutHeader = document.createElement('h2');
      aboutHeader.textContent = 'About Bread Bazaar';
      aboutHeader.classList.add('aboutHeader');

      let aboutParagraph = document.createElement('p');
      aboutParagraph.textContent = 'Bread Bazaar is a charming and welcoming bakery located in our beautiful neighborhood. We offer a variety of handcrafted breads, pastries, and cakes to satisfy your sweet tooth and enjoy a delicious meal.';
      aboutParagraph.classList.add('aboutParagraph');
      
      aboutContent.appendChild(aboutHeader);
      aboutContent.appendChild(aboutParagraph);

      return aboutContent;
      
     
     }

}

export default aboutPage;