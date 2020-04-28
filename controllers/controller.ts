let rocket1: Rocket;
let rocket2: Rocket;

(<HTMLInputElement>document.getElementById("rocketLeftForm")).addEventListener("submit", function () {
    alert("Enviando form left");
});
(<HTMLInputElement>document.getElementById("rocketRightForm")).addEventListener("submit", function () {
    alert("Enviando form right");
});  