const location = `Welcome to "Doneys", the cozy steak and pasta restaurant nestled in the heart of a bustling neighborhood in downtown Riverdale.

Our restaurant, located at 123 Savory Street, is a hidden gem known for its warm ambiance and mouthwatering dishes. As you stroll down Savory Street, you'll be drawn in by the inviting glow of our storefront, adorned with rustic wooden accents and twinkling fairy lights.

Step inside and you'll find yourself enveloped in the comforting aroma of sizzling steaks and savory pasta sauces. The interior is adorned with vintage decor and plush seating, creating the perfect atmosphere for a memorable dining experience.

Located just a stone's throw away from the picturesque Riverdale Park, "Doneys" offers a charming escape from the hustle and bustle of city life. After enjoying a delectable meal, take a leisurely stroll through the park and soak in the serene beauty of nature.

Whether you're a local resident or a visitor exploring the city, "Doneys" is the perfect destination for a delightful culinary journey. Join us at 123 Savory Street and indulge in the magic of fine dining at "Doneys" restaurant.`;

export default function renderLocation() {
  const contentDiv = document.querySelector('#content');
  const locationPara = document.createElement('p');
  locationPara.classList.add('location-para');

  locationPara.innerHTML = location;
  contentDiv.appendChild(locationPara);
}
