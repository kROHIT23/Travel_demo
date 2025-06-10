const menuBtn = document.querySelector(".menubtn");
const navMenu = document.querySelector(".navlinks");

menuBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle("mobilemenu")
})