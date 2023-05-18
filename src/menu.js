export class menu {
  container = document.querySelector(".container");
  constructor() {
    // constructor code
    this.createMenu();
  }

  createMenu() {
    //home
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    menuContainer.classList.add("hide");
    menuContainer.textContent = "testing";
    this.container.appendChild(menuContainer);
  }
}
