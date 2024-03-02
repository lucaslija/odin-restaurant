import "./styles.css";

import icon from "./images/shed-icon.png";
import dog from "./images/bandana-dog.jpg";
import toast from "./images/french-toast.jpg";
import waiter from "./images/smiling-waiter.jpg";
import roof from "./images/tin-roof.jpg";

const content = document.getElementById("content");
const contentArray = [];

// Splash

const splash = document.createElement("div");
splash.id = "splash";

const splashLogo = document.createElement("div");
splashLogo.id = "splash-logo";
const iconImg = document.createElement("img");
iconImg.src = icon;
iconImg.alt = "Tin Roof Cafe Logo";
iconImg.classList.add("logo");
const name = document.createElement("h1");
name.textContent = "The Tin Roof Cafe";
splashLogo.appendChild(iconImg);
splashLogo.appendChild(name);

const subtitle = document.createElement("h2");
subtitle.textContent = "brunch for humans (and their furry friends) since 2000";

splash.appendChild(splashLogo);
splash.appendChild(subtitle);
contentArray.push(splash);

// Photogrid

const photoGrid = document.createElement("div");
photoGrid.id = "photogrid";

const dogImg = document.createElement("img");
dogImg.src = dog;
dogImg.alt = "happy dog wearing a bandana";
dogImg.classList.add("photo-square");

const toastImg = document.createElement("img");
toastImg.src = toast;
toastImg.alt = "french toast";
toastImg.classList.add("photo-square");

const serverImg = document.createElement("img");
serverImg.src = waiter;
serverImg.alt = "smiling server";
serverImg.classList.add("photo-square");

const roofImg = document.createElement("img");
roofImg.src = roof;
roofImg.alt = "rain on a tin roof";
roofImg.classList.add("photo-square");

const gridImages = [dogImg, toastImg, serverImg, roofImg];

photoGrid.append(...gridImages);
contentArray.push(photoGrid);

// Reviews

const reviews = document.createElement("div");
reviews.id = "reviews";

const guestQuotes = document.createElement("h3");
guestQuotes.textContent = "Our guests love the Tin Roof.";

const reviewCards = document.createElement("div");
reviewCards.id = "review-cards";

reviewArray = [
  {
    text: "I love their jam so much I bought some to keep at home. But the vibes are so good in the restaurant, I swear it tastes even better there!",
    name: "Greg Jameson"
  },
  {
    text: "Fantastic service. Our server, Vic, was like a Ritz Carlton waiter in jeans and flannel.",
    name: "Margaret Cho"
  },
  {
    text: "I love the brunch at Tin Roof, and my pup Toast does too!",
    name: "Hasan Sindhu"
  }
]

for (i = 0; i < 3; i++) {
  const card = document.createElement("div");
  card.classList.add("card");

  const p = document.createElement("p");
  p.textContent = reviewArray[i].text;

  const name = document.createElement("h4");
  name.classList.add("name");
  name.textContent = reviewArray[i].name;

  card.appendChild(p);
  card.appendChild(name);

  reviewCards.appendChild(card);
}

reviews.appendChild(guestQuotes);
reviews.appendChild(reviewCards);
contentArray.push(reviews);

// Footer 

footer = document.createElement("footer");
copyright = document.createElement("p");
copyright.id = "copyright";
copyright.textContent = "&copy; Tin Roof Cafe 2024 | site by ";
githubLink = document.createElement("a");
githubLink.href = "https://lucaslija.github.io";
githubLink.textContent = "lucas lija";
footer.appendChild(copyright);
footer.appendChild(githubLink);
contentArray.push(footer);

export default contentArray;