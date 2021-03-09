import "./styles.css";
import ScrollReveal from "../node_modules/scrollreveal/dist/scrollreveal";

/*----------- SHOW MENU ------------*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/*----------- REMOVE MENU MOBILE ------------*/

const navLink = document.querySelectorAll('.nav__link')
const navMenu = document.getElementById('nav-menu')

const linkAction = () =>{
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*----------- SCROLL SECTIONS ACTIVE LINK ------------*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {

    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


/*----------- CHANGE BACKGROUND HEADER ------------*/


const scrollHeader = () => {

    const scrollY = window.pageYOffset


    const nav = document.getElementById('header')
    if (scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*----------- SHOW SCROLL TOP ------------*/
const scrollTop = () => {

    const scrollY = window.pageYOffset

    const scrollTop = document.getElementById('scroll-top');
    if (scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*----------- DARK LIGHT THEME ------------*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';


if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Act / Deact the theme manuality
themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*----------- SCROLL REVEAL ANIMATION ------------*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, 
.home__img, 
.about__data, 
.about__img,
.services__content,
.menu__content,
.app__data,
.contact__data,
.contact__button,
.footer__content`), {
    interval: 230
}


