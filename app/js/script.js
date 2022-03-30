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

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  loop: true,
});

var swiper2 = new Swiper('.mySwiper2', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  loop: true,
});
