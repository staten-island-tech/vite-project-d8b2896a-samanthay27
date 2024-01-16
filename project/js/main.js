import '../styles/style.css';
import { fooditems } from './menu';


const DOMselectors = {
 changetheme: document.querySelector("#changetheme"),
 cardcontainer: document.querySelector(".cardcontainer"),
 buttons: document.querySelectorAll(".category"),
 all: document.querySelector(".all")
};


DOMselectors.changetheme.addEventListener("click", function () {
 if (document.body.classList.contains("normalmode")) {
   document.body.classList.add("uglymode");
   document.body.classList.remove("normalmode");
 } else {
   document.body.classList.add("normalmode");
   document.body.classList.remove("uglymode");
 }
});


function makecard(arr) {
 DOMselectors.cardcontainer.innerHTML = "";
 arr.forEach((fooditem) => {
   DOMselectors.cardcontainer.insertAdjacentHTML(
     "beforeend",
     `<div class="card">
       <h3 class="name">${fooditem.name}</h3>
       <img src="${fooditem.img}" class="cardimg">
       <h4 class="price">${fooditem.price}</h4>
       <h4 class="calories">${fooditem.calories}</h4>
     </div>`
   );
 });
}


function filtering() {
 DOMselectors.buttons.forEach((btn) => btn.addEventListener("click", function () {
   let category = btn.getAttribute("data-category").toLowerCase();
   let newArr = fooditems.filter((fooditem) => fooditem.tag.toLowerCase() === category);
   makecard(newArr);
 }));
}


filtering();
makecard(fooditems);


DOMselectors.all.addEventListener("click", function(){
 makecard(fooditems)
 //hehehehe says that if the all button is clicked make all of the cards
})









