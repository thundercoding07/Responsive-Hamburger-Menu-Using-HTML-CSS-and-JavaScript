const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const mobieMenu = () =>{
menu.classList.toggle('is-active')
menuLinks.classList.toggle('active')
}
menu.addEventListener('click', mobieMenu)
function myFunction() {
document.getElementById("demo").innerHTML = "Hello World";
}