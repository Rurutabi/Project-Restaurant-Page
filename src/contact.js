export class contact {
  container = document.querySelector(".container");
  constructor() {
    // constructor code
    this.createElement();
  }

  createElement() {
    //home
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    contactContainer.classList.add("hide");
    this.container.appendChild(contactContainer);

    const contactBox = document.createElement("div");
    contactBox.classList.add("contactbox");
    contactContainer.appendChild(contactBox);
    contactBox.textContent = "Hi";
  }
}
