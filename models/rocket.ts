class Rocket {
    _code: string;
    _thrusters: Thruster[] = new Array();

    constructor(code: string) {
        this._code = code;
        this._thrusters = new Array();
    }

    set code(code: string) {
        this._code = code;
    }
    get code(): string { 
        return this._code;
    }    
    get thrusters() {
        return this._thrusters
    }

    // mètode afegir propulsor al coet
    addThruster(thruster: Thruster): void {
        this._thrusters.push(thruster); 
    } 

    // mètode accelerar 
}