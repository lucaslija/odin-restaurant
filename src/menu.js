import "./styles.css";

import { splash, footer } from "./template.js";

function setMenu(contentElement) {
  console.log("setMenu called");

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

export default setMenu;