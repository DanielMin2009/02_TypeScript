"use strict";
let rocket;
let rockets = new Array();
let thrusters = new Array();
// Form
let introCode = document.getElementById("txtCode");
let introNum = document.getElementById("selectNum");
introCode.addEventListener("blur", validateCode, false);
// Quan incremento o disminueixo el valor de l'input no de propulsors
introNum.addEventListener("change", validateNumThrusters, false);
// Els necessito tots per mostrar o amagar inputs segons quants propulsors es vulguin afegir
let powerThruster1 = document.getElementById("powerThruster1");
let powerThruster2 = document.getElementById("powerThruster2");
let powerThruster3 = document.getElementById("powerThruster3");
let powerThruster4 = document.getElementById("powerThruster4");
let powerThruster5 = document.getElementById("powerThruster5");
let powerThruster6 = document.getElementById("powerThruster6");
let powerThruster7 = document.getElementById("powerThruster7");
let powerThruster8 = document.getElementById("powerThruster8");
let powerThruster9 = document.getElementById("powerThruster9");
// Delete object & img buttons
let closeBtnMars = document.getElementById("close-btnMars");
let closeBtnSaturn = document.getElementById("close-btnSaturn");
let rocketMarsImg = document.getElementById("rocketMars");
let rocketSaturnImg = document.getElementById("rocketSaturn");
let listMars = document.getElementById("listMars");
let listSaturn = document.getElementById("listSaturn");
let dataMars = document.getElementById("dataMars");
let dataSaturn = document.getElementById("dataSaturn");
let issuesMars = document.getElementById("issuesMars");
let issuesSaturn = document.getElementById("issuesSaturn");
// Mostrar dades de casa coet
let answerCodeMars = document.getElementById("answerCodeMars");
let answerNumMars = document.getElementById("answerNumMars");
let answerPowerMars = document.getElementById("answerPowerMars");
let answerSpeedMars = document.getElementById("answerSpeedMars");
let answerCodeSaturn = document.getElementById("answerCodeSaturn");
let answerNumSaturn = document.getElementById("answerNumSaturn");
let answerPowerSaturn = document.getElementById("answerPowerSaturn");
let answerSpeedSaturn = document.getElementById("answerSpeedSaturn");
let openFormMarsBtn = document.getElementById("openFormMars");
let openFormSaturnBtn = document.getElementById("openFormSaturn");
let starsMarsUl = document.getElementById("asterisksMars");
let starsSaturnUl = document.getElementById("asterisksSaturn");
// onload amago alguns elements del DOM perquè en tornar a crear el coet es bloqueja el d-none de bootstrap
var displaElements = () => {
    listMars.style.display = "none";
    dataMars.style.display = "none";
    listSaturn.style.display = "none";
    dataSaturn.style.display = "none";
};
// Aquí hauria de recollir els valors de cada input i pujar-los a un array de números buit
var createRocket = (destination, code, numThrusters, thrusters, btn) => {
    code = introCode.value;
    numThrusters = introNum.value;
    if (btn == "Mars") {
        rocket.setDestination = "Mars";
    }
    else if (btn == "Saturn") {
        rocket.setDestination = "Saturn";
    }
    let newRocket = new Rocket(code, numThrusters, destination);
    rockets.push(newRocket);
    createThrusters(thrusters);
    if (newRocket.destination == "Mars") {
        showRocketMars();
        showDataMars(newRocket);
    }
    else if (newRocket.destination == "Saturn") {
        showRocketSaturn();
        showDataSaturn(newRocket);
    }
    console.log(newRocket);
    console.log(rockets);
};
var createThrusters = (thrusters) => {
    let i;
    // Aquest array recorre totes les id's i agafa els valors dels inputs de cada propulsor. Tanst com en tingui.
    for (i = 1; i <= introNum.value; i++) {
        let powerThruster = Number(document.getElementById("powerThruster" + i).value);
        let trusterGeneric = new Thruster(Number(powerThruster));
        let j;
        for (let rocketItem of rockets) {
            j = rocketItem;
        }
        if ((j.thrusters.length > 0) || (j.thrusters.length < 9)) {
            j.addThruster(trusterGeneric);
        }
    }
    return thrusters;
};
// En aquest punt, quan vull tornar a controlar la 
var raisePowerMars = () => {
    let arrowUpMars = answerCodeMars.textContent;
    let i;
    for (i = 0; i < rockets.length; i++) {
        if (arrowUpMars.includes(rockets[i].code)) {
            rockets[i].powerUp(rockets[i].thrusters);
            showSpeedMars(rockets[i]);
            console.log(showSpeedMars(rockets[i]));
        }
    }
};
var reducePowerMars = () => {
    let arrowDownMars = answerCodeMars.textContent;
    let i;
    for (i = 0; i < rockets.length; i++) {
        if (arrowDownMars.includes(rockets[i].code)) {
            rockets[i].powerDown(rockets[i].thrusters);
            showSpeedMars(rockets[i]);
        }
    }
};
var raisePowerSaturn = () => {
    let arrowUpSaturn = answerCodeSaturn.textContent;
    let i;
    for (i = 0; i < rockets.length; i++) {
        if (arrowUpSaturn.includes(rockets[i].code)) {
            rockets[i].powerUp(rockets[i].thrusters);
            showSpeedSaturn(rockets[i]);
        }
    }
};
var reducePowerSaturn = () => {
    let arrowDownSaturn = answerCodeSaturn.textContent;
    let i;
    for (i = 0; i < rockets.length; i++) {
        if (arrowDownSaturn.includes(rockets[i].code)) {
            rockets[i].powerDown(rockets[i].thrusters);
            showSpeedSaturn(rockets[i]);
        }
    }
};
var deleteObjRocket = (code) => {
    for (let i = 0; i < rockets.length; i++) {
        if (rockets[i].code == code) {
            rockets.splice(i, 1);
            console.log(rockets);
        }
    }
};
// UI
var showRocketMars = () => {
    rocketSaturnImg.classList.remove("offset-lg-6");
    rocketMarsImg.classList.remove("d-none");
    //openFormMarsBtn.classList.add("d-none");
    openFormMarsBtn.style.display = "none";
};
var showRocketSaturn = () => {
    rocketSaturnImg.classList.remove("d-none");
    //openFormSaturnBtn.classList.add("d-none");
    openFormSaturnBtn.style.display = "none";
};
var showDataMars = (rocket) => {
    listMars.style.display = "block";
    dataMars.style.display = "block";
    answerCodeMars.innerHTML = `${rocket.code}`;
    answerNumMars.innerHTML = `${rocket.numThrusters} `;
    answerPowerMars.innerHTML = "";
    let j;
    for (j = 0; j < rocket.thrusters.length; j++) {
        answerPowerMars.innerHTML += `${rocket.thrusters[j].maxPower} `;
    }
    answerSpeedMars.innerHTML = `${rocket.currentSpeed()}`;
};
var showDataSaturn = (rocket) => {
    listSaturn.style.display = "block";
    dataSaturn.style.display = "block";
    answerCodeSaturn.innerHTML = `${rocket.code}`;
    answerNumSaturn.innerHTML = `${rocket.numThrusters} `;
    let j;
    for (j = 0; j < rocket.thrusters.length; j++) {
        answerPowerSaturn.innerHTML += `${rocket.thrusters[j].maxPower} `;
    }
    answerSpeedSaturn.innerHTML = `${rocket.currentSpeed()}`;
};
var deleteRocketMars = (code) => {
    code = answerCodeMars.textContent;
    rocketSaturnImg.classList.add("offset-lg-6");
    rocketMarsImg.classList.add("d-none");
    openFormMarsBtn.style.display = "block";
    listMars.style.display = "none";
    dataMars.style.display = "none";
    answerCodeMars.innerHTML = "";
    answerNumMars.innerHTML = "";
    answerPowerMars.innerHTML = "";
    answerSpeedMars.innerHTML = "";
    // Mentre hi hagi un first child anirà esborrant. Quan no n'hi hagi no. While perquè no sabem el número de childs.
    while (starsMarsUl.firstChild) {
        starsMarsUl.removeChild(starsMarsUl.firstChild);
    }
    deleteObjRocket(code);
};
var deleteRocketSaturn = (code) => {
    code = answerCodeSaturn.textContent;
    rocketSaturnImg.classList.add("d-none");
    openFormSaturnBtn.style.display = "block";
    listSaturn.style.display = "none";
    dataSaturn.style.display = "none";
    answerCodeSaturn.innerHTML = "";
    answerNumSaturn.innerHTML = "";
    answerPowerSaturn.innerHTML = "";
    answerSpeedSaturn.innerHTML = "";
    // Mentre hi hagi un first child anirà esborrant. Quan no n'hi hagi no. While perquè no sabem el número de childs.
    while (starsSaturnUl.firstChild) {
        starsSaturnUl.removeChild(starsSaturnUl.firstChild);
    }
    deleteObjRocket(code);
};
var hideRocketMars = () => {
    rocketSaturnImg.classList.add("offset-lg-6");
    rocketMarsImg.classList.add("d-none");
    openFormMarsBtn.style.display = "block";
    listMars.style.display = "none";
    dataMars.style.display = "none";
    answerCodeMars.innerHTML = "";
    answerNumMars.innerHTML = "";
    answerPowerMars.innerHTML = "";
    answerSpeedMars.innerHTML = "";
    while (starsMarsUl.firstChild) {
        starsMarsUl.removeChild(starsMarsUl.firstChild);
    }
};
var hideRocketSaturn = () => {
    rocketSaturnImg.classList.add("d-none");
    openFormSaturnBtn.style.display = "block";
    listSaturn.style.display = "none";
    dataSaturn.style.display = "none";
    answerCodeSaturn.innerHTML = "";
    answerNumSaturn.innerHTML = "";
    answerPowerSaturn.innerHTML = "";
    answerSpeedSaturn.innerHTML = "";
    while (starsSaturnUl.firstChild) {
        starsSaturnUl.removeChild(starsSaturnUl[0]);
    }
};
// Passar més o menys potència segons apreti més o menys
var showSpeedMars = (rocket) => {
    answerSpeedMars.innerHTML = `${rocket.currentSpeed()}`;
};
var showSpeedSaturn = (rocket) => {
    answerSpeedSaturn.innerHTML = `${rocket.currentSpeed()}`;
};
// Mostrar inputs segons el nº de propulsors escollit, entre 1 i 9
function showPowerInputs(introNum) {
    switch (introNum) {
        case ("1"):
            powerThruster1.style.display = "block";
            powerThruster2.style.display = "none";
            powerThruster3.style.display = "none";
            powerThruster4.style.display = "none";
            powerThruster5.style.display = "none";
            powerThruster6.style.display = "none";
            powerThruster7.style.display = "none";
            powerThruster8.style.display = "none";
            powerThruster9.style.display = "none";
            break;
        case ("2"):
            powerThruster1.style.display = "block";
            powerThruster2.style.display = "block";
            powerThruster3.style.display = "none";
            powerThruster4.style.display = "none";
            powerThruster5.style.display = "none";
            powerThruster6.style.display = "none";
            powerThruster7.style.display = "none";
            powerThruster8.style.display = "none";
            powerThruster9.style.display = "none";
            break;
        case ("3"):
            powerThruster1.style.display = "block";
            powerThruster2.style.display = "block";
            powerThruster3.style.display = "block";
            powerThruster4.style.display = "none";
            powerThruster5.style.display = "none";
            powerThruster6.style.display = "none";
            powerThruster7.style.display = "none";
            powerThruster8.style.display = "none";
            powerThruster9.style.display = "none";
            break;
        case ("4"):
            powerThruster1.style.display = "block";
            powerThruster2.style.display = "block";
            powerThruster3.style.display = "block";
            powerThruster4.style.display = "block";
            powerThruster5.style.display = "none";
            powerThruster6.style.display = "none";
            powerThruster7.style.display = "none";
            powerThruster8.style.display = "none";
            powerThruster9.style.display = "none";
            break;
        case ("5"):
            powerThruster1.style.display = "block";
            powerThruster2.style.display = "block";
            powerThruster3.style.display = "block";
            powerThruster4.style.display = "block";
            powerThruster5.style.display = "block";
            powerThruster6.style.display = "none";
            powerThruster7.style.display = "none";
            powerThruster8.style.display = "none";
            powerThruster9.style.display = "none";
            break;
        case ("6"):
            powerThruster1.style.display = "block";
            powerThruster2.style.display = "block";
            powerThruster3.style.display = "block";
            powerThruster4.style.display = "block";
            powerThruster5.style.display = "block";
            powerThruster6.style.display = "block";
            powerThruster7.style.display = "none";
            powerThruster8.style.display = "none";
            powerThruster9.style.display = "none";
            break;
        case ("7"):
            powerThruster1.style.display = "block";
            powerThruster2.style.display = "block";
            powerThruster3.style.display = "block";
            powerThruster4.style.display = "block";
            powerThruster5.style.display = "block";
            powerThruster6.style.display = "block";
            powerThruster7.style.display = "block";
            powerThruster8.style.display = "none";
            powerThruster9.style.display = "none";
            break;
        case ("8"):
            powerThruster1.style.display = "block";
            powerThruster2.style.display = "block";
            powerThruster3.style.display = "block";
            powerThruster4.style.display = "block";
            powerThruster5.style.display = "block";
            powerThruster6.style.display = "block";
            powerThruster7.style.display = "block";
            powerThruster8.style.display = "block";
            powerThruster9.style.display = "none";
            break;
        case ("9"):
            powerThruster1.style.display = "block";
            powerThruster2.style.display = "block";
            powerThruster3.style.display = "block";
            powerThruster4.style.display = "block";
            powerThruster5.style.display = "block";
            powerThruster6.style.display = "block";
            powerThruster7.style.display = "block";
            powerThruster8.style.display = "block";
            powerThruster9.style.display = "block";
            break;
        default:
            break;
    }
}
// Validation
function validateCode() {
    let isValidCode = false;
    let errorCode = document.querySelector("#errorCode");
    let regExCode = /[a-zA-Z0-9]{8}$/;
    if (regExCode.test(introCode.value) == false) {
        errorCode.innerHTML = "Required Input. You have to write a correct code with 8 characters. Ex: (12344XY9)";
        error(errorCode, introCode);
    }
    else {
        introCode.setAttribute("class", "inputOk");
        resetError(errorCode, introCode);
        isValidCode = true;
    }
    return isValidCode;
}
function validateNumThrusters() {
    let isValidThruster = false;
    let errorThrusters = document.querySelector("#errorThrusters");
    if ((introNum.value > 0) || (introNum.value < 10)) {
        isValidThruster = true;
        showPowerInputs(introNum.value);
    }
    else {
        error(errorThrusters, introNum);
    }
    return isValidThruster;
}
// Error functions
function error(text, field) {
    text.classList.add("incorrectText");
    field.classList.add("incorrectBorder");
}
function resetError(text, field) {
    text.innerHTML = "";
    field.classList.remove("incorrectBorder");
}
function resetCorrect(text, field) {
    field.classList.remove("inputOk");
    text.classList.add("incorrectText");
    field.classList.add("incorrectBorder");
}
function correctInput(field) {
    field.classList.add("inputOk");
}
