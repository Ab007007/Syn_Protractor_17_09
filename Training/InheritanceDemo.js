class Car {

    startEngine() {
        console.log("Start Engine");
    }

    stopEngine() {
        console.log("Stop Engine");
    }
}

class Tyota extends Car {

    aboutTyota() {
        console.log("Japan based Company!!");
    }

    differentModels() {
        console.log("Innova, Fortuner...");
    }
}

class Innova extends Tyota {

    model() {
        console.log("Brand new 2022 Car");
    }
}


let c = new Innova()
c.startEngine()
c.aboutTyota()
c.differentModels()
c.model()
c.stopEngine()