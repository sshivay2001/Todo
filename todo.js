var buttons=document.getElementById("btn");
var container=document.getElementsByClassName("container");
var input=document.getElementById("dolist");
var list=document.getElementById("lists");



buttons.addEventListener("click",()=>{
    var p=document.createElement('p');
      list.appendChild(p);
      p.innerHTML=input.value;
      p.className="liser";
      p.addEventListener("click",()=>{
        p.style.textDecoration="line-through";
   })
     p.addEventListener("dblclick",()=>{
         list.removeChild(p);
     })

     input.value="";

       
})

