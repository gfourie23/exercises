class myVehicle {
    constructor(make, year, model) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep.";
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Car extends myVehicle{
    constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
    }
}

class Motorcyle extends myVehicle {
    constructor(make, model, year) {
        super(make, model, year); 
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!";
    }
}

class Garage {
    constructor( capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if(!(newVehicle instanceof myVehicle)) {
            return "Only vehicles are allowed in here!"
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!"
    }
}