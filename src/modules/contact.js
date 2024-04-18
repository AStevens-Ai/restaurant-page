// formModule.js
class Hours {
  constructor(day, hours) {
    this.day = day;
    this.hours = hours;
  }
}

function setupForm() {
  const storeHours = [
    new Hours('Monday', '9:00 AM - 8:00 PM'),
    new Hours('Tuesday', '9:00 AM - 8:00 PM'),
    new Hours('Wednesday', '9:00 AM - 8:00 PM'),
    new Hours('Thursday', '9:00 AM - 8:00 PM'),
    new Hours('Friday', '9:00 AM - 10:00 PM'),
    new Hours('Saturday', '10:00 AM - 10:00 PM'),
    new Hours('Sunday', '10:00 AM - 6:00 PM'),
  ];
  const contentDiv = document.querySelector('#content');
  const divContainer = document.createElement('div');
  divContainer.classList.add('contactUs-container');

  // Create form element
  const form = document.createElement('form');

  // Create input element for name
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name: ';
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameLabel.appendChild(nameInput);
  form.appendChild(nameLabel);
  nameInput.id = 'name';

  // Create input element for email
  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email: ';
  const emailInput = document.createElement('input');
  emailInput.id = 'email';
  emailInput.setAttribute('type', 'email');
  emailLabel.appendChild(emailInput);
  form.appendChild(emailLabel);

  const textLabel = document.createElement('label');
  textLabel.textContent = 'Reason: ';
  const textArea = document.createElement('textarea');
  textArea.placeholder = 'What can we help you with?';
  textLabel.appendChild(textArea);
  form.appendChild(textLabel);

  // Create submit button
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);

  // Add form to container
  divContainer.appendChild(form);

  const hoursDiv = document.createElement('div');
  hoursDiv.classList.add('hour-containerTwo');
  storeHours.forEach((item) => {
    const hourDiv = document.createElement('div');
    hourDiv.classList.add('menu-item');

    const hourDayElement = document.createElement('h3');
    hourDayElement.textContent = item.day;
    hourDayElement.classList.add('menu-text');

    const hoursElement = document.createElement('p');
    hoursElement.textContent = `Hours: ${item.hours}`;
    hoursElement.classList.add('menu-price');
    hourDiv.appendChild(hourDayElement);
    hourDiv.appendChild(hoursElement);

    hoursDiv.appendChild(hourDiv);
    divContainer.appendChild(hoursDiv);
    contentDiv.appendChild(divContainer);
  });

  // Add event listener for form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert(
      `Thank you for contacting us ${nameInput.value}! We will send an email to ${emailInput.value} to get back to you!`
    );

    nameInput.value = '';
    emailInput.value = '';
    textArea.value = '';
  });
}

export { setupForm };
