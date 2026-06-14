const backdrop = document.querySelector('.backdrop');
const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');

function closeMenu() {
    backdrop.classList.remove('is-open');
}

openBtn.addEventListener('click', () => {
    backdrop.classList.add('is-open');
});

closeBtn.addEventListener('click', closeMenu);

document.addEventListener('click', (e) => {
    if (e.target.closest('.js-close-menu')) {
        closeMenu();
    }
});