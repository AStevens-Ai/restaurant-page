import john from '../images/john.jpg';

const aboutUsText = `
Welcome to Doney's, where culinary excellence meets warm hospitality. Situated in the heart of Knoxville, we are proud to offer an unforgettable dining experience that tantalizes the taste buds and leaves a lasting impression.


At Doney's, our story is one of passion, dedication, and a love for fine dining. Founded by John Doe, our restaurant was born out of a desire to create a haven for food enthusiasts seeking exceptional cuisine in a welcoming atmosphere.


At the core of Doney's philosophy is a commitment to excellence in every aspect of our restaurant. We believe in sourcing the finest ingredients, crafting each dish with precision and care, and providing impeccable service to our valued guests.


Indulge in a culinary journey at Doney's, where steak and pasta take center stage. Our menu showcases a tantalizing array of dishes, expertly prepared by our talented chefs. From succulent, perfectly-grilled steaks to flavorful, handcrafted pasta creations, each bite is a celebration of culinary artistry.
`;

const aboutUsTextTwo = `Quality is paramount at Doney's. We take pride in partnering with local suppliers and farmers to ensure the freshest ingredients make their way to your plate. Every dish is thoughtfully curated to deliver an unparalleled dining experience that exceeds your expectations.


Step into our inviting space and be transported to a world of elegance and charm. With its cozy ambiance, warm lighting, and attentive staff, Doney's offers the perfect setting for intimate dinners, celebrations, and gatherings with loved ones.


Behind every exceptional dining experience is a team of dedicated professionals, and at Doney's, we're fortunate to have the best in the business. From our skilled chefs who bring creativity and passion to the kitchen to our friendly servers who ensure your every need is met, our team is committed to making your visit memorable.


Whether you're craving a juicy steak cooked to perfection or craving a comforting bowl of pasta, Doney's invites you to join us for an unforgettable dining experience. Come savor the flavors, unwind in our welcoming ambiance, and create lasting memories with us. We look forward to serving you soon at Doney's.`;

export default function renderAboutUs() {
  const contentDiv = document.querySelector('#content');
  const aboutUsContainer = document.createElement('div');
  const textDiv = document.createElement('p');
  const image = document.createElement('img');
  const textOverImage = document.createElement('h2');

  textDiv.classList.add('text-div');
  aboutUsContainer.classList.add('aboutUs-container');
  image.classList.add('image-aboutUs');
  textDiv.innerHTML = aboutUsText + '<br><br>' + aboutUsTextTwo;
  image.src = john;
  textOverImage.innerHTML = 'Founder, John Bobley Doe';
  textOverImage.classList.add('image-hTwo');

  aboutUsContainer.appendChild(textDiv);
  aboutUsContainer.appendChild(image);
  aboutUsContainer.appendChild(textOverImage);
  contentDiv.appendChild(aboutUsContainer);
}
