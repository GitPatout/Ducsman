let link = document.getElementById('link');
let burger = document.getElementById('burger');
let logo = document.querySelector('logo');
let header = document.querySelector('header');
let ul = document.querySelector('ul');
let mapnav = document.querySelector('.mapgoogle');
let ulreseaux = document.querySelector('.reseaux');
let footer = document.querySelector('footer');

link.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open');
  logo.classList.toggle('open');
  header.classList.toggle('open');
  ul.classList.toggle('open');
  mapnav.classList.toggle('open');
  ulreseaux.classList.toggle('open');
  footer.classList.toggle('open');
  
})