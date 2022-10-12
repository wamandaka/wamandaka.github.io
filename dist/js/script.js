// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const myBtn = document.getElementById("myBtn")
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        myBtn.style.display = "block";
    } else {
        header.classList.remove('navbar-fixed');
        myBtn.style.display = "none";
    }
}

function topFunction() {
    document.dicumentElement.scrollTop = 0;
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

// Button Scroll To The Top
