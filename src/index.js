import setHome from "./home.js";
import setContact from "./contact.js";
import setMenu from "./menu.js";

const homeBtn = document.getElementById("home");
const contactBtn = document.getElementById("contact");
const menuBtn = document.getElementById("menu");
const btnArray = [homeBtn, contactBtn, menuBtn];

const content = document.getElementById("content");

setHome(content);
homeBtn.classList.add("active");

homeBtn.addEventListener("click", () => {
  setHome(content);
  toggleActive(event.target);
});
contactBtn.addEventListener("click", () => {
  setContact(content);
  toggleActive(event.target);
});
menuBtn.addEventListener("click", () => {
  setMenu(content)
  toggleActive(event.target);
});

function toggleActive(targetBtn) {
  // console.log("toggleActive called")
  btnArray.forEach((btn) => btn.classList.remove("active"));
  targetBtn.classList.add("active");
}