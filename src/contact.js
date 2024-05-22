import "./styles.css";

import { splash, footer } from "./template.js";

import reserved from "./images/reserved-table.jpg";

function setContact(contentElement) {
  console.log("setContact called");

  contentElement.innerHTML = "";

  const contentArray = [];

  // Splash
  contentArray.push(splash);

  // Contact
  contentArray.push(getContact());

  // Footer 
  contentArray.push(footer);

  // Append to DOM
  contentElement.append(...contentArray);
}

function getContact() {
  const contact = document.createElement("div");
  contact.id = "contact";

  const contactTitle = document.createElement("h1");
  contactTitle.id = "contact-title";
  contactTitle.textContent = "CONTACT US";

  const contactMessage = document.createElement("h5");
  contactMessage.id = "contact-message";
  contactMessage.textContent = "to make a reservation, please contact us by phone up to a week in advance"

  const contactInfo = document.createElement("div");
  contactInfo.id = "contact-info";

  const phoneLabel = document.createElement("p");
  phoneLabel.classList.add("contact-label");
  phoneLabel.textContent = "by phone:"
  const phone = document.createElement("p");
  phone.textContent = "(503) 753 2047";
  const emailLabel = document.createElement("p");
  emailLabel.classList.add("contact-label");
  emailLabel.textContent = "by email:";
  const email = document.createElement("p");
  email.textContent = "tinroofcafe@totally-real-email.com";
  const addressLabel = document.createElement("p");
  addressLabel.classList.add("contact-label");
  addressLabel.textContent = "by snail mail:"
  const address = document.createElement("p");
  address.textContent = "1111 NS 11st Ave, Portland, OR 97XXX";
  const contactMethods = [phoneLabel, phone, emailLabel, email, addressLabel, address];

  contactInfo.append(...contactMethods);

  const contactSections = [contactTitle, contactMessage, contactInfo];

  contact.append(...contactSections);
  
  return contact;
}

export default setContact;