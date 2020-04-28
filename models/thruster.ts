class Thruster {
    public _maxPower: number;
    public _currentPower: number;

    constructor(maxPower: number) {
        this._maxPower = maxPower;
        this._currentPower = 0;
    }
}