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



const tracker = document.querySelector('.yt-track');

document.querySelector('.right').onclick = () => {
  tracker.scrollBy({ left: 300, behavior: 'smooth' });
};

document.querySelector('.left').onclick = () => {
  tracker.scrollBy({ left: -300, behavior: 'smooth' });
};



const track = document.getElementById('sliderTrack');

let isDragging = false;
let startX;
let scrollLeft;
let animationPausedByDrag = false;

// Pause animation when user interacts
function pauseAnimation() {
  track.style.animationPlayState = 'paused';
  animationPausedByDrag = true;
}

// Resume animation after user stops interacting
function resumeAnimation() {
  setTimeout(() => {
    if (!isDragging) {
      track.style.animationPlayState = 'running';
      animationPausedByDrag = false;
    }
  }, 800); // Small delay so it feels natural
}

// Mouse Drag Support
track.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
  pauseAnimation();
});

track.addEventListener('mouseleave', () => {
  isDragging = false;
  resumeAnimation();
});

track.addEventListener('mouseup', () => {
  isDragging = false;
  resumeAnimation();
});

track.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 2; // Scroll speed multiplier
  track.scrollLeft = scrollLeft - walk;
});

// Touch Support (for mobile swipe)
track.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
  pauseAnimation();
});

track.addEventListener('touchend', () => {
  isDragging = false;
  resumeAnimation();
});

track.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  
  const x = e.touches[0].pageX - track.offsetLeft;
  const walk = (x - startX) * 2;
  track.scrollLeft = scrollLeft - walk;
});

// Optional: Click on image to open in lightbox (you can expand this)
track.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    const imgSrc = e.target.src;
    console.log('Image clicked:', imgSrc);
    // You can add a lightbox here later
  }
});

