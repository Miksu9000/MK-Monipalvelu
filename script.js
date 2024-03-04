document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('hamburger-menu');
    var navigation = document.getElementById('navigation');
    var navLinks = navigation.querySelectorAll('a');

    menuButton.addEventListener('click', function() {
        this.classList.toggle('active');
        navigation.classList.toggle('active');
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            menuButton.classList.remove('active');
            navigation.classList.remove('active');
        });
    });
});