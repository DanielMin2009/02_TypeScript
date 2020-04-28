"use strict";
let rocketLeft;
let rocketRight;
let arrRocket = new Array();
let x = arrRocket;
// Left Form
let codeLeft = document.getElementById("txtCodeLeft").value;
let numThrustersLeft = Number(document.getElementById("numThrustersLeft").value);
let thrustersLeft = [];
// Right Form
let codeRight = document.getElementById("txtCodeRight").value;
let numThrustersRight = Number(document.getElementById("numThrustersRight").value);
let thrustersRight = [];
let arrMaxPower = new Array();
let arrCurrentPower = new Array();
// Aquí hauria de recollir els valors de cada input i pujar-los a un array de números buit
var sendFormLeft = (code, numThrusters) => {
    code = codeLeft;
    numThrusters = numThrustersLeft;
    let newRocket = new Rocket(code, numThrusters);
    arrRocket.push(newRocket);
    console.log(newRocket);
    let i;
    for (i = 1; i <= numThrusters; i++) {
        let maxPower = Number(document.getElementById("powerThrusterLeft" + i).value);
        arrMaxPower.push(maxPower);
        arrCurrentPower.push(0);
    }
    console.log(arrMaxPower);
    console.log(arrCurrentPower);
};
var sendFormRight = (code, numThrusters) => {
    code = codeRight;
    numThrusters = numThrustersRight;
    let newRocket = new Rocket(code, numThrusters);
    arrRocket.push(newRocket);
    console.log(newRocket);
    let i;
    for (i = 1; i <= numThrusters; i++) {
        let maxPower = Number(document.getElementById("powerThrusterRight" + i).value);
        arrMaxPower.push(maxPower);
        arrCurrentPower.push(0);
    }
    console.log(arrMaxPower);
    console.log(arrCurrentPower);
};
