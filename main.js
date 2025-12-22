const hamburger = document.querySelector(".hamburger");
const icon = document.querySelector(".bar-icon");
const menus = document.querySelectorAll(".navlist");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();

  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");

  menus.forEach(menu => {
    menu.classList.toggle("navlist-active");
  });
});



// hero section 

let imgBox = document.getElementById("imgBox");
let images = document.querySelectorAll(".img-box img");
let dotsContainer = document.getElementById("dots");

let index = 0;
let autoInterval;
// imgBox.style.width = `${images.length * 100}%`;


/* =========================
   CREATE DOTS
========================= */
images.forEach((_, i) => {
    let dot = document.createElement("span");
    if(i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
        index = i;
        slideImage();
        resetAutoSlide();
    });

    dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll(".dots span");

/* =========================
   SLIDE FUNCTION
========================= */
function slideImage(){
    imgBox.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

/* =========================
   AUTO SLIDER
========================= */
function startAutoSlide(){
    autoInterval = setInterval(() => {
        index++;
        if(index >= images.length){
            index = 0;
        }
        slideImage();
    }, 3000); // change time here
}

function resetAutoSlide(){
    clearInterval(autoInterval);
    startAutoSlide();
}

/* =========================
   START AUTO SLIDER
========================= */
startAutoSlide();