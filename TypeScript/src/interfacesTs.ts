// =========================================================================
// SECTION 1: OBJECT TYPING AND STANDARD FUNCTION USAGE
// =========================================================================
type drinks = {
    type: string;
    name: string;
    price: number;
};

function myDrink(order:drinks): string {
    return (`You ordered ${order.type} and here's your drink ${order.name} and it cost ₹${order.price}`)
}

let orderDrink : drinks = {
    type: "Wiskey",
    name: "Red Label",
    price: 2400
}

console.log(myDrink(orderDrink))


// =========================================================================
// SECTION 2: CLASS IMPLEMENTATION WITH INTERFACES
// =========================================================================
/*
    Interfaces excel at modeling the structure of objects and classes. 
    Here, 'CupSize' states a structural requirement: an object must contain a 'size' property.
 */
interface CupSize {
    size: "Small" | "Large" | "Medium"
}
/*
    * * The `implements` keyword binds a Class to an Interface. It forces the class `Chai` 
        * to adhere to the rulebook written inside `CupSize`. If `Chai` does not provide a `size` property, 
        * the TypeScript compiler will throw an error immediately.
    * * Good Practice Rule: As you correctly noted in your comment, standard convention dictates 
        * prioritizing `interface` over `type` when implementing architectures on `class` structures.
 */
class Chai implements CupSize{
    size: "Small" | "Large" | "Medium" = "Medium";
}

const myChai = new Chai()
console.log(myChai.size)
// Use interface in class meanwhile we can also use type, but always prefer to use interface it a good way.


// =========================================================================
// SECTION 3: CLASS IMPLEMENTATION WITH TYPE ALIASES
// =========================================================================
type TeaRecipe = {
    water: number;
    milk: number;
    sugar: number
}

class MasalaChai implements TeaRecipe {
    water: number = 100;
    milk: number = 40;
    sugar: number = 20;
}

const myTea = new MasalaChai();
console.log(myTea);


// =========================================================================
// SECTION 4: INTERFACES WITH METHODS VS. CLASS METHODS
// =========================================================================
interface DrinkType {
    name: string;
    type: string;
    price: number;
    premiumDrink : boolean;
    // Note: We could also define a method contract here, like: serve(): void;
}

/**
 * FEATURE: Class Extension Beyond an Interface
 * CONCEPT: The contract is a minimum requirement.
 * * A class must fulfill *at least* everything inside the interface it implements. However, 
 * it is free to add its own extra features! 
 * * Here, `ServeDrinks` provides the 4 properties demanded by `DrinkType`, but also introduces 
 * a custom `serve()` method completely independent of the interface.
 */

class ServeDrinks implements DrinkType{
    name: string = "Black Label";
    type: string = "Wiskey";
    price: number = 25000;
    premiumDrink: boolean = true;

    serve(){
        console.log(`You choose ${this.name}`)
    }
}

const MyDrink = new ServeDrinks();
console.log(MyDrink);
console.log(MyDrink.serve);


// =========================================================================
// SECTION 5: LITERAL UNION TYPES
// =========================================================================
type TeaType = "Masala" | "Ginger" | "Lemon"

function orderChai(teaType:TeaType) {
    console.log(teaType)
}

orderChai("Ginger")


// =========================================================================
// Interface with a class
// =========================================================================

interface Alcohol {
    name: string;
    type: string;
    alcoholPercentage: number;

    showInfo(): void;
}

class Drink implements Alcohol {
    constructor(
        public name: string,
        public type: string,
        public alcoholPercentage: number
    ){}

    showInfo(): void {
        console.log(`${this.name} is a ${this.type} with ${this.alcoholPercentage}% alcohol`)
    }
}

const vodka = new Drink("Smirnoff", "Vodka", 40)
vodka.showInfo();

// =========================================================================
// Interface with Function 
// =========================================================================

interface BuyAlchol {
    (name: string, quantity: number): string 
}

const order: BuyAlchol = (name, quantity) =>{
    return `You order ${quantity} bottles of ${name}`
}

console.log(order("Old Monk", 2))

// =========================================================================
// Interface + Function + Extends Together
// =========================================================================

interface Alcoholl {
    name: string;
    type: string;
}

interface PremiumAlcohol extends Alcoholl {
    Price: number
}

interface ShowDetails {
    (drink: PremiumAlcohol): void
}

const details: ShowDetails = (drink) => {
    console.log(`${drink.name} is a ${drink.type}. Price: ${drink.Price}`)
}

details({
    name: "Chivas Regal",
    type: "Whiskey",
    Price: 4500
})

// =========================================================================
// Example of interface
// =========================================================================

interface BeerMachine {
    start(): void;
    stop(): void;
    (price: number): number;
}

// 1. Create the main function execution block
const beermachine = function (price: number): number {
    console.log(`Processing payment of $${price}`);
    return price;
} as BeerMachine; // Cast it to the interface

// 2. Attach the object methods to the function
beermachine.start = function() {
    console.log("Machine is starting till Mug is filling");
};

beermachine.stop = function() {
    console.log("Mug is completely filled machine was stopped!");
};

// 3. Testing all parts of the hybrid interface
beermachine.start();
beermachine.stop();

const changes = beermachine(5); // Calling the object directly as a function
console.log(`Change returned: $${changes}`);


// -------------------------- Other Way ------------------------->>>


// 1. Define the standalone properties/methods first
const machineMethods = {
    start() {
        console.log("Machine is starting till Mug is filling");
    },
    stop() {
        console.log("Mug is completely filled machine was stopped!");
    }
};

// 2. Define the base function
function baseMachine(price: number): number {
    console.log(`Processing payment of $${price}`);
    return price;
}

// 3. Merge them safely using Object.assign
// TypeScript automatically infers this combined type perfectly without any 'as' casting!
const machine: BeerMachine = Object.assign(baseMachine, machineMethods);

// 4. Test execution
machine.start();
machine.stop();
const change = machine(5);
console.log(`Change returned: $${change}`);