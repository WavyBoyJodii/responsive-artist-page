import './style.css';
import ScrollReveal from 'scrollreveal';

const menu = document.getElementById('menu-icon');
const navlist = document.querySelector('.navlist');

const sr = ScrollReveal({
  distance: '70px',
  duration: 2700,
  reset: true,
});

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

sr.reveal('.left-hero', { delay: 200, origin: 'bottom' });
sr.reveal('.right-hero', { delay: 350, origin: 'top' });
