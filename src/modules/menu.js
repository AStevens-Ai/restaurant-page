class MenuItem {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
class Hours {
    constructor(day, hours) {
        this.day = day;
        this.hours = hours
    }
}

const storeHours = [
    new Hours("Monday", "9:00 AM - 8:00 PM"),
    new Hours("Tuesday", "9:00 AM - 8:00 PM"),
    new Hours("Wednesday", "9:00 AM - 8:00 PM"),
    new Hours("Thursday", "9:00 AM - 8:00 PM"),
    new Hours("Friday", "9:00 AM - 10:00 PM"),
    new Hours("Saturday", "10:00 AM - 10:00 PM"),
    new Hours("Sunday", "10:00 AM - 6:00 PM")
];

const drinkItems = [
    new MenuItem(
        "Soda",
        2.99,
        "Assorted soft drinks available, including Coke, Pepsi, Sprite, and more."
      ),
      new MenuItem(
        "Iced Tea",
        2.49,
        "Refreshing iced tea served with lemon slices."
      ),
      new MenuItem(
        "Coffee",
        2.99,
        "Freshly brewed coffee made from premium beans."
      ),
      new MenuItem(
        "House Wine (Glass)",
        6.99,
        "Enjoy a glass of our house wine, available in red or white."
      ),
      new MenuItem(
        "Craft Beer",
        5.99,
        "Choose from a selection of locally brewed craft beers."
      ),
      new MenuItem(
        "Classic Martini",
        9.99,
        "Indulge in a classic martini made with premium gin or vodka, vermouth, and garnished with an olive."
      ),
      new MenuItem(
        "Margarita",
        8.99,
        "Satisfy your cravings with a tangy margarita, made with tequila, lime juice, and triple sec."
      ),
      new MenuItem(
        "Old Fashioned",
        10.99,
        "Experience the timeless appeal of an old fashioned cocktail, crafted with bourbon or rye whiskey, sugar, and bitters."
      )
]

const menuItems = [
    new MenuItem(
      "Ribeye Steak",
      25.99,
      "Juicy ribeye steak cooked to perfection.",
    ),
    new MenuItem(
      "Fettuccine Alfredo",
      16.99,
      "Creamy fettuccine pasta tossed in Alfredo sauce.",
    ),
    new MenuItem(
      "Filet Mignon",
      29.99,
      "Tender filet mignon served with your choice of side.",
    ),
    new MenuItem(
      "Spaghetti Bolognese",
      14.99,
      "Classic spaghetti pasta topped with savory Bolognese sauce.",
      "Pasta"
    ),
    new MenuItem(
      "New York Strip",
      27.99,
      "Flavorful New York strip steak grilled to perfection.",
    ),
    new MenuItem(
      "Penne Arrabiata",
      15.99,
      "Penne pasta tossed in a spicy Arrabiata sauce.",
    ),
    new MenuItem(
        "Grilled Salmon",
        18.99,
        "Fresh salmon fillet grilled to perfection and served with a side of vegetables."
      ),
      new MenuItem(
        "Linguine Carbonara",
        17.99,
        "Linguine pasta tossed in a creamy carbonara sauce with crispy bacon."
      ),
      new MenuItem(
        "T-Bone Steak",
        26.99,
        "Generous T-bone steak cooked to your liking and accompanied by your choice of side."
      ),
      new MenuItem(
        "Vegetable Lasagna",
        14.99,
        "Layers of lasagna noodles, marinara sauce, and assorted vegetables, topped with melted cheese."
      ),
      new MenuItem(
        "Chicken Marsala",
        19.99,
        "Tender chicken breasts sautéed with mushrooms in a Marsala wine sauce, served with mashed potatoes."
      ),
      new MenuItem(
        "Shrimp Scampi",
        20.99,
        "Plump shrimp sautéed in garlic butter and white wine, served over a bed of linguine."
      ),
      new MenuItem(
        "Ribeye Steak",
        25.99,
        "Juicy ribeye steak cooked to perfection.",
      ),
      new MenuItem(
        "Fettuccine Alfredo",
        16.99,
        "Creamy fettuccine pasta tossed in Alfredo sauce.",
      ),
      new MenuItem(
        "Filet Mignon",
        29.99,
        "Tender filet mignon served with your choice of side.",
      ),
      new MenuItem(
        "Spaghetti Bolognese",
        14.99,
        "Classic spaghetti pasta topped with savory Bolognese sauce.",
        "Pasta"
      ),
      new MenuItem(
        "New York Strip",
        27.99,
        "Flavorful New York strip steak grilled to perfection.",
      ),
      new MenuItem(
        "Penne Arrabiata",
        15.99,
        "Penne pasta tossed in a spicy Arrabiata sauce.",
      ),
  ];
  
function renderMenu() {
//sections

const contentDiv = document.querySelector('#content')
 
//create divs specific to menu
 const menuItemsDiv = document.createElement('div')
 const drinkItemsDiv = document.createElement('div')
 const hoursDiv = document.createElement('div')

 //headers
 const menuHeader = document.createElement('h2')
 const drinkHeader = document.createElement('h2')
 const hourHeader = document.createElement('h2')

 menuHeader.innerHTML = 'Menu'
 drinkHeader.innerHTML = 'Drink Menu'
 hourHeader.innerHTML = 'Store Hours'
 menuHeader.classList.add('menu-header')
 drinkHeader.classList.add('drink-header')
 hourHeader.classList.add('hour-header')
 menuItemsDiv.classList.add('menu-container')
 drinkItemsDiv.classList.add('drinks-container')
 hoursDiv.classList.add('hour-container')

 contentDiv.appendChild(drinkHeader)
 contentDiv.appendChild(menuHeader)
 contentDiv.appendChild(hourHeader)
//menu items render per array object
menuItems.forEach(item => {
   //create container to hold each item individually
    const menuItemDiv = document.createElement('div')
    menuItemDiv.classList.add('menu-item')
    
    //create elements for name, price, and description.
    const nameElement = document.createElement('h3')
    nameElement.classList.add('menu-text')
    nameElement.textContent = item.name;

    const priceElement = document.createElement('p')
    priceElement.textContent = `$${item.price.toFixed(2)}`;
    priceElement.classList.add('menu-price')

    const descriptionElement = document.createElement('p')
    descriptionElement.textContent = item.description;
    descriptionElement.classList.add('menu-text')

    menuItemDiv.appendChild(nameElement)
    menuItemDiv.appendChild(priceElement)
    menuItemDiv.appendChild(descriptionElement)
    
    menuItemsDiv.appendChild(menuItemDiv)
    contentDiv.appendChild(menuItemsDiv)
})

drinkItems.forEach(item => {
    const drinkItemDiv = document.createElement('div')
    drinkItemDiv.classList.add('menu-item')

    const drinkNameElement = document.createElement('h3')
    drinkNameElement.classList.add('menu-text')
    drinkNameElement.textContent = item.name

    const drinkPriceElement = document.createElement('p')
    drinkPriceElement.classList.add('menu-price')
    drinkPriceElement.textContent = `$${item.price.toFixed(2)}`;

    const drinkDescriptionElement = document.createElement('p')
    drinkDescriptionElement.classList.add('menu-text')
    drinkDescriptionElement.textContent = item.description

    drinkItemDiv.appendChild(drinkNameElement)
    drinkItemDiv.appendChild(drinkPriceElement)
    drinkItemDiv.appendChild(drinkDescriptionElement)

    drinkItemsDiv.appendChild(drinkItemDiv)
    
    contentDiv.appendChild(drinkItemsDiv)
})


storeHours.forEach(item => {
    const hourDiv = document.createElement('div')
    hourDiv.classList.add('menu-item')

    const hourDayElement = document.createElement('h3')
    hourDayElement.classList.add('menu-text')
    hourDayElement.textContent = item.day

    const hoursElement = document.createElement('p')
    hoursElement.classList.add('menu-price')
    hoursElement.textContent = `'${item.hours}'`;


    hourDiv.appendChild(hourDayElement)
    hourDiv.appendChild(hoursElement)
    

    hoursDiv.appendChild(hourDiv)
    
    contentDiv.appendChild(hoursDiv)
})
}


export default renderMenu;
export {storeHours}