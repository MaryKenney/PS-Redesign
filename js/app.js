$(function(){

    /*
        Navigation Interactions
        1.- menu toggler
        2.- dropdown toggler
    */

    // Menu Toggler
    // 1.- Listen for a click on .navbar-toggler
    // 2.- Store the property in the attribute "data-target"
    // 3.- Use the attribute's value to select the navigation it wants to affect

    $(".navbar-toggler").on("click", function(){
        let toggler = $(this).attr("data-target");
        $(toggler).toggleClass("open");
    })

    //Dropdown Toggler
    // 1.- Listen for a click on .dropdown > a
    // 2.- Togglle the class of "open" on the .dropdown element
    $(".navbar .dropdown > a").on("click", function(e){
        e.preventDefault();
        $(this).parent().toggleClass("open");
    })

})

    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    }