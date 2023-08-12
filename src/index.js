import './style.css';
import ScrollReveal from 'scrollreveal'; // eslint-disable-line import/no-extraneous-dependencies
// import shyEmbrace from './assets/shy-embrace.JPG';

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

document.querySelectorAll('.media-element img').forEach((pic) => {
  pic.onclick = () => {
    document.querySelector('.popup-bts').style.display = 'block';
    document.querySelector('.popup-bts img').src = pic.getAttribute('src');
  };
});

document.querySelector('.popup-bts span').onclick = () => {
  document.querySelector('.popup-bts').style.display = 'none';
};
