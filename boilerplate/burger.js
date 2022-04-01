let link = document.getElementById('link');
let burger = document.getElementById('burger');
let nav = document.querySelector('nav')
let logo = document.querySelector('img.logo');
let header = document.querySelector('header');
let ul = document.querySelector('ul.navul');
let mapnav = document.querySelector('div.mapgoogle');
let ulreseaux = document.querySelector('ul.reseaux');
let footer = document.querySelector('footer');
let container = document.querySelector('main.container');

link.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open');
  logo.classList.toggle('open');
  nav.classList.toggle('open')
  header.classList.toggle('open');
  ul.classList.toggle('open');
  mapnav.classList.toggle('open');
  ulreseaux.classList.toggle('open');
  footer.classList.toggle('open');
  container.classList.toggle('open');
})