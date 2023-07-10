document.addEventListener('DOMContentLoaded', () => {

    dropdown();

});

function dropdown() {

    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');

    burger.onclick = () =>  {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    }

}
