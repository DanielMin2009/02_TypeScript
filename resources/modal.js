"use strict";
/* ======================== Rocket Left ======================== */
document.getElementById("btn-modalMars").addEventListener("click", function () {
    document.getElementById("overlayLeft").classList.add("is-visible");
    document.getElementById("modalLeft").classList.add("is-visible");
});

document.getElementById("close-btnLeft").addEventListener("click", function () {
    document.getElementById("overlayLeft").classList.remove("is-visible");
    document.getElementById("modalLeft").classList.remove("is-visible");
});

document.getElementById("btnCreateRocketLeft").addEventListener("click", function () {
    document.getElementById("overlayLeft").classList.remove("is-visible");
    document.getElementById("modalLeft").classList.remove("is-visible");
});

document.getElementById("overlayLeft").addEventListener("click", function () {
    document.getElementById("overlayLeft").classList.remove("is-visible");
    document.getElementById("modalLeft").classList.remove("is-visible");
});


/* ======================== Rocket Right ======================== */
document.getElementById("btn-modalSaturn").addEventListener("click", function () {
    document.getElementById("overlayRight").classList.add("is-visible");
    document.getElementById("modalRight").classList.add("is-visible");
});

document.getElementById("close-btnRight").addEventListener("click", function () {
    document.getElementById("overlayRight").classList.remove("is-visible");
    document.getElementById("modalRight").classList.remove("is-visible");
});

document.getElementById("btnCreateRocketRight").addEventListener("click", function () {
    document.getElementById("overlayRight").classList.remove("is-visible");
    document.getElementById("modalRight").classList.remove("is-visible");
});

document.getElementById("overlayRight").addEventListener("click", function () {
    document.getElementById("overlayRight").classList.remove("is-visible");
    document.getElementById("modalRight").classList.remove("is-visible");
});

