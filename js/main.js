//Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
});

//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});



//Makanan Khas
const makanankhasModals = document.querySelectorAll(".makanan-khas-model")
const imgCards = document.querySelectorAll(".img-card")
const makanankhasCloseBtns = document.querySelectorAll(".makanan-khas-close-btn")

var makanankhasModal = function (modalClick) {
    makanankhasModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard,i) => {
    imgCard.addEventListener("click", () => {
        makanankhasModal(i);
    });
});

makanankhasCloseBtns.forEach((makanankhasCloseBtn) => {
    makanankhasCloseBtn.addEventListener("click", () => {
        makanankhasModals.forEach((makanankhasModalView) => {
            makanankhasModalView.classList.remove("active");
        });
    });
});



