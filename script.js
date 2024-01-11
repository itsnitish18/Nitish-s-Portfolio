let bars = document.querySelector(".bar");
let ul = document.querySelector("ul");
bars.addEventListener("click",()=>{
    ul.classList.toggle("showdata");
    console.log(ul);
})
