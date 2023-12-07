import { filter, DOMselectors, selectors } from "./dom";

function clearfields() {
 DOMselectors.container.innerHTML = "";
}

// function makeCards(array) {
//   array.forEach((x) => {
//     DOMselectors.container.insertAdjacentHTML(
//       "beforeend", `
//         <div class="card">
//           <h3 class="name">${x.name}</h3>
//           <img class="img" src="${x.img}">
//           <h4 class="price">${x.price}</h4>
//           <h4 class="calories">$${x.calories}</h4>
//         </div>`
//     );
//   });
// };

DOMSelectors.bread.addEventListener("click", function(event){
clearfields()
const printbread = categories.filter((menu) => menu.tag === "bread");
ehe(printbread)
});

DOMSelectors.cake.addEventListener("click", function(event){
   event.preventDefault();
   function clearfields(){
       DOMSelectors.container.innerHTML="";
   }
   clearfields()
   function help(){
       const printbread = menu.filter((menu) => menu.tag === "cake");
       printcake.forEach((menu)=>
   {const ehe =
       `<div class="container">
       <div class="card">
           <h3 class = "name">${x.name}</h3>
           <img src="${x.img}" class="img">
           <h4 class = ${x.price}>Price</h4>
           <h4 class = ${x.calories}></h4>
       </div> 
   </div>`
   DOMSelectors.container.insertAdjacentHTML(
       "beforeend",
       ehe,
      
   )})}
   help()
});

DOMSelectors.pastry.addEventListener("click", function(event){
   event.preventDefault();
   function clearfields(){
       DOMSelectors.container.innerHTML="";
   }
   clearfields()
   function help(){
       const printpastry = menu.filter((menu) => menu.tag === "pastry");
       printpastry.forEach((menu)=>
   {const ehe =
       `<div class="container">
       <div class="card">
           <h3 class = "name">${x.name}</h3>
           <img src="${x.img}" class="img">
           <h4 class = ${x.price}>Price</h4>
           <h4 class = ${x.calories}></h4>
       </div> 
   </div>`
   DOMSelectors.container.insertAdjacentHTML(
       "beforeend",
       ehe,     
   )})}
 help()
});

DOMSelectors.coffee.addEventListener("click", function(event){
   event.preventDefault();
   function clearfields(){
       DOMSelectors.container.innerHTML="";
   }
   clearfields()
   function help(){
       const printcoffee = menu.filter((menu) => menu.tag === "coffee");
       printcoffee.forEach((menu)=>
   {const ehe =
       `<div class="container">
       <div class="card">
           <h3 class = "name">${x.name}</h3>
           <img src="${x.img}" class="img">
           <h4 class = ${x.price}>Price</h4>
           <h4 class = ${x.calories}></h4>
       </div> 
   </div>`
   DOMSelectors.container.insertAdjacentHTML(
       "beforeend",
       ehe,    
   )})}
   help()
});

DOMSelectors.tea.addEventListener("click", function(event){
   event.preventDefault();
   function clearfields(){
       DOMSelectors.container.innerHTML="";
   }
   clearfields()
   function help(){
       const printtea = menu.filter((menu) => menu.tag === "tea");
       printtea.forEach((category)=>
   {const help =
       `<div class="container">
       <div class="card">
            <h3 class = "name">${x.name}</h3>
           <img src="${x.img}" class="img">
           <h4 class = ${x.price}>Price</h4>
           <h4 class = ${x.calories}></h4>
       </div> 
   </div>`
   DOMSelectors.container.insertAdjacentHTML(
       "beforeend",
       ehe,  
   )})}
   help()
});

DOMSelectors.blended.addEventListener("click", function(event){
   event.preventDefault();
   function clearfields(){
       DOMSelectors.container.innerHTML="";
   }
   clearfields()
   function help(){
       const printblended = menu.filter((menu) => menu.tag === "blended");
       printblended.forEach((menu)=>
   {const help =
       `<div class="container">
       <div class="card">
            <h3 class = "name">${x.name}</h3>
           <img src="${x.img}" class="img">
           <h4 class = ${x.price}>Price</h4>
           <h4 class = ${x.calories}></h4>
       </div> 
   </div>`
   DOMSelectors.container.insertAdjacentHTML(
       "beforeend",
       ehe,
   )})}
   help()
  
DOMselectors.cake.addEventListener("click", function(event){
 clearfields()
 const printcake = menu.filter((menu) => menu.tag === "cake")
 ehe(printcake)
});

let buttons = document.querySelectorAll('button');
buttons.forEach((btn) => btn.addEventListener("click", function () {
 let type = btn.textContent.toLowerCase();
 let newarray = filter.find(f => f[0].tag === type);
 clearfields();
 makeCards(newarray);
}));
