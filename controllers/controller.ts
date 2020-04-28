let rocketLeft: Rocket;
let rocketRight: Rocket;

let arrRocket: Rocket[] = new Array();
let x: any = arrRocket;

// Left Form
let codeLeft: string = (<HTMLInputElement>document.getElementById("txtCodeLeft")).value;
let numThrustersLeft: number = Number((<HTMLInputElement>document.getElementById("numThrustersLeft")).value);
let thrustersLeft: Thruster[] = [];

// Right Form
let codeRight: string = (<HTMLInputElement>document.getElementById("txtCodeRight")).value;
let numThrustersRight: number = Number((<HTMLInputElement>document.getElementById("numThrustersRight")).value);
let thrustersRight: Thruster[] = [];

let arrMaxPower: number[] = new Array();
let arrCurrentPower: number[] = new Array();

// Aquí hauria de recollir els valors de cada input i pujar-los a un array de números buit

var sendFormLeft = (code: string, numThrusters: number) => {

    code = codeLeft;
    numThrusters = numThrustersLeft;

    let newRocket = new Rocket(code, numThrusters);
    arrRocket.push(newRocket);
    console.log(newRocket);

    let i: number;
    for (i = 1; i <= numThrusters; i++) {
        let maxPower: number = Number((<HTMLInputElement>document.getElementById("powerThrusterLeft" + i)).value);
        arrMaxPower.push(maxPower);
        arrCurrentPower.push(0);
    }

    console.log(arrMaxPower);
    console.log(arrCurrentPower);
}

var sendFormRight = (code: string, numThrusters: number) => {

    code = codeRight;
    numThrusters = numThrustersRight;
    
    let newRocket = new Rocket(code, numThrusters);
    arrRocket.push(newRocket);
    console.log(newRocket);

    let i: number;
    for (i = 1; i <= numThrusters; i++) {
        let maxPower: number = Number((<HTMLInputElement>document.getElementById("powerThrusterRight" + i)).value);
        arrMaxPower.push(maxPower);
        arrCurrentPower.push(0);
    }

    console.log(arrMaxPower);
    console.log(arrCurrentPower);
}