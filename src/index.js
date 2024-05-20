import setHomeContent from "./home.js";

const content = document.getElementById("content");
const homeContent = setHomeContent();
content.append(...homeContent);