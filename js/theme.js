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

 document.querySelector(".theme2").addEventListener("click",function (){
   if (document.body.classList.contains("normal")) {
      document.body.classList.add("warmblack");
      document.body.classList.remove("normal")
   } else{
       document.body.classList.add("normal");
       document.body.classList.remove("warmblack");
 }});

 document.querySelector(".theme3").addEventListener("click",function (){
   if (document.body.classList.contains("normal")) {
      document.body.classList.add("coolblack");
      document.body.classList.remove("normal")
   } else{
       document.body.classList.add("normal");
       document.body.classList.remove("coolblack");
 }});
 
document.querySelector(".theme4").addEventListener("click",function (){
   if (document.body.classList.contains("normal")) {
      document.body.classList.add("assault");
      document.body.classList.remove("normal")
   } else{
       document.body.classList.add("normal");
       document.body.classList.remove("assault");
 }});
