import "./styles.css";

import { splash, footer } from "./template.js";

import dog from "./images/bandana-dog.jpg";
import toast from "./images/french-toast.jpg";
import waiter from "./images/smiling-waiter.jpg";
import roof from "./images/tin-roof.jpg";


function setHome(contentElement) {
  console.log("setHome called");

  contentElement.innerHTML = "";
 
  const contentArray = [];

  // Splash
  contentArray.push(splash);

  // Photogrid
  contentArray.push(getPhotoGrid());

  // Reviews
  contentArray.push(getReviews());

  // Footer
  contentArray.push(footer);

  // Append to DOM
  contentElement.append(...contentArray);
}


function getPhotoGrid() {
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

  return photoGrid;
}


function getReviews() {
  const reviews = document.createElement("div");
  reviews.id = "reviews";

  const guestQuotes = document.createElement("h3");
  guestQuotes.textContent = "Our guests love the Tin Roof!";

  const reviewCards = document.createElement("div");
  reviewCards.id = "review-cards";

  const reviewArray = [
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

  for (let i = 0; i < 3; i++) {
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

  return reviews;
}

export default setHome;