/*=========== Mobile Navbar Swiper ==================*/
const main_navbar = document.querySelector(".main_navbar");
const mobile_navbar_btn = document.querySelector(".mobile_nav_btn");

const clickNavbar = () => {
  main_navbar.classList.toggle("active");
};

mobile_navbar_btn.addEventListener("click", () => clickNavbar());
/*=========== Initialize Swiper ==================*/
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

/*=========== Initialize Testimonial Swiper Slider ==================*/
var swiper = new Swiper(".myTestimonial", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      "@1.00": {
          slidesPerView: 2,
          spaceBetween: 40,
      },
      "@1.50": {
          slidesPerView: 2,
          spaceBetween: 50,
      },
  },
});



