class Rocket {
    code: string;
    thrusters: Thruster[] = new Array();
    numThrusters: number;

    constructor(code: string, numThrusters: number) {
        this.code = code;
        this.numThrusters = numThrusters;
        this.thrusters = new Array();
    }

    set setCode(code: string) {
        this.code = code;
    }
    get getCode(): string { 
        return this.code;
    }    
    get getThrusters() {
        return this.thrusters
    }

    // mètode afegir propulsor al coet
    addThruster(thruster: Thruster): void {
        this.thrusters.push(thruster); 
    } 

    // mètode accelerar 
}