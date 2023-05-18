export class click {
  home = document.querySelector(".home");
  menu = document.querySelector(".menu");
  contact = document.querySelector(".contact");
  homeContainer = document.querySelector(".home-container");
  menuContainer = document.querySelector(".menu-container");
  constructor() {
    this.togglePage();
  }

  togglePage() {
    this.home.addEventListener("click", () => {
      this.menuContainer.classList.add("hide");
      this.homeContainer.classList.remove("hide");
      //   this.contact.classList.add("hide");
    });

    this.menu.addEventListener("click", () => {
      this.homeContainer.classList.add("hide");
      this.menuContainer.classList.remove("hide");
      //   this.contact.classList.add("hide");
    });
  }
}
