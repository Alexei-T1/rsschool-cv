const burger = document.querySelector(".header__burger");

burger.addEventListener("click", (e) => {
    const navList = document.querySelector(".header__nav");

    if (document.querySelector(".nav_open")) {
        navList.style.opacity = "0";
    }
    else {
        navList.style.opacity = "";
    }

    navList.classList.toggle("nav_open");
});

window.addEventListener('resize', (e) => {
    document.querySelector(".header__nav").style.opacity = "";
});