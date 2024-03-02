import contentArray from "./home.js";

const content = document.getElementById("content");
console.log(contentArray);
console.log(content);
content.append(...contentArray);