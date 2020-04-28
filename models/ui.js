"use strict";
class UI {
    showRocketLeft() {
        let rocketLeft = document.getElementById("rocketLeft");
        rocketLeft.classList.remove("d-none");
    }
    showRocketRight() {
        let rocketRight = document.getElementById("rocketRight");
        rocketRight.classList.remove("d-none");
    }
    deleteRocketLeft() {
        let rocketLeft = document.getElementById("rocketLeft");
        rocketLeft.classList.add("d-none");
    }
    deleteRocketRight() {
        let rocketRight = document.getElementById("rocketRight");
        rocketRight.classList.add("d-none");
    }
    showCodeLeft() { }
    showCodeRight() { }
    showThrustersLeft() { }
    showThrustersRight() { }
    showSpeedLeft() { }
    showSpeedRight() { }
}
