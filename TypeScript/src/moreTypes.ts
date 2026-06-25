// =========================================================================
// SECTION 1: THE 'any' TYPE & TYPE ASSERTION
// =========================================================================

/**
 * FEATURE: The 'any' Type (The "Escape Hatch")
 * CONCEPT: Turning off the type-checker.
 * * By giving 'drinkNumber' the type 'any', we tell TypeScript: "Stop tracking this."
 * It mimics plain, dynamically-typed JavaScript. We can assign a string, a number, 
 * or an object to it without compilation errors, which compromises type safety.
 */
let drinkNumber: any = "10";

/**
 * FEATURE: Type Assertion (The 'as' Keyword)
 * CONCEPT: Overriding the compiler's inference.
 * * 'drinkNumber' is technically typed as 'any', so TypeScript doesn't know it holds 
 * a string. By writing `(drinkNumber as string)`, we assert (forcefully tell) the 
 * compiler: "Treat this variable specifically as a string right here." 
 * This unlocks string-specific autocomplete properties like `.length`.
 * * CRITICAL NOTE: Type assertion is NOT type casting. It does not alter or transform 
 * the value at runtime. If 'drinkNumber' actually held a number, `(drinkNumber as string).length` 
 * would safely pass the compiler but output `undefined` at runtime.
 */
let numericLength: number = (drinkNumber as string).length;

console.log(numericLength); // Output: 2


// =========================================================================
// SECTION 2: TYPE ALIASES, JSON PARSING, & TYPE GUARDING
// =========================================================================

try {
    /**
     * FEATURE: Type Alias (Object Blueprint)
     * CONCEPT: Creating custom domain data shapes.
     * * Using the 'type' keyword, we declare a custom object structure named 'Drink'. 
     * This establishes a contract specifying that any object labeled as a 'Drink' 
     * MUST possess a string 'name' and a numeric 'price'.
     */
    type Drink = {
        name : string;
        price : number;
    }
    
    // Simulating a payload string incoming from a database or API network call
    let myDrink = '{"name": "Old Monk", "price":650}';
    
    /**
     * FEATURE: JSON Parsing with Type Assertion
     * CONCEPT: Restoring type safety to unstructured runtime data.
     * * Out of the box, `JSON.parse()` returns the `any` type because TypeScript cannot 
     * evaluate the contents of a string during compilation. By appending `as Drink`, 
     * we structurally model the runtime JSON object, granting full autocomplete benefits.
     */
    let myDrinkObject = JSON.parse(myDrink) as Drink;
    
    console.log(myDrinkObject.price); // Output: 650
    console.log(myDrinkObject.name);  // Output: "Old Monk"
    console.log(myDrinkObject);       // Output: { name: 'Old Monk', price: 650 }

} catch (error) {
    /**
     * FEATURE: Type Guard / Narrowing via 'instanceof'
     * CONCEPT: Safe runtime error evaluation.
     * * In modern TypeScript, the caught 'error' variable inside a catch block defaults 
     * to the type `unknown` because JavaScript allows throwing literally anything (strings, numbers, etc.).
     * The `instanceof Error` check serves as a "Type Guard." If the runtime check yields true, 
     * TypeScript "narrows" the type of 'error' from `unknown` to a native JavaScript `Error` object, 
     * safely enabling access to the `.message` property.
     */
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}


// =========================================================================
// SECTION 3: THE 'unknown' TYPE & TYPE NARROWING
// =========================================================================

/**
 * FEATURE: The 'unknown' Type (The Type-Safe 'any')
 * CONCEPT: Safe, multi-type variable handling.
 * * Unlike `any`, which lets you perform any operation immediately, `unknown` says: 
 * "This variable can hold absolutely anything, but you cannot use it until you 
 * explicitly verify what type it is." It is vastly safer than `any`.
 */
let newDrink: unknown;

newDrink = "Blue Label"; // Perfectly legal
newDrink = 25000;        // Perfectly legal
newDrink = [1, 2, 3, 4]; // Perfectly legal

// If we tried to call `newDrink.toUpperCase()` right here, the compiler would block it!

/**
 * FEATURE: Type Guard / Narrowing via 'typeof'
 * CONCEPT: Condition-based type refinement.
 * * By executing an `if (typeof newDrink === "string")` statement, we run a runtime evaluation. 
 * Inside this block, TypeScript is smart enough to narrow the type of 'newDrink' from 
 * `unknown` to exclusively `string`. Now, calling string-native methods is completely safe.
 */
if (typeof newDrink === "string") {
    newDrink.toUpperCase();
}


// =========================================================================
// SECTION 4: UNION TYPES, STRING LITERALS, & EXHAUSTIVENESS CHECKING
// =========================================================================

/**
 * FEATURE: String Literal Union Type
 * CONCEPT: Creating fixed sets of exact values.
 * * Instead of declaring 'Role' as a broad `string`, we define a Union type consisting of two 
 * distinct String Literals: "Customer" or "Bartender". A variable assigned this type 
 * cannot hold any value other than those exact two strings.
 */
type Role = "Customer" | "Bartender";

/**
 * FEATURE: Void Return Type & Exhaustiveness Observation
 * CONCEPT: Functions that perform actions but emit no value.
 * * The `: void` return type annotation signals that this function intentionally returns 
 * no data (it executes side effects via `console.log` and then stops).
 */
function enteryBasedOnRole(role: Role): void {
    if (role === "Bartender") {
        console.log("Go to from backdoor");
    }

    if (role === "Customer") {
        console.log("Show your ID");
    }

    /**
     * OBSERVE THIS LINE: `role;`
     * CONCEPT: Type Pruning / Dead Code Analysis
     * * If you hover your mouse cursor over this final `role;` line inside an IDE, TypeScript 
     * will evaluate its remaining type as `never`. Why? Because all possible paths for 
     * "Bartender" and "Customer" have been analyzed in the conditional blocks above. 
     * Since there are no remaining string options left inside the 'Role' union, the variable 
     * is completely exhausted.
     */
    role; 
}


// =========================================================================
// SECTION 5: THE 'never' RETURN TYPE
// =========================================================================

/**
 * FEATURE: The 'never' Type
 * CONCEPT: Control flows that never reach an end state.
 * * The `never` type indicates values that can never happen. Applied to a function's return signature, 
 * it means the function **will never finish execution normally**. This occurs when a function 
 * throws an unhandled exception or contains an infinite loop. 
 * * Note the difference from `void`: A `void` function runs and cleanly returns nothing. A `never` 
 * function never reaches its closing curly brace.
 */
function neverReturn(): never {
    while (true) {} // Infinite loop prevents the function from ever returning.
}


// =========================================================================
// SECTION 6: DOM TYPE ASSERTION
// =========================================================================

/**
 * FEATURE: DOM Type Assertion
 * CONCEPT: Elevating basic web environment types to specialized elements.
 * * By default, document selectors return a generic `HTMLElement | null`. A generic `HTMLElement` 
 * does not know anything about text input fields—it does not possess a `.value` or `.placeholder` property.
 * * By writing `as HTMLInputElement`, we explicitly inform the compiler: "I am certain this element 
 * in the HTML DOM is an input element." This grants direct access to specialized form properties 
 * like `inputElement.value`.
 */
const inputElement = document.getElementById("input") as HTMLInputElement;