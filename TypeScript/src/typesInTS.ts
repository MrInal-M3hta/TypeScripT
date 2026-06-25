let drink = "Minty Jamun"
// drink = 12 // This will throw an error because we are trying to assign a number to a variable that is of type string.
drink = "Old Monk" // This is valid as the variable 'drink' is of type string, and we are assigning a string value to it.

let typeOfDrink: string = "On the rocks" // Here we are explicitly declaring the type of the variable 'typeOfDrink' as string and assigning it a value.

let glass = Math.random() > 0.5 ? 10 : 5

let isFull: boolean = glass > 7 ? true : false

console.log(`The glass is ${isFull ? "full" : "not full"}.`);

// TypeScript is a statically typed language, which means that the type of a variable is determined at compile time. This allows for better type checking and can help catch errors before they occur at runtime.

// In the above code, we have declared a variable 'drink' of type string and assigned it a value. We also have a variable 'glass' that is assigned a random number between 5 and 10. Finally, we have a boolean variable 'isFull' that is determined based on the value of 'glass'. The console.log statement then outputs whether the glass is full or not based on the value of 'isFull'.
