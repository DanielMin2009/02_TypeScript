"use strict";
class Rocket {
    constructor(code) {
        this._thrusters = new Array();
        this._code = code;
        this._thrusters = new Array();
    }
    set code(code) {
        this._code = code;
    }
    get code() {
        return this._code;
    }
    get thrusters() {
        return this._thrusters;
    }
    // mètode afegir propulsor al coet
    addThruster(thruster) {
        this._thrusters.push(thruster);
    }
}
