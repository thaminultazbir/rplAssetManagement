hamburger = document.querySelector(".hamburger");

hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    main_content = document.querySelector(".main_content");
    navBar.classList.toggle("active");
    main_content.classList.toggle('main-active', navBar.classList.contains('active'));
    hamburger.classList.toggle("active");
}


function UpdateLogoText(){
    const logo = document.querySelector('.logo'); 
    if (window.innerWidth < 900) {
        logo.textContent = 'RPL';
    } else {
        logo.textContent = 'Rangs Properties Ltd.';
    }
}
UpdateLogoText();
window.addEventListener('resize', UpdateLogoText);