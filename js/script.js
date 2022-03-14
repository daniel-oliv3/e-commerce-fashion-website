/* Search form/Formulário de pesquisa btn*/
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

/* Menu toggle/menu toggle tbn*/
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

windows.onscroll = () => {
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}