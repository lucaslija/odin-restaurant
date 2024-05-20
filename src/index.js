import homeContent from "./home.js";

const content = document.getElementById("content");
console.log(homeContent);
console.log(content);
content.append(...homeContent);