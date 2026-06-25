let totalDinks: number | string = 10; // This variable can hold either a number or a string value.

totalDinks = "Ten"; // This is valid as the variable 'totalDinks' can hold a string value.

let drinkTypes: "Cocktail" | "Mocktail" | "Juice" | "vodka" | "whiskey" = "whiskey"; // This variable can hold one of the specified string literals.

drinkTypes = "Cocktail"; // This is valid as 'Cocktail' is one of the allowed string literals.

console.log(`Total drinks: ${totalDinks}, Drink type: ${drinkTypes}`);

// In the above code, we have declared a variable 'totalDinks' that can hold either a number or a string value using a union type. We have also declared a variable 'drinkTypes' that can only hold one of the specified string literals. This allows us to have more flexibility in our code while still maintaining type safety.


// -------------------------------------------------------------------------------------------------------------------------------- //

/*
In TypeScript, the 'any' type is a special type that can hold any value without any type checking. It is often used when you want to opt-out of type checking for a particular variable or when you are working with dynamic data.
*/

// For example:

let randomValue: any = 10; // This variable can hold any value, and it is currently assigned a number.

randomValue = "Hello"; // This is valid as the variable 'randomValue' can hold a string value.

randomValue = { name: "Mrinal", age: 30 }; // This is also valid as the variable 'randomValue' can hold an object.

console.log(randomValue); // This will output the current value of 'randomValue', which is the object { name: "Mrinal", age: 30 }.

// In the above code, we have declared a variable 'randomValue' of type 'any', which allows us to assign it values of different types without any type checking. However, using 'any' can lead to potential issues as it bypasses the benefits of TypeScript's type system, so it should be used with caution.

// But it is generally recommended to avoid using 'any' whenever possible and instead use more specific types to take advantage of TypeScript's type checking capabilities.

let totalDrinks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]; // This is an array of strings representing the total drinks.

let currentDrink: string | undefined;

for (let drink of totalDrinks) {
    if (drink === "5") {
        currentDrink = drink;
        break;
    }
}
console.log(currentDrink)