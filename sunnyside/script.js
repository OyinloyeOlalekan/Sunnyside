const toggleBtn = document.querySelector("#togglebtn");
const navmenu = document.querySelector("nav");
const body = document.querySelector("body");
toggleBtn.addEventListener("click",() => {
    navmenu.classList.toggle("open");
  
})