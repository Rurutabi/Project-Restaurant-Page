import { nav } from "./nav.js";
import { home } from "./home.js";

export class createWeb {
  constructor() {
    this.navBar = new nav();
    this.home = new home();
  }
}
