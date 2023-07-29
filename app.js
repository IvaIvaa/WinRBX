const toggle = document.querySelector('.toggle-btn')
const navbarLinks = document.querySelector('.navbar-links')

toggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})