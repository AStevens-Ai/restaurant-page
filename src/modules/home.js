import Icon from '../images/bob.jpg';
import Steak from '../images/steak.jpeg'
import foodOne from '../images/foodOne.jpg'
import foodTwo from '../images/foodTwo.jpeg'
import ingredients from '../images/ingredients.jpg'


let aboutUsText = `At Doney's, we believe in the power of good food to nourish the body and
soul. Our talented chefs craft each dish with care, infusing flavors
from around the world into every bite. From mouthwatering steaks grilled
to perfection to delicate pastas bursting with flavor, our menu is a
celebration of culinary diversity.`;

let headlineText = `Indulge in Culinary Delights - Experience the Magic of Doney's
Restaurant!`;

let aboutDoneysText = `Established by two lifelong friends, Dominic and Emily, Doneys is the culmination of their shared love for good food and warm hospitality. With Dominic's flair for grilling the perfect steak and Emily's expertise in crafting delectable pasta dishes, Doneys offers a dining experience like no other.

Our journey began in the heart of the city, where we transformed a modest space into a cozy restaurant that feels like home. From the moment you step through our doors, you're greeted with the inviting aroma of sizzling steaks and savory sauces simmering on the stove.

At Doneys, we believe in using only the finest ingredients sourced from local producers and farmers. Each steak is hand-selected for its marbling and flavor, ensuring a melt-in-your-mouth experience with every bite. Our pasta dishes are crafted with care, from homemade sauces to freshly rolled noodles, resulting in dishes that are as comforting as they are satisfying.

But Doneys is more than just a restaurant; it's a place where friends and families come together to create cherished memories. Whether you're celebrating a special occasion or simply craving a delicious meal, our friendly staff is here to make your experience unforgettable.
`

let aboutDoneysHeader = `Our Family`

export default function addContentHome() {
    //sections
    const contentDiv = document.querySelector('#content');
    const sectionOne = document.createElement('div')
    const sectionTwo = document.createElement('div')
    const sectionThree = document.createElement('div') 
    const sectionThreeRight = document.createElement('div')
   //assets and text
   const locationButton = document.createElement('button')
    const callButton = document.createElement('button')
    const orderButton = document.createElement('button')
    const img = document.createElement('img');
    const imgTwo = document.createElement('img')
    const foodUno = document.createElement('img');
    const foodDous = document.createElement('img')
    const headline = document.createElement('h2');
    const aboutUs = document.createElement('div');
    const imgDiv = document.createElement('div');
    const aboutDoneys = document.createElement('div')
    const learnBtn = document.createElement('div')
    const aboutHeader = document.createElement('h2')
    const ingredientImg = document.createElement('img')
  
   
   //dom manipulation
   learnBtn.classList.add('button-def', 'button-5', 'learn-btn')
   locationButton.classList.add('button-def', 'button-5', 'location-btn')
   locationButton.innerHTML = "Check Out Our Location"
   learnBtn.innerHTML = 'Learn More About Us'
   aboutDoneys.innerHTML = aboutDoneysText
   aboutDoneys.classList.add('aboutDoneys')
   aboutHeader.classList.add('aboutHeader')
   aboutHeader.innerHTML = aboutDoneysHeader
   ingredientImg.src = ingredients
   sectionThree.classList.add('sectionThree')
   sectionThreeRight.classList.add('sectionThreeRight')
   ingredientImg.classList.add('image', 'ingredientImg')
   orderButton.classList.add('button-def', 'button-5', 'order-btn')
   orderButton.textContent = 'Order Now'
    callButton.classList.add('button-def', 'button-5', 'call-btn')
    callButton.textContent = 'Contact Us'
    foodUno.src = foodOne
    foodUno.classList.add('image', 'foodUno')
    sectionOne.classList.add('sectionOne')
    sectionTwo.classList.add('sectionTwo')
    foodDous.src = foodTwo
    imgDiv.classList.add('imgDiv')
    imgTwo.src = Steak
    imgTwo.classList.add('image', 'imgTwo')
    img.src = Icon;
    img.classList.add('image', 'imgOne')
    aboutUs.textContent = aboutUsText;
    aboutUs.classList.add('aboutUs')
    headline.textContent = headlineText;
    headline.classList.add('headline')
    
    //appending children
    sectionThree.appendChild(ingredientImg)
    sectionThreeRight.appendChild(aboutHeader)
    
    sectionThreeRight.appendChild(aboutDoneys)
    sectionThreeRight.appendChild(learnBtn)
    sectionThreeRight.appendChild(locationButton)
    sectionThree.appendChild(sectionThreeRight)
    imgDiv.appendChild(foodUno)
    imgDiv.appendChild(img);
    imgDiv.appendChild(imgTwo)
    sectionOne.appendChild(headline)
    sectionOne.appendChild(aboutUs)
    sectionOne.appendChild(callButton)
    sectionOne.appendChild(orderButton)
    sectionTwo.appendChild(sectionOne);
    sectionTwo.appendChild(imgDiv);
    contentDiv.appendChild(sectionTwo)
    contentDiv.appendChild(sectionThree)
    
    const nav = document.querySelector('nav');
    function toggleSidebar() {
      if (window.innerWidth <= 700) {
        nav.style.height = '100vh';
        nav.style.width = 'auto';
      } else {
        nav.style.height = 'auto';
      }
    }
  
  
    toggleSidebar();
    window.addEventListener('resize', toggleSidebar);
  }
  
