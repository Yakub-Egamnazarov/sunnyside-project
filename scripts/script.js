'use scrict';

// constants for the Header
const menuBtn = document.getElementById('js-menu-btn');
const navBarMob = document.getElementById('js-nav-bar-mob');

const header = document.querySelector('.header');
window.addEventListener('scroll', stickHeader);

menuBtn.addEventListener('click', () => {
  navBarMob.classList.toggle('shown');
  console.log('menu clicked');
});

function stickHeader() {
  if (window.scrollY > header.offsetHeight) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}
