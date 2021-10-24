// ====================== Show Menu ==================
const showMenu = (toggleId, navId) => {
    const navigation = document.getElementById(navId);
    const toggle = document.getElementById(toggleId);

    //Validate if the variables exit
    if (navigation && toggle) {

        //add 'show-menu' to the classList when button is clicked
        toggle.addEventListener('click', () => {
            navigation.classList.toggle('show-menu')
        })
    }
}

showMenu('nav__toggle', 'nav__menu')

//================ Remove Menu ================
//========= Remove 'show-menu' from classList when a link is clicked ========
const menuLink = document.querySelectorAll('.menu__link');

function linkAction() {
    const navigation = document.getElementById('nav__menu');

    navigation.classList.remove('show-menu')
}

menuLink.forEach(n => n.addEventListener('click', linkAction));

//Remove 'show-menu' from classList when the close button is clicked
const closeMenu = (toggleClose, navClose) => {
    const navigation = document.getElementById(navClose);
    const toggle = document.getElementById(toggleClose);

    //Validate if the variables exit
    if (navigation && toggle) {

        //remove 'show-menu' to the classList when button is clicked
        toggle.addEventListener('click', () => {
            navigation.classList.remove('show-menu')
        })
    }
}

closeMenu('menu__close', 'nav__menu')

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.'comment__list, .main__card, .details__box, .sh-use__box,
            .about__container__text, .about__container__box, `, {
    interval: 200
})