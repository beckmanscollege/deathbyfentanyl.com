const countUp = document.getElementsByClassName('count-up')[0];
let count = parseInt(localStorage.getItem('count')) || 11600; // get count from localStorage or default to 11667
countUp.textContent = count; // set initial count

setInterval(() => {
  count++;
  countUp.textContent = count;
  localStorage.setItem('count', count); // save count to localStorage
}, 7000);

const zoomElement = document.querySelector(".count-up");
let zoom = 1;
const ZOOM_SPEED = 0.3;

document.addEventListener("wheel", function(e) {
  if (e.deltaY > 0) {
    zoom += ZOOM_SPEED;
  } else {
    zoom -= ZOOM_SPEED;
  }
  zoom = Math.min(Math.max(zoom, 1), 1100);
  zoomElement.style.transform = `scale(${zoom})`;
});

const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

let canvasOpacity = 0;

const frameCount = 1031;
const currentFrame = index => (
  `https://cdn.glitch.global/a377aefd-7659-4380-9bd1-d19882027404/DBF${index.toString().padStart(4, '0')}.png`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width=1920;
canvas.height=1080;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

const fadeInStart = 200; // Set the scroll position to fade in the element

const fadeInEnd = 300; // Set the end position of the fade in transition


window.addEventListener('scroll', () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))

  // Fade in/out the element at specific scroll positions
  if (scrollTop >= fadeInStart && scrollTop <= fadeInEnd) {
    canvasOpacity = (scrollTop - fadeInStart) / (fadeInEnd - fadeInStart);
    canvas.style.opacity = canvasOpacity;
  }
});

preloadImages();
