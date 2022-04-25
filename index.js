const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".nav-list");

if(hamburger) {
    hamburger.addEventListener("click",() => {
        nav-listen.classList.toggle("open");
    });
}


//Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if(popup) {
    closePopup.addEventListener("click", () => {
        popup.classList.add("hide-popup");
    });

    window.addEventListener("load", () => {
        setTimeout(() => {
            popup.classList.remove("hide-popup");
        }, 100);
    });
}