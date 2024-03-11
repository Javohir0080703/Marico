const box = document.querySelector(".js-header-box")
const ElOpenBox = document.querySelector(".js-ElOpenBox")
const ElCloseBox = document.querySelector(".js-ElCloseBox")



ElOpenBox.addEventListener("click", function () {
    box.style.display = 'block'
    box.style.display = 'transition: all 0.3s ease'
})

ElCloseBox.addEventListener("click", function () {
    box.style.display = 'none'
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 4,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
}); 
