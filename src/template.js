import icon from "./images/shed-icon.png";

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

// Footer 

const footer = document.createElement("footer");
const copyright = document.createElement("p");
copyright.id = "copyright";
copyright.innerHTML = "&copy; Tin Roof Cafe 2024 | site by&nbsp;";
const githubLink = document.createElement("a");
githubLink.href = "https://lucaslija.github.io";
githubLink.innerText = "lucas lija";
footer.appendChild(copyright);
footer.appendChild(githubLink);

// EXPORT
export {
  splash,
  footer
}