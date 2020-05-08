"use strict";
class Rocket {
    constructor(code, numThrusters, destination) {
        this.thrusters = new Array();
        this.code = code;
        this.numThrusters = numThrusters;
        this.thrusters = new Array();
        this.destination = destination;
    }
    set setDestination(destination) {
        this.destination = destination;
    }
    get getDestination() {
        return this.destination;
    }
    // mètode afegir propulsor al coet
    addThruster(thruster) {
        this.thrusters.push(thruster);
    }
    // mètode més potència
    powerUp(thrusters) {
        for (let thruster of thrusters) {
            if (thruster.currentPower < thruster.maxPower) {
                thruster.currentPower += 10;
            }
        }
    } // de 10 en 10 fins a la seva velocitat màxima
    // mètode menys potència
    powerDown(thrusters) {
        for (let thruster of thrusters) {
            if (thruster.currentPower > 0) {
                thruster.currentPower -= 10;
            }
        }
    }
    // Càlcul de velocitat. Recorrem l'array de propulsors i extraiem el currentPower de cada un.
    calculateSpeed() {
        let speed = 0;
        let i;
        for (i = 0; i < this.thrusters.length; i++) {
            speed += this.thrusters[i].currentPower;
        }
        return speed;
    }
}
