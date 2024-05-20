import "./styles.css";

import { splash, footer } from "./template.js";

import reserved from "./images/reserved-table.jpg";

function setContact(contentElement) {
  console.log("setContact called");

  contentElement.innerHTML = "";

  const contentArray = [];

  // Splash
  contentArray.push(splash);

  // Photogrid

  // Reviews

  // Footer 
  contentArray.push(footer);

  // Append to DOM
  contentElement.append(...contentArray);
}

export default setContact;