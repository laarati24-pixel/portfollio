const menuButton = document.getElementById("menuBtn");
const navigation = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {

    navigation.classList.toggle("active");

});


const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

    });

});