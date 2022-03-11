const toggleMenu = () => {
  const btn = document.querySelector('.nav__toggler');
  const menu = document.querySelector('.nav__menu');

  btn.addEventListener('click', () => {
    btn.classList.toggle('nav__toggler--active');
    menu.classList.toggle('nav__menu--open');
  });

  // clicking outside closes it
  window.addEventListener('click', (e) => {
    if (!e.target.closest('.nav__menu') && !e.target.closest('.nav__toggler')) {
      btn.classList.remove('nav__toggler--active');
      menu.classList.remove('nav__menu--open');
    }
  });
};

toggleMenu();
