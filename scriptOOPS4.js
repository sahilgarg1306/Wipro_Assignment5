// ============================================
// Q4. Constructor & Object Creation
// ============================================

console.log("Q4. Constructor & Object Creation");

class car{
    constructor(brand, model, price){
        this.brand=brand;
        this.model=model;
        this.price=price;
    }

    get Brand(){
        return this.brand;
    }
    set Brand(value){
        this.brand=value;
    }

    get Model(){
        return this.model;
    }   
    set Model(value){
        this.model=value;
    }   

    get Price(){
        return this.price;
    }   
    set Price(value){
        this.price=value;
    }

    displayCarDetails(){
        console.log("Brand: " + this.brand);
        console.log("Model: " + this.model);
        console.log("Price: " + this.price);
    }
}

const car1 = new car("Toyota", "Camry", 30000);
const car2 = new car("Honda", "Civic", 25000);
const car3 = new car("Ford", "Mustang", 50000);
car1.displayCarDetails()
console.log(".............................................");
car2.displayCarDetails()
console.log(".............................................");
car3.displayCarDetails()


console.log("============================================");