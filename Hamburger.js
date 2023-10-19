const hamburger = document.querySelector(".hamburger");
const mainmenu = document.querySelector(".main_menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mainmenu.classList.toggle("active");

   
})

document.querySelectorAll(".menu_links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mainmenu.classList.remove("active");
}))