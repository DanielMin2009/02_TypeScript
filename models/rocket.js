"use strict";
class Rocket {
    constructor(code, numThrusters) {
        this.thrusters = new Array();
        this.code = code;
        this.numThrusters = numThrusters;
        this.thrusters = new Array();
    }
    set setCode(code) {
        this.code = code;
    }
    get getCode() {
        return this.code;
    }
    get getThrusters() {
        return this.thrusters;
    }
    // mètode afegir propulsor al coet
    addThruster(thruster) {
        this.thrusters.push(thruster);
    }
}
