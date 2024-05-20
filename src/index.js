import setHome from "./home.js";
import setContact from "./contact.js";
import setMenu from "./menu.js";

const homeBtn = document.getElementById("home");
const contactBtn = document.getElementById("contact");
const menuBtn = document.getElementById("menu");

const content = document.getElementById("content");

setHome(content);

homeBtn.addEventListener("click", () => {setHome(content)});
contactBtn.addEventListener("click", () => {setContact(content)});
menuBtn.addEventListener("click", () => {setMenu(content)});