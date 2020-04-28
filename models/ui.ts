class UI {

    showRocketLeft() {
        let rocketLeft: any = <HTMLInputElement>document.getElementById("rocketLeft");
        rocketLeft.classList.remove("d-none");
    }

    showRocketRight() {
        let rocketRight: any = <HTMLInputElement>document.getElementById("rocketRight");
        rocketRight.classList.remove("d-none");
    }

    deleteRocketLeft() {
        let rocketLeft: any = <HTMLInputElement>document.getElementById("rocketLeft");
        rocketLeft.classList.add("d-none");
    }

    deleteRocketRight() {
        let rocketRight: any = <HTMLInputElement>document.getElementById("rocketRight");
        rocketRight.classList.add("d-none");
    }

    showCodeLeft() {}

    showCodeRight() {}

    showThrustersLeft() {}

    showThrustersRight() {}

    showSpeedLeft() {}

    showSpeedRight() {}

}