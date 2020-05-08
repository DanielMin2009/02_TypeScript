class Rocket {
    code: string;
    thrusters: Thruster[] = new Array();
    numThrusters: number;
    destination: string;

    constructor(code: string, numThrusters: number, destination: string) {
        this.code = code;
        this.numThrusters = numThrusters;
        this.thrusters = new Array();
        this.destination = destination;
    }

    set setDestination(destination: string) {
        this.destination = destination;
    }
    get getDestination(): string {
        return this.destination;
    }

    // mètode afegir propulsor al coet
    addThruster(thruster: Thruster): void {
        this.thrusters.push(thruster);
    }

    // mètode més potència
    powerUp(thrusters: Thruster[]) {
        for (let thruster of thrusters) {
            if (thruster.currentPower < thruster.maxPower) {
                thruster.currentPower += 10;
            }
        }
    } // de 10 en 10 fins a la seva velocitat màxima

    // mètode menys potència
    powerDown(thrusters: Thruster[]) {
        for (let thruster of thrusters) {
            if (thruster.currentPower > 0) {
                thruster.currentPower -= 10;
            }
        }
    }

    // Càlcul de velocitat. Recorrem l'array de propulsors i extraiem el currentPower de cada un.
    calculateSpeed() {
        let speed: number = 0;
        let i: number;
        for (i = 0; i < this.thrusters.length; i++) {
            speed += this.thrusters[i].currentPower;
        }
        return speed;
    }
}

