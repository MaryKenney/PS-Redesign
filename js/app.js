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


