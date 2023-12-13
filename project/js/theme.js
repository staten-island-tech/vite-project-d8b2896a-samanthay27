document.querySelector(".theme").addEventListener("click",function (){
   if (document.body.classList.contains("normal")) {
      document.body.classList.add("warmwhite");
      document.body.classList.remove("normal")
   } else{
       document.body.classList.add("normal");
       document.body.classList.remove("warmwhite");
 }});
 
 document.querySelector(".theme1").addEventListener("click",function (){
   if (document.body.classList.contains("normal")) {
      document.body.classList.add("coolwhite");
      document.body.classList.remove("normal")
   } else{
       document.body.classList.add("normal");
       document.body.classList.remove("coolwhite");
 }});

