import '../styles.css';
import '../buttons.css'
import addContentHome from './home';
import Doneys from '../images/doneys.svg'
import renderMenu from './menu';



if (process.env.NODE_ENV !== 'production') {
  console.log('bob');
}

function renderPage(){
  const headerDiv = document.querySelector('.header')
  const logo = document.createElement('img')
  const contentDiv = document.querySelector('#content');
  logo.src = Doneys
  logo.classList.add('image', 'logo')
  headerDiv.appendChild(logo)
  contentDiv.innerHTML = ''
  showHomeContent();
}


function showHomeContent() {
  const contentDiv = document.querySelector('#content'); 
  contentDiv.innerHTML = ''
  addContentHome()
}

function showMenuContent() {
  const contentDiv = document.querySelector('#content'); 
  contentDiv.innerHTML = ''
  renderMenu()
}

function showContactContent() {
  const contentDiv = document.querySelector('#content'); 
  contentDiv.innerHTML = ''
  contentDiv.innerHTML = 5322439
}
function showAboutContent() {
  const contentDiv = document.querySelector('#content'); 
  contentDiv.innerHTML = ''
  contentDiv.innerHTML = 'About'
}

function showLocationContent() {
  const contentDiv = document.querySelector('#content'); 
  contentDiv.innerHTML = ''
  contentDiv.innerHTML = 'Location'
}

document.addEventListener('DOMContentLoaded', function() {
  // Render the page when the DOM is fully loaded
  renderPage();

  // Add event listeners to navigation buttons
  document.querySelector('.home-btn').addEventListener('click', showHomeContent);
  document.querySelector('.menu-btn').addEventListener('click', showMenuContent);
  document.querySelector('.contact-btn').addEventListener('click', showContactContent);
  document.querySelector('.about-btn').addEventListener('click', showAboutContent)
  document.querySelector('.location-btn').addEventListener('click', showLocationContent)
});

