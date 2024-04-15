import './styles.css';
import Icon from './images/bob.jpg';

let aboutUsText = `At Doney's, we believe in the power of good food to nourish the body and
soul. Our talented chefs craft each dish with care, infusing flavors
from around the world into every bite. From mouthwatering steaks grilled
to perfection to delicate pastas bursting with flavor, our menu is a
celebration of culinary diversity.`;

let headlineText = `Indulge in Culinary Delights: Experience the Magic of Doney's
Restaurant!`;
if (process.env.NODE_ENV !== 'production') {
  console.log('bob');
}

(function addImage() {
  const content = document.querySelector('#content');
  const img = document.createElement('img');
  const headline = document.createElement('h2');
  const aboutUs = document.createElement('div');
  img.src = Icon;
  aboutUs.textContent = aboutUsText;
  headline.textContent = headlineText;
  content.appendChild(headline);
  content.appendChild(img);
  content.appendChild(aboutUs);
})();
