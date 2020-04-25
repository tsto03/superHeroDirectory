// PART 1
// Select submit button and call it submitButton
let submitButton = document.querySelector('#addHero');

// Select reset button and call it resetButton
let resetButton = document.querySelector('#resetForm');

// Select main content area and call it main
let main = document.querySelector('.row-main');

// Select how to use element and call it howToUse
let howToUse = document.querySelector('#howTo');

// Create an empty array for all heroes and call it heroes
let heroes = [];

// Create an empty string for all cards of heroes and call it cards
let cards = '';





// PART 3
// Create a function called createHeroesArray that takes in an event object
function createHeroesArray(e) {
    e.preventDefault();
    let inputHeroName = document.querySelector('#name').value
    let inputQuote = document.querySelector('#quote').value
    let inputImgURL = document.querySelector('#imgURL').value
    let newHero = {inputHeroName, inputQuote, inputImgURL}
    heroes.unshift(newHero); 
    createCard(); 
    addHero(); 


}

// Prevent the button from doing what it naturally does (redirect to a new page)
//  e.preventDefault();


// Create a Hero constructor that takes in - name, quote, imgURL

function Hero(name, quote, imgURL) {
    this.name = name;
    this.quote = quote;
    this.imgURL = imgURL;

}




// Create a new Hero object that stores the values of each input field (name, quote, imgURL)
// let newHero = {
//     name: '',
//     quote: '',
//     imgURL: ''
// }

    // Push the new object into the heroes array
    // heroes.unshift(newHero); 



    // call the createCard function (you will make this shortly)
    // function createCard(); 

    // call the addHero function (you will make this shortly)
    // function addHero(); 



// PART 4
// Create a function called createCard
function createCard (){
    for(let i=0; i<heroes.length;i++){
        let card = document.createElement("div.card");
        card.className = 'hero-card'; 

        let name = document.createElement("h3");
        let h3 = document.createTextNode(heroes[i].name)
        name.appendChild(h3); 
        card.appendChild(name); 

        let imgURL = document.createElement("img");
        imgURL.src = heroes[i].imgURL; 
        imgURL.className = 'heroImg'; 
        card.appendChild(imgURL); 

        let quote = document.createElement("p");
        let quoteText = document.createTextNode(heroes[i].quote); 
        quote.appendChild(quoteText); 
        card.appendChild(quote); 

        main.appendChild(card); 

    }
    


    // create a loop to go through the heroes array
    // for(let i=0; i<heroes.length;i++){

    // }

        // CREATE A CARD
        //create elements for div.card, h3, img, p
      




        // add a class called hero-card to div.card element
        // card.className = 'hero-card'; 


        // add a class called heroImg to the img element
        // imgURL.className = 'heroImg'; 


        // set attribute src to the img element with the imgURL from the heroes array
        // imgURL.src = heroes[i].imgURL; 

        // create textnode with the hero's name and append it into the h3 element
        // let h3 = document.createTextNode(heroes[i].name)
        // name.appendChild(h3); 

        // create textnode with the hero's quote and append into the p element
        // let quoteText = document.createTextNode(heroes[i].quote); 
        // quote.appendChild(quoteText); 

        // append h3 to card
        // card.appendChild(name); 


        // append img to card
        // card.appendChild(imgURL); 


        // append p to card
        // card.appendChild(quote); 


        // append card to main
        // main.appendChild(card); 

    


}
// PART 5
// create a function called addHero
function addHero(){
    document.getElementsByClassName('.row-main').innerText = '';
     createCard(); 

}

    // clear the main div of any content
// document.getElementsByClassName('.row-main').innerText = ''; 


    // call the createCard function
    // function createCard(); 



// PART 6
// create a function called resetForm 
function resetForm() {
    document.getElementsByTagName("form").reset();  

}

    // select the form tag and use the reset method to clear the content
// document.getElementsByTagName("form").reset();  



// PART 7
// create a function called howToUsePopup that takes in an event object
function howToUsePopup(e) {
    e.preventDefault(); 
    alert("Fill out the form below to add a new hero onto the main section"); 
}
    // Prevent the button from doing what it naturally does (redirect to a new page)
    // e.preventDefault(); 

    // make an alert that will provide the following instructions "Fill out the form below to add a new hero onto the main section"
    
// alert("Fill out the form below to add a new hero onto the main section"); 



// PART 2
//create an event listener to the following:
//submitButton = click, createHeroesArray
submitButton.addEventListener('click', createHeroesArray);
// function createHeroesArray(){

// }

// resetButton = click, resetForm
resetButton.addEventListener('click', resetForm);
// function resetForm() {

// }


// howToUse = click, howToUsePopup
howToUse.addEventListener('click', howToUsePopup);
// function howToUsePopup() {

// }


