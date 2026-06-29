// Reveal animation

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
},{
    threshold:.15
});

reveals.forEach(el=>observer.observe(el));


// Hero slideshow

const slides = document.querySelectorAll(".hero-slide");

let current = 0;

setInterval(()=>{

    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");

},7000);


// Gallery Lightbox

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("active");
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;

        document.body.style.overflow = "hidden";

    });

});

function closeLightbox(){

    lightbox.classList.remove("active");
    document.body.style.overflow = "";

}

closeBtn.addEventListener("click",closeLightbox);

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){
        closeLightbox();
    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){
        closeLightbox();
    }

});