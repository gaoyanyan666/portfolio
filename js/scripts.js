$(window).on('load', function() {
    $('.skill_value').each(function(index, el) {
        thisVal = $(this).text();
        $(this).parent('.skill_view').animate({ width: thisVal }, 2000)
    });

});


const navToggleBar = () => {
    const burger = document.querySelector('.navbar-toggler');
    const navItems = document.querySelectorAll('.nav-item');
    const navLinks = document.querySelectorAll('.nav-link');
    burger.addEventListener('click', () => {
        //animate links
        navItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = " ";
            } else {
                link.style.animation = `navItemFade 0.5s ease forwards ${index /7 }s`
            }
        });

    });

};
navToggleBar();

$(document).ready(function() {
    $(".nav-item").click(function() {
        $("#navbarResponsive").hide();
        $("#openButton").show();
    });
    $("#openButton").click(function() {
        $("#navbarResponsive").show();
        $("#openButton").hide();
        $("#closeButton").show();
    });
    $("#closeButton").click(function() {
        $("#navbarResponsive").hide();
        $("#closeButton").hide();
        $("#openButton").show();
    });
});