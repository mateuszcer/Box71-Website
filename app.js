const hamburger = document.querySelector('.hamburger-menu')
const links = document.querySelector('.links')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('menu-active')
    links.classList.toggle('links-active')
})