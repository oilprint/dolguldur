$(function () {

   $(function () {
      if (window.location.pathname === '/works.html') {
        var mixer = mixitup('.works__content');
      }
    });
 });


 document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.header__burger');
  const mobileMenu = document.querySelector('.mobile-menu'); 
  const closeButton = document.querySelector('.mobile-menu__button');
  const bodyLock = document.querySelector('body'); 

  console.log(burger);

  burger.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu--active'); 
    bodyLock.classList.add('lock');
  });

  closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--active'); 
    bodyLock.classList.remove('lock');
  });

  //swiper

   const swiper = new Swiper('.swiper', {
    
    slidesPerView: 1,
    autoplay: {
      delay: 2000,
    },
    loop: true,

  });

});
  