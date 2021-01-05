window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};


const hamburger = document.querySelector('.hamburger-menu')
const links = document.querySelector('.links')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('menu-active')
    links.classList.toggle('links-active')
})

// MAKE INPUT FIELD WITH CONTACT FORM DONT COVER TEXT VALUE
const field = document.querySelectorAll('.field')
field.forEach((i) => {
    i.addEventListener('click', (e) => {
        i.nextSibling.nextSibling.classList.add('clicked');
})})
// MAKE LABEL OVER INPUT DEFAULT AGAIN AFTER SUBMITTING FORM
const submitButton = document.querySelector('.submit-btn')
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    field.forEach((i) => {
        i.value = "";
        i.nextSibling.nextSibling.classList.remove('clicked');
        i.nextSibling.nextSibling.style.fontSize = '';
    })
})




