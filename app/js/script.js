const toggleMenu = () => {
  const btn = document.querySelector('.nav__toggler');
  const menu = document.querySelector('.nav__menu');

  btn.addEventListener('click', () => {
    btn.classList.toggle('nav__toggler--active');
    menu.classList.toggle('nav__menu--open');
    document.body.classList.toggle('no-scroll');
  });

  // clicking outside closes it
  window.addEventListener('click', (e) => {
    if (!e.target.closest('.nav__menu') && !e.target.closest('.nav__toggler')) {
      btn.classList.remove('nav__toggler--active');
      menu.classList.remove('nav__menu--open');
      document.body.classList.remove('no-scroll');
    }
  });
};

toggleMenu();

const mySwiperConfig = {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  loopedSlides: 4,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
};

const swiper = new Swiper('.mySwiper', mySwiperConfig);
const swiper2 = new Swiper('.mySwiper2', mySwiperConfig);
