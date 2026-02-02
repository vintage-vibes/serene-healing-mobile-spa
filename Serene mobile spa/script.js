const menulink = document.querySelector(".mobile-links")
const icon = document.querySelector(".burger-menu")
const navlinks = document.querySelectorAll(".mobile-links a")

icon.addEventListener("click",()=>{
    menulink.classList.toggle("active")
    icon.classList.toggle("active")
    
})

navlinks.forEach(link => {
  link.addEventListener("click", () => {
    menulink.classList.remove("active");
    icon.classList.remove("active");
  });
});