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



const track = document.querySelector('.yt-track');

document.querySelector('.right').onclick = () => {
  track.scrollBy({ left: 300, behavior: 'smooth' });
};

document.querySelector('.left').onclick = () => {
  track.scrollBy({ left: -300, behavior: 'smooth' });
};
