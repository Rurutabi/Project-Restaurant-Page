(()=>{"use strict";class e{constructor(){this.createElement()}createElement(){const e=document.createElement("div");e.classList.add("container"),document.body.appendChild(e);const t=document.createElement("div");t.classList.add("navContainer"),e.appendChild(t);const n=document.createElement("heading");n.classList.add("heading"),t.appendChild(n),n.textContent="Thai food BLA BLA";const a=document.createElement("div");a.classList.add("listContainer"),t.appendChild(a);const d=document.createElement("li");d.textContent="Home";const c=document.createElement("li");c.textContent="Menu";const o=document.createElement("li");o.textContent="Contact",a.appendChild(d),a.appendChild(c),a.appendChild(o)}}class t{constructor(){this.createElement()}createElement(){const e=document.querySelector(".container"),t=document.createElement("div");t.classList.add("home"),e.appendChild(t);const n=document.createElement("div");n.classList.add("homebox"),t.appendChild(n);const a=document.createElement("p");a.classList.add("par"),a.textContent="Thai food is good",n.appendChild(a);const d=document.createElement("p");d.classList.add("par"),d.textContent="Thai food is great",n.appendChild(d);const c=document.createElement("img");c.classList.add("img"),c.src="./images/padthai.jpg",c.alt="Image of Padthai",n.appendChild(c);const o=document.createElement("p");o.classList.add("par"),o.textContent="Order online or visit us",n.appendChild(o)}}new class{constructor(){this.navBar=new e,this.home=new t}},console.log("yoyo")})();