// ========== 1. FUNCTION DECLARATIONS ==========
// Basic function declaration
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Function with multiple parameters
function add(a: number, b: number): number {
  return a + b;
}

// Function with no return type (void)
function logMessage(message: string): void {
  console.log(message);
}

// ========== 2. FUNCTION EXPRESSIONS ==========
// Anonymous function expression
const multiply = function (a: number, b: number): number {
  return a * b;
};

// Named function expression
const subtract = function minus(a: number, b: number): number {
  return a - b;
};

// ========== 3. ARROW FUNCTIONS ==========
// Simple arrow function
const divide: (a: number, b: number) => number = (a, b) => a / b;

// Arrow function with single parameter (parentheses optional)
const square = (x: number): number => x * x;

// Arrow function with no parameters
const getCurrentTime = (): string => new Date().toISOString();

// Arrow function with multiple statements
const calculateArea = (radius: number): number => {
  const PI = 3.14159;
  return PI * radius * radius;
};

// ========== 4. FUNCTION WITH OPTIONAL PARAMETERS ==========
function greetUser(firstName: string, lastName?: string): string {
  return lastName ? `Hello, ${firstName} ${lastName}!` : `Hello, ${firstName}!`;
}

// ========== 5. FUNCTION WITH DEFAULT PARAMETERS ==========
function createUser(name: string, role: string = "user", isActive: boolean = true): void {
  console.log(`User: ${name}, Role: ${role}, Active: ${isActive}`);
}

// ========== 6. FUNCTION WITH REST PARAMETERS ==========
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

function printNames(...names: string[]): void {
  names.forEach((name) => console.log(name));
}

// ========== 7. FUNCTION WITH UNION TYPES ==========
function processValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(`String: ${value.toUpperCase()}`);
  } else {
    console.log(`Number: ${value * 2}`);
  }
}

// ========== 8. FUNCTION OVERLOADING ==========
// Overload signatures
function formatDate(date: Date): string;
function formatDate(date: string): Date;

// Implementation
function formatDate(date: Date | string): string | Date {
  if (date instanceof Date) {
    return date.toISOString();
  } else {
    return new Date(date);
  }
}

// ========== 9. GENERIC FUNCTIONS ==========
// Simple generic function
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Generic function with multiple type parameters
function combine<T, U>(first: T, second: U): (T | U)[] {
  return [first, second];
}

// Generic function with constraints
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

// ========== 10. ASYNC FUNCTIONS ==========
// Async function returning Promise
async function fetchUserData(userId: number): Promise<string> {
  // Simulating API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`User data for ID: ${userId}`);
    }, 1000);
  });
}

// Async arrow function
const fetchPosts = async (userId: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Posts for user: ${userId}`);
    }, 500);
  });
};

// ========== 11. CALLBACK FUNCTIONS ==========
function executeCallback(callback: (value: string) => void): void {
  callback("Callback executed!");
}

// Function that accepts a callback
function processArray(arr: number[], callback: (item: number) => void): void {
  arr.forEach(callback);
}

// ========== 12. HIGHER-ORDER FUNCTIONS ==========
// Function returning another function
function multiplier(factor: number): (x: number) => number {
  return (x: number) => x * factor;
}

// Function that takes a function as parameter
function applyOperation(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number {
  return operation(a, b);
}

// ========== 13. OBJECT METHODS (Functions in Classes/Objects) ==========
interface Calculator {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
}

const calculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

class MathHelper {
  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number | string {
    return b === 0 ? "Cannot divide by zero" : a / b;
  }
}

// ========== 14. CONSTRUCTOR FUNCTIONS ==========
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): string {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}

// ========== 15. FUNCTIONS WITH TYPE ALIASES ==========
type MathOperation = (a: number, b: number) => number;

const power: MathOperation = (a, b) => Math.pow(a, b);

// ========== 16. FUNCTIONS WITH INTERFACE ==========
interface StringProcessor {
  (input: string): string;
}

const toUpperCase: StringProcessor = (input) => input.toUpperCase();
const toLowerCase: StringProcessor = (input) => input.toLowerCase();

// ========== 17. RECURSIVE FUNCTIONS ==========
function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// ========== 18. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) ==========
const result = (function (name: string): string {
  return `Hello, ${name}!`;
})("Alice");

// ========== 19. FUNCTIONS WITH TUPLE PARAMETERS ==========
function processTuple([x, y]: [number, number]): number {
  return x + y;
}

// ========== 20. THIS CONTEXT IN FUNCTIONS ==========
class Counter {
  count: number = 0;

  // Regular method (has 'this' context)
  increment(): void {
    this.count++;
  }

  // Arrow method (always has correct 'this' context)
  incrementArrow = (): void => {
    this.count++;
  };
}

// ========== EXAMPLES AND TESTS ==========
// Test function declarations
console.log("=== Function Declarations ===");
console.log(greet("Alice"));
console.log(add(5, 3));
logMessage("Testing void function");

// Test function expressions
console.log("\n=== Function Expressions ===");
console.log(multiply(4, 5));
console.log(subtract(10, 3));

// Test arrow functions
console.log("\n=== Arrow Functions ===");
console.log(divide(20, 4));
console.log(square(5));
console.log(getCurrentTime());
console.log(calculateArea(5));

// Test optional and default parameters
console.log("\n=== Optional & Default Parameters ===");
console.log(greetUser("Bob"));
console.log(greetUser("Bob", "Smith"));
createUser("Charlie");
createUser("Diana", "admin", false);

// Test rest parameters
console.log("\n=== Rest Parameters ===");
console.log(sumAll(1, 2, 3, 4, 5));
printNames("Alice", "Bob", "Charlie");

// Test union types
console.log("\n=== Union Types ===");
processValue("hello");
processValue(42);

// Test generic functions
console.log("\n=== Generic Functions ===");
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
console.log(combine(10, "hello"));
console.log(getLength("TypeScript"));
console.log(getLength([1, 2, 3, 4]));

// Test async functions
console.log("\n=== Async Functions ===");
(async () => {
  const userData = await fetchUserData(1);
  console.log(userData);

  const posts = await fetchPosts(1);
  console.log(posts);
})();

// Test callback functions
console.log("\n=== Callback Functions ===");
executeCallback((msg) => console.log(msg));
processArray([1, 2, 3], (item) => console.log(item * 2));

// Test higher-order functions
console.log("\n=== Higher-Order Functions ===");
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5));
console.log(triple(5));
console.log(applyOperation(10, 5, (a, b) => a + b));
console.log(applyOperation(10, 5, (a, b) => a - b));

// Test object methods
console.log("\n=== Object Methods ===");
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
const helper = new MathHelper();
console.log(helper.multiply(4, 5));
console.log(helper.divide(20, 4));

// Test constructor functions
console.log("\n=== Constructor Functions ===");
const person = new Person("Eve", 30);
console.log(person.introduce());

// Test type aliases
console.log("\n=== Type Aliases ===");
console.log(power(2, 8));

// Test interface functions
console.log("\n=== Interface Functions ===");
console.log(toUpperCase("typescript"));
console.log(toLowerCase("TYPESCRIPT"));

// Test recursive functions
console.log("\n=== Recursive Functions ===");
console.log(factorial(5));
console.log(fibonacci(7));

// Test IIFE
console.log("\n=== IIFE ===");
console.log(result);

// Test tuple parameters
console.log("\n=== Tuple Parameters ===");
console.log(processTuple([10, 20]));

// Test this context
console.log("\n=== This Context ===");
const counter = new Counter();
counter.increment();
console.log(counter.count);
counter.incrementArrow();
console.log(counter.count);
