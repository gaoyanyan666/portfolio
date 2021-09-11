const navToggleBar = () => {
    const burger = document.querySelector('.navbar-toggler');
    const navItems = document.querySelectorAll('.navbar-nav li');
    const navLinks = document.querySelectorAll('.nav-link');
    burger.addEventListener('click', () => {
        //animate links
        navItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = " ";
            } else {
                link.style.animation = `navItemFade 0.5s ease forwards ${index /7 +0.2}s`
            }

        });
        //animate burger
        burger.classList.toggle('toggle')

    });
    //add animation on toggled nav links

    navItems.addEventListener('click', () => {

        navLinks.forEach((text, index) => {
            text.style.animation = `linkTextTrans 0.5s ease`;

        });
    });
};
navToggleBar();