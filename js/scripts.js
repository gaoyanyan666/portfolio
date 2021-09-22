$(window).on('load', function() {
    $('.skill_value').each(function(index, el) {
        thisVal = $(this).text();
        $(this).parent('.skill_view').animate({ width: thisVal }, 2000)
    });
});


$(document).ready(function() {
    $(".nav-link").on('click', function() {
        $('.navbar-collapse').collapse('hide');
    })
});

const navToggleBar = () => {
    const burger = document.querySelector('.navbar-toggler');
    const navItems = document.querySelectorAll('.nav-item');
    const navLinks = document.querySelectorAll('.nav-link');
    const activeNavItem = document.querySelector(".nav-item.active");
    const navBar = document.querySelector('#navbarResponsive')
    navItems.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = " ";
        } else {
            link.style.animation = `navItemFade 0.5s ease forwards ${index /7 }s`
        }
    });
}
navToggleBar();