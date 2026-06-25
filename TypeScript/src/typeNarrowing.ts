
function getDrinks(kind: string | number): string | number {
    if (typeof kind === "string") {
        return `You have selected a ${kind} drink.`;
    } else if (typeof kind === "number") {
        return `You have selected ${kind} drinks.`;
    } else {
        return "Invalid input.";
    }
}

console.log(getDrinks("vodka"))
console.log(getDrinks(5))


// --------------------------------------------------------------------------------------------------------------------- //

function serveDrink (drink?: string) : string {
    if (drink) {
        return `Serving you a ${drink} drink.`;
    } else {
        return "No drink selected. Please choose a drink.";
    }
}

console.log(serveDrink("Mojito"))
console.log(serveDrink())


// --------------------------------------------------------------------------------------------------------------------- // 

function drinkSize(size: "small" | "medium" | "large" | number): string {
    // 1. Handle the number case first using typeof
    if (typeof size === "number") {
        return `You have selected ${size} drinks.`;
    }

    // 2. Handle the specific string cases
    switch (size) {
        case "small":
            return "You have selected a small drink.";
        case "medium":
            return "You have selected a medium drink.";
        case "large":
            return "You have selected a large drink.";
        default:
            // TypeScript knows 'size' can only be never here if all types are handled,
            // but a default fallback is safe for runtime.
            return "Invalid size selected.";
    }
}

console.log(drinkSize("medium"))
console.log(drinkSize(3))


// --------------------------------------------------------------------------------------------------------------------- //

class vodka {
    serve(){
        return "Serving you a vodka drink.";
    }
}
class whiskey {
    serve(){
        return "Serving you a whiskey drink.";
    }
}

function serveAlcohol(drink: vodka | whiskey): string {
    if (drink instanceof vodka) {
        return drink.serve();
    } else if (drink instanceof whiskey) {
        return drink.serve();
    } else {
        return "Invalid drink type.";
    }
}

const myVodka = new vodka();
const myWhiskey = new whiskey();

console.log(serveAlcohol(myVodka))
console.log(serveAlcohol(myWhiskey))



// Type Aliases ---------------------------------------->>>

type Drink = "Cocktail" | "Mocktail" | "Juice" | "vodka" | "whiskey";

function serveDrinkType(drink: Drink): string {
    return `Serving you a ${drink} drink.`;
}

console.log(serveDrinkType("Cocktail"))
console.log(serveDrinkType("vodka"))
console.log(serveDrinkType("Juice"))


// Type Aliases with Intersection Types ---------------------------------------->>>
type customer = {
    name: string;
    age: number;
    favoriteDrink: Drink;
}

type bartender = customer & {
    experience: number;
}

function serveCustomer (provider : bartender ): string {
    return `Hello ${provider.name}, you are ${provider.age} years old and your favorite drink is ${provider.favoriteDrink}. I have ${provider.experience} years of experience as a bartender.`;
}

const myBartender: bartender = {
    name: "John Cena",
    age: 30,
    favoriteDrink: "whiskey",
    experience: 5
}

console.log(serveCustomer(myBartender))


// Type Aliases with Union Types ---------------------------------------->>>
type BroCode = {
    type: "Beer";
    alcoholContent: number;
}

type MagicMoment = {
    type: "vodka";
    flavor: string;
}

type RedLabel = {
    type: "whiskey";
    brand: string;
}

type DrinkUnion = BroCode | MagicMoment | RedLabel;

function serveUnionDrink(drink: DrinkUnion): string {
    switch (drink.type) {
        case "Beer":
            return `Serving you a ${drink.type} with ${drink.alcoholContent}% alcohol content.`;
        case "vodka":
            return `Serving you a ${drink.type} with ${drink.flavor} flavor.`;
        case "whiskey":
            return `Serving you a ${drink.type} from the brand ${drink.brand}.`;
        default:
            return "Invalid drink type.";
    }
}

const myBroCode: BroCode = { type: "Beer", alcoholContent: 12 };
const myMagicMoment: MagicMoment = { type: "vodka", flavor: "Green Apple" };
const myRedLabel: RedLabel = { type: "whiskey", brand: "Johnnie Walker" };

console.log(serveUnionDrink(myBroCode))
console.log(serveUnionDrink(myMagicMoment))
console.log(serveUnionDrink(myRedLabel))

function drinkInfo (drink: BroCode | MagicMoment | RedLabel): string {
    if ("alcoholContent" in drink) {
        return `This is a ${drink.type} with ${drink.alcoholContent}% alcohol content.`;
    } else if ("flavor" in drink) {
        return `This is a ${drink.type} with ${drink.flavor} flavor.`;
    } else if ("brand" in drink) {
        return `This is a ${drink.type} from the brand ${drink.brand}.`;
    } else {
        return "Invalid drink type.";
    }
}

console.log(drinkInfo(myBroCode))
console.log(drinkInfo(myMagicMoment))
console.log(drinkInfo(myRedLabel))