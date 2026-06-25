// =========================================================================
// Object Literal
// =========================================================================
const drinks = {
  name: "Mojito",
  price: 10,
  isAlcoholic: true,
  ingredients: ["Rum", "Mint", "Lime", "Sugar", "Soda Water"],
  serve() {
    return `Serving you a ${this.name} drink.`;
  },
};

console.log(drinks.name);
console.log(drinks.serve());

// =========================================================================
// Explicit Inline Types
// =========================================================================
let cocktail: { 
    name: string; 
    price: number; 
    isAlcoholic: boolean; 
    ingredients: string[]; 
    serve: () => string; 
};

cocktail = {
  name: "Mojito",
  price: 10,
  isAlcoholic: true,
  ingredients: ["Rum", "Mint", "Lime", "Sugar", "Soda Water"],
  serve() {
    return `Serving you a ${this.name} drink.`;
  },
};

console.log(cocktail.name);
console.log(cocktail.serve());
console.log(cocktail.ingredients[1])

// =========================================================================
// Type Aliases
// =========================================================================
type wiskey = {
    name : string;
    price : number;
}

const drink : wiskey = {
    name : "Red Label",
    price : 2400
}

console.log(drink.name);
console.log(drink.price);

// =========================================================================
// Interfaces 
// =========================================================================
interface vodka {
    name : string;
    price : number;
    flavour : string;
}

const shots: vodka = {
    name: "Magic Moment",
    price: 1000,
    flavour: "Green Apple"
}

console.log(shots.name);
console.log(shots.flavour);

// =========================================================================
// Classes
// =========================================================================
class alcohol {
    type : string;
    name: string;

    constructor(type: string, name : string) {
        this.type = type;
        this.name = name;
    }

    drink(){
        console.log(`You choose ${this.type} and this is your drink ${this.name}`)
    }
}

const alcohol1 = new alcohol("Wiskey", "Black Label")

alcohol1.drink()
console.log(alcohol1.name)

// =========================================================================
// Duck Type (Structural Typing)
// =========================================================================
/**
 * FEATURE: Structural Typing (Commonly called "Duck Typing")
 * CONCEPT: "If it walks like a duck and quacks like a duck, it's a duck."
 * * TypeScript checks the *shape* of the data, not its name or origin. 
 * Even though the 'Coffee' object has an extra field (`beans`), it still completely satisfies 
 * the minimum required shape of 'Brew' (it contains `brewTime: number`). 
 * Therefore, TypeScript allows this assignment safely.
 */
type Brew = {
    brewTime: number;
}
const Coffee = {
    brewTime: 5,
    beans: "Arabica"
}
const myCoffee: Brew = Coffee;

console.log(myCoffee)

// =========================================================================
// Utility Types
// =========================================================================
type Wiskey = {
    name: string,
    price: number,
    isPremium: boolean 
}

const updateWiskey = (updates: Partial<Wiskey>): void =>{
    console.log(`Your Dink name is ${updates.name} and it's price is ₹${updates.price} and it is a premium drink ${updates.isPremium}`)
}

updateWiskey({name: "Blue Label"})
updateWiskey({price: 25000})
updateWiskey({name: "Blue Label", price: 25000, isPremium: true})
updateWiskey({})



type DrinkOrder = {
    name?: string;
    price: number;
    totalDrinks: number;
}

const placeOrder = (order: Required<DrinkOrder>): void =>{
    console.log(`Your Drink name is ${order.name} and one drink price is ₹${order.price} and your total drinks are ${order.totalDrinks} ,your total bill will be ₹${order.price * order.totalDrinks}`)
}

placeOrder({name: "Red Label", price: 150, totalDrinks: 6})



type Drink = {
    name: string;
    price: number;
    ingredients: string[];
    ispremium: boolean;
}

type PickDrink = Pick< Drink, "name"| "price" >;

const myDrink: PickDrink = {
    name: "Old Monk",
    price: 650,
}

console.log(myDrink)



type newDrink = {
    name: string;
    price: number;
    ingredients: string[];
    ispremium: boolean;
}

type OmitDrink = Omit<newDrink, "ingredients">

const myNewDrink: OmitDrink = {
    name: "Indri",
    price: 1200,
    ispremium: true
}

console.log(myNewDrink)