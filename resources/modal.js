"use strict";
/* ======================== Rocket Left ======================== */
var openModalForm = (btn) => {
    document.getElementById("overlayForm").classList.add("is-visible");
    document.getElementById("modalForm").classList.add("is-visible");

    let titleMars = document.getElementById("titleMars");
    let titleSaturn = document.getElementById("titleSaturn");

    let txtCode = document.getElementById("txtCode");

    let numThrusters = document.getElementById("selectNum");

    let btnMars = document.getElementById("btnMars");
    let btnSaturn = document.getElementById("btnSaturn");

    let powerThruster4 = document.getElementById("powerThruster4");
    let powerThruster5 = document.getElementById("powerThruster5");
    let powerThruster6 = document.getElementById("powerThruster6");

    if (btn == "openFormMars") {

        titleSaturn.classList.add("d-none");
        btnSaturn.classList.add("d-none");

        txtCode.value = "32WESSDS";
        numThrusters.value = "3";
        titleMars.classList.remove("d-none");
        btnMars.classList.remove("d-none");

        powerThruster1.style.display = "block";
        powerThruster2.style.display = "block";
        powerThruster3.style.display = "block";

    }
    else if (btn == "openFormSaturn") {

        titleMars.classList.add("d-none");
        btnMars.classList.add("d-none");

        titleSaturn.classList.remove("d-none");
        txtCode.value = "LDSFJA32";
        numThrusters.value = "6";
        btnSaturn.classList.remove("d-none");

        powerThruster1.style.display = "block";
        powerThruster2.style.display = "block";
        powerThruster3.style.display = "block";
        powerThruster4.style.display = "block";
        powerThruster5.style.display = "block";
        powerThruster6.style.display = "block";
    }
}

var closeModalForm = () => {
    document.getElementById("overlayForm").classList.remove("is-visible");
    document.getElementById("modalForm").classList.remove("is-visible");
    let powerThruster4 = document.getElementById("powerThruster4");
    let powerThruster5 = document.getElementById("powerThruster5");
    let powerThruster6 = document.getElementById("powerThruster6");
    let powerThruster7 = document.getElementById("powerThruster7");
    let powerThruster8 = document.getElementById("powerThruster8");
    let powerThruster9 = document.getElementById("powerThruster9");
    powerThruster4.style.display = "none";
    powerThruster5.style.display = "none";
    powerThruster6.style.display = "none";
    powerThruster7.style.display = "none";
    powerThruster8.style.display = "none";
    powerThruster9.style.display = "none";
}

document.getElementById("btnMars").addEventListener("click", function () {
    document.getElementById("overlayForm").classList.remove("is-visible");
    document.getElementById("modalForm").classList.remove("is-visible");
});

document.getElementById("btnSaturn").addEventListener("click", function () {
    document.getElementById("overlayForm").classList.remove("is-visible");
    document.getElementById("modalForm").classList.remove("is-visible");
});

document.getElementById("overlayForm").addEventListener("click", function () {
    document.getElementById("overlayForm").classList.remove("is-visible");
    document.getElementById("modalForm").classList.remove("is-visible");
});



/* ======================== Rocket Left ======================== */
var openModalDelete = (btn) => {
    document.getElementById("overlayDelete").classList.add("is-visible");
    document.getElementById("modalDelete").classList.add("is-visible");

    let deleteBtnsMars = document.getElementById("deleteBtnsMars");
    let deleteBtnsSaturn = document.getElementById("deleteBtnsSaturn");

    if (btn == "Mars") {
        deleteBtnsMars.style.display = "grid";
        deleteBtnsSaturn.style.display = "none";
    }
    else if (btn == "Saturn") {
        deleteBtnsSaturn.style.display = "grid";
        deleteBtnsMars.style.display = "none";
    }
}

var closeModalDelete = () => {
    document.getElementById("overlayDelete").classList.remove("is-visible");
    document.getElementById("modalDelete").classList.remove("is-visible");
}

document.getElementById("btnDeleteMars").addEventListener("click", function () {
    document.getElementById("overlayDelete").classList.remove("is-visible");
    document.getElementById("modalDelete").classList.remove("is-visible");
});

document.getElementById("btnHideMars").addEventListener("click", function () {
    document.getElementById("overlayDelete").classList.remove("is-visible");
    document.getElementById("modalDelete").classList.remove("is-visible");
});

document.getElementById("btnDeleteSaturn").addEventListener("click", function () {
    document.getElementById("overlayDelete").classList.remove("is-visible");
    document.getElementById("modalDelete").classList.remove("is-visible");
});

document.getElementById("btnHideSaturn").addEventListener("click", function () {
    document.getElementById("overlayDelete").classList.remove("is-visible");
    document.getElementById("modalDelete").classList.remove("is-visible");
});

document.getElementById("overlayDelete").addEventListener("click", function () {
    document.getElementById("overlayDelete").classList.remove("is-visible");
    document.getElementById("modalDelete").classList.remove("is-visible");
});
