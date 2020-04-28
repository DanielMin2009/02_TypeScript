class Thruster {
    public maxPower: number;
    public currentPower: number;

    constructor(maxPower: number) {
        this.maxPower = maxPower;
        this.currentPower = 0;
    }
}