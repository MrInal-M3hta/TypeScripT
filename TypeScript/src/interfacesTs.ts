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