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

/*

(function type() {
    const texts = ["welcome", "to", "my", "website"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 400);
})();*/