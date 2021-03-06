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

                // UI al mètode perquè vagi d'acord amb cada vegada que accelerem
                let stars: any = (<HTMLInputElement>document.getElementById("asterisks" + this.destination));
                let star: any = document.createElement('li');
                star.setAttribute("class", "progressStar");
                star.innerHTML += `<i class="fas fa-star-of-life red"></i>`;
                stars.appendChild(star);
                if (this.destination == "Mars") {
                    star.style.color = "#e73845";
                } else if (this.destination == "Saturn") {
                    star.style.color = "#00b1ff";
                }
            }
        }
    } // de 10 en 10 fins a la seva velocitat màxima

    // mètode menys potència
    powerDown(thrusters: Thruster[]) {
        for (let thruster of thrusters) {
            if (thruster.currentPower > 0) {
                thruster.currentPower -= 10;

                // UI al mètode perquè vagi d'acord amb cada vegada que frenem
                if (this.destination == "Mars") {
                    let starsMars: any = (<HTMLInputElement>document.getElementById("asterisksMars"));
                    starsMars.removeChild(starsMars.lastChild);
                } else if (this.destination == "Saturn") {
                    let starsSaturn: any = (<HTMLInputElement>document.getElementById("asterisksSaturn"));
                    starsSaturn.removeChild(starsSaturn.lastChild);
                }
            }
        }
    }

    // Càlcul de velocitat. Recorrem l'array de propulsors i extraiem el currentPower de cada un.
    currentSpeed() {
        let speed: number = 0;
        let i: number;
        for (i = 0; i < this.thrusters.length; i++) {
            speed += this.thrusters[i].currentPower;
        }
        return speed;
    }
}

