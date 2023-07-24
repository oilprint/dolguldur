
 document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.header__burger');
  const mobileMenu = document.querySelector('.mobile-menu'); 
  const closeButton = document.querySelector('.mobile-menu__button');
  const bodyLock = document.querySelector('body'); 

  burger.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu--active'); 
    bodyLock.classList.add('lock');
  });

  closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--active'); 
    bodyLock.classList.remove('lock');
  } )

});


  const swiper = new Swiper('.swiper', {
    
    slidesPerView: 1,
    autoplay: {
      delay: 2000,
    },
    loop: true,

  });

  // var mixer = mixitup('.works__content');

  $(function () {

  $(function () {
    if (window.location.pathname === '/works.html') {
      var mixer = mixitup('.works__content');
    }
  });
});

  