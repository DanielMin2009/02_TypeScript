let rocket: Rocket;
let rockets: Rocket[] = new Array();
let thrusters: Thruster[] = new Array();

// Form
let introCode: any = (<HTMLInputElement>document.getElementById("txtCode"));
let introNum: any = (<HTMLInputElement>document.getElementById("selectNum"));

introCode.addEventListener("blur", validateCode, false);
// Quan incremento o disminueixo el valor de l'input no de propulsors
introNum.addEventListener("change", validateNumThrusters, false);

// Els necessito tots per mostrar o amagar inputs segons quants propulsors es vulguin afegir
let powerThruster1: any = (<HTMLInputElement>document.getElementById("powerThruster1"));
let powerThruster2: any = (<HTMLInputElement>document.getElementById("powerThruster2"));
let powerThruster3: any = (<HTMLInputElement>document.getElementById("powerThruster3"));
let powerThruster4: any = (<HTMLInputElement>document.getElementById("powerThruster4"));
let powerThruster5: any = (<HTMLInputElement>document.getElementById("powerThruster5"));
let powerThruster6: any = (<HTMLInputElement>document.getElementById("powerThruster6"));
let powerThruster7: any = (<HTMLInputElement>document.getElementById("powerThruster7"));
let powerThruster8: any = (<HTMLInputElement>document.getElementById("powerThruster8"));
let powerThruster9: any = (<HTMLInputElement>document.getElementById("powerThruster9"));

// Delete object & img buttons
let closeBtnMars: any = (<HTMLInputElement>document.getElementById("close-btnMars"));
let closeBtnSaturn: any = (<HTMLInputElement>document.getElementById("close-btnSaturn"));

let rocketMarsImg: any = (<HTMLInputElement>document.getElementById("rocketMars"));
let rocketSaturnImg: any = (<HTMLInputElement>document.getElementById("rocketSaturn"));

let listMars: any = (<HTMLInputElement>document.getElementById("listMars"));
let listSaturn: any = (<HTMLInputElement>document.getElementById("listSaturn"));

let dataMars: any = (<HTMLInputElement>document.getElementById("dataMars"));
let dataSaturn: any = (<HTMLInputElement>document.getElementById("dataSaturn"));

let issuesMars: any = (<HTMLInputElement>document.getElementById("issuesMars"));
let issuesSaturn: any = (<HTMLInputElement>document.getElementById("issuesSaturn"));

// Mostrar dades de casa coet
let answerCodeMars: any = (<HTMLInputElement>document.getElementById("answerCodeMars"));
let answerNumMars: any = (<HTMLInputElement>document.getElementById("answerNumMars"));
let answerPowerMars: any = (<HTMLInputElement>document.getElementById("answerPowerMars"));
let answerSpeedMars: any = (<HTMLInputElement>document.getElementById("answerSpeedMars"));

let answerCodeSaturn: any = (<HTMLInputElement>document.getElementById("answerCodeSaturn"));
let answerNumSaturn: any = (<HTMLInputElement>document.getElementById("answerNumSaturn"));
let answerPowerSaturn: any = (<HTMLInputElement>document.getElementById("answerPowerSaturn"));
let answerSpeedSaturn: any = (<HTMLInputElement>document.getElementById("answerSpeedSaturn"));

let openFormMarsBtn: any = (<HTMLInputElement>document.getElementById("openFormMars"));
let openFormSaturnBtn: any = (<HTMLInputElement>document.getElementById("openFormSaturn"));

let starsMarsUl: any = document.getElementById("asterisksMars");
let starsSaturnUl: any = document.getElementById("asterisksSaturn");

// onload amago alguns elements del DOM perquè en tornar a crear el coet es bloqueja el d-none de bootstrap
var displaElements = () => {
    listMars.style.display = "none";
    dataMars.style.display = "none";
    listSaturn.style.display = "none";
    dataSaturn.style.display = "none";
}

// Aquí hauria de recollir els valors de cada input i pujar-los a un array de números buit
var createRocket = (destination: string, code: string, numThrusters: number, thrusters: Thruster[], btn: any) => {
    code = introCode.value;
    numThrusters = introNum.value;

    if (btn == "Mars") {
        rocket.setDestination = "Mars";
    } else if (btn == "Saturn") {
        rocket.setDestination = "Saturn";
    }

    let newRocket = new Rocket(code, numThrusters, destination);
    rockets.push(newRocket);
    createThrusters(thrusters);

    if (newRocket.destination == "Mars") {
        showRocketMars();
        showDataMars(newRocket);

    } else if (newRocket.destination == "Saturn") {
        showRocketSaturn();
        showDataSaturn(newRocket);
    }
    console.log(newRocket);
    console.log(rockets);
}

var createThrusters = (thrusters: Thruster[]) => {
    let i: number;
    // Aquest array recorre totes les id's i agafa els valors dels inputs de cada propulsor. Tanst com en tingui.
    for (i = 1; i <= introNum.value; i++) {
        let powerThruster: number = Number((<HTMLInputElement>document.getElementById("powerThruster" + i)).value);
        let trusterGeneric = new Thruster(Number(powerThruster));

        let j: any;
        for (let rocketItem of rockets) {
            j = rocketItem;
        }
        if ((j.thrusters.length > 0) || (j.thrusters.length < 9)) {
            j.addThruster(trusterGeneric);
        }
    }
    return thrusters;
}

// En aquest punt, quan vull tornar a controlar la 
var raisePowerMars = () => {
    let arrowUpMars: any = answerCodeMars.textContent;
    let i: number;
    for (i = 0; i < rockets.length; i++) {
        if (arrowUpMars.includes(rockets[i].code)) {
            rockets[i].powerUp(rockets[i].thrusters);
            showSpeedMars(rockets[i]);
            console.log(showSpeedMars(rockets[i]));
        }
    }
}
var reducePowerMars = () => {
    let arrowDownMars: any = answerCodeMars.textContent;
    let i: number;
    for (i = 0; i < rockets.length; i++) {
        if (arrowDownMars.includes(rockets[i].code)) {
            rockets[i].powerDown(rockets[i].thrusters);
            showSpeedMars(rockets[i]);
        }
    }
}
var raisePowerSaturn = () => {
    let arrowUpSaturn: any = answerCodeSaturn.textContent;
    let i: number;
    for (i = 0; i < rockets.length; i++) {
        if (arrowUpSaturn.includes(rockets[i].code)) {
            rockets[i].powerUp(rockets[i].thrusters);
            showSpeedSaturn(rockets[i]);
        }
    }
}
var reducePowerSaturn = () => {
    let arrowDownSaturn: any = answerCodeSaturn.textContent;
    let i: number;
    for (i = 0; i < rockets.length; i++) {
        if (arrowDownSaturn.includes(rockets[i].code)) {
            rockets[i].powerDown(rockets[i].thrusters);
            showSpeedSaturn(rockets[i]);
        }
    }
}

var deleteObjRocket = (code: string) => {
    for (let i = 0; i < rockets.length; i++) {
        if (rockets[i].code == code) {
            rockets.splice(i, 1);
            console.log(rockets);
        }
    }
}

// UI
var showRocketMars = () => {
    rocketSaturnImg.classList.remove("offset-lg-6");
    rocketMarsImg.classList.remove("d-none");
    openFormMarsBtn.style.display = "none";
}

var showRocketSaturn = () => {
    rocketSaturnImg.classList.remove("d-none");
    openFormSaturnBtn.style.display = "none";
}

var showDataMars = (rocket: Rocket) => {

    listMars.style.display = "block";
    dataMars.style.display = "block";
    answerCodeMars.innerHTML = `${rocket.code}`;
    answerNumMars.innerHTML = `${rocket.numThrusters} `;
    answerPowerMars.innerHTML = "";
    let j: number;
    for (j = 0; j < rocket.thrusters.length; j++) {
        answerPowerMars.innerHTML += `${rocket.thrusters[j].maxPower} `;
    }
    answerSpeedMars.innerHTML = `${rocket.currentSpeed()}`;
}

var showDataSaturn = (rocket: Rocket) => {

    listSaturn.style.display = "block";
    dataSaturn.style.display = "block";

    answerCodeSaturn.innerHTML = `${rocket.code}`;
    answerNumSaturn.innerHTML = `${rocket.numThrusters} `;
    let j: number;
    for (j = 0; j < rocket.thrusters.length; j++) {
        answerPowerSaturn.innerHTML += `${rocket.thrusters[j].maxPower} `;
    }
    answerSpeedSaturn.innerHTML = `${rocket.currentSpeed()}`;
}

var deleteRocketMars = (code: string) => {
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
    do {
        starsMarsUl.removeChild(starsMarsUl.firstChild);
    }
    while (starsMarsUl.firstChild);

    deleteObjRocket(code);
}

var deleteRocketSaturn = (code: string) => {
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
    do {
        starsSaturnUl.removeChild(starsSaturnUl.firstChild);
    }
    while (starsSaturnUl.firstChild);

    deleteObjRocket(code);
}

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

    do {
        starsMarsUl.removeChild(starsMarsUl.firstChild);
    }
    while (starsMarsUl.firstChild);
}

var hideRocketSaturn = () => {
    rocketSaturnImg.classList.add("d-none");
    openFormSaturnBtn.style.display = "block";
    listSaturn.style.display = "none";
    dataSaturn.style.display = "none";

    answerCodeSaturn.innerHTML = "";
    answerNumSaturn.innerHTML = "";
    answerPowerSaturn.innerHTML = "";
    answerSpeedSaturn.innerHTML = "";

    do {
        starsSaturnUl.removeChild(starsSaturnUl.firstChild);
    }
    while (starsSaturnUl.firstChild);
}

// Passar més o menys potència segons apreti més o menys
var showSpeedMars = (rocket: Rocket) => {
    answerSpeedMars.innerHTML = `${rocket.currentSpeed()}`;
}

var showSpeedSaturn = (rocket: Rocket) => {
    answerSpeedSaturn.innerHTML = `${rocket.currentSpeed()}`;
}

// Mostrar inputs segons el nº de propulsors escollit, entre 1 i 9
function showPowerInputs(introNum: any) {
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
    let isValidCode: boolean = false;
    let errorCode: any = (<HTMLInputElement>document.querySelector("#errorCode"));
    let regExCode: RegExp = /[a-zA-Z0-9]{8}$/;

    if (regExCode.test(introCode.value) == false) {
        errorCode.innerHTML = "Required Input. You have to write a correct code with 8 characters. Ex: (12344XY9)";
        error(errorCode, introCode);
    } else {
        introCode.setAttribute("class", "inputOk");
        resetError(errorCode, introCode);
        isValidCode = true;
    }
    return isValidCode;
}

function validateNumThrusters() {
    let isValidThruster: boolean = false;
    let errorThrusters: any = (<HTMLInputElement>document.querySelector("#errorThrusters"));

    if ((introNum.value > 0) || (introNum.value < 10)) {
        isValidThruster = true;
        showPowerInputs(introNum.value);
    } else {
        error(errorThrusters, introNum);
    }
    return isValidThruster;
}

// Error functions
function error(text: any, field: any) {
    text.classList.add("incorrectText");
    field.classList.add("incorrectBorder");
}
function resetError(text: any, field: any) {
    text.innerHTML = "";
    field.classList.remove("incorrectBorder");
}

function resetCorrect(text: any, field: any) {
    field.classList.remove("inputOk");
    text.classList.add("incorrectText");
    field.classList.add("incorrectBorder");
}

function correctInput(field: any) {
    field.classList.add("inputOk");
}



