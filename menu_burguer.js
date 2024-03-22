

// MENU HAMBURGUESA
const burguerIcon = document.querySelector('.burguer-icon');
const menu = document.querySelector('.burguer-menu');

burguerIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('inactive');
}