import "./styles.css";

import { splash, footer } from "./template.js";

import biscuits from "./images/biscuits-and-gravy.jpeg";
import frenchToast from "./images/french-toast.jpg";
import benedict from "./images/eggs-benedict.jpeg";

function setMenu(contentElement) {
  console.log("setMenu called");

  contentElement.innerHTML = "";

  const contentArray = [];

  // Splash
  contentArray.push(splash);

  // Photos
  contentArray.push(getPhotos());

  // Menu
  contentArray.push(getMenu());

  // Footer 
  contentArray.push(footer);

  // Append to DOM
  contentElement.append(...contentArray);
}

function getPhotos() {
  const photos = document.createElement("div");
  photos.id = "photos";

  const biscuitImg = document.createElement("img");
  biscuitImg.src = biscuits;
  biscuitImg.alt = "mouth-watering biscuits with maple smoked bacon gravy";

  const frenchToastImg = document.createElement("img");
  frenchToastImg.src = frenchToast;
  frenchToastImg.alt = "sweet orange-zested french toast with fresh berries";

  const benedictImg = document.createElement("img");
  benedictImg.src = benedict;
  benedictImg.alt = "classic eggs benedict with sliced ham, hollandaise, and green onions";
  
  const foodImages = [biscuitImg, frenchToastImg, benedictImg];
  photos.append(...foodImages);

  return photos;
}

function getMenu() {
  const menu = document.createElement("div");
  menu.id = "menu";

  const menuTitle = document.createElement("h2");
  menuTitle.id = "menu-title";
  menuTitle.textContent = "BRUNCH";

  const menuHours = document.createElement("h3");
  menuHours.id = "menu-hours";
  menuHours.textContent = "served 8 am - 2 pm";

  const menuInfo = document.createElement("p");
  menuInfo.id = "menu-info";
  menuInfo.textContent = "please inquire with your server about any substitutions you may require";

  const cards = document.createElement("div");
  cards.id = "menu-cards";

  const menuArray = [
    {
      "name": "Biscuits and Gravy",
      "blurb": "Fresh-baked buttermilk biscuits smothered in either our delicious bacon gravy or our mouth-watering mushroom gravy.",
      "cost": "$13.99"
    },
    {
      "name": "French Toast",
      "blurb": "Decadent orange-zested french toast topped with fresh berries and drizzled with real maple syrup.",
      "cost": "$14.99"
    },
    {
      "name": "Eggs Benedict",
      "blurb": "Perfectly poached eggs served on top of Canadia bacon and an English muffin, then covered in house-made hollandaise sauce.",
      "cost": "$17.99"
    }
  ];

  menuArray.forEach((item) => {
    const card = getCard(item.name, item.blurb, item.cost);
    cards.append(card);
  });

  menu.append(menuTitle, menuHours, menuInfo, cards);

  return menu;
}

function getCard(name, blurb, cost) {
  const card = document.createElement("div");
  card.classList.add("menu-card");
  const title = document.createElement("h2");
  title.classList.add("card-title");
  title.textContent = name;
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = blurb;
  const cardCost = document.createElement("p");
  cardCost.classList.add("card-cost");
  cardCost.textContent = cost;
  card.append(title, cardText, cardCost);

  return card;
}

export default setMenu;