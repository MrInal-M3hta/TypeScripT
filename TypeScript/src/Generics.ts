// ========== 1. BASIC GENERIC FUNCTION ==========
// Simple generic function with one type parameter
function wrapAlcohol<T>(value: T): { alcohol: T } {
  return { alcohol: value };
}

const wrappedWhiskey = wrapAlcohol("Jack Daniel's");
const wrappedProof = wrapAlcohol(40);
console.log("1. Basic Generic Function:", wrappedWhiskey, wrappedProof);

// ========== 2. GENERIC WITH ARRAY ==========
// Generic function working with arrays
function getFirstAlcohol<T>(alcohols: T[]): T | undefined {
  return alcohols[0];
}

const spirits = ["Whiskey", "Rum", "Vodka"];
const firstSpirit = getFirstAlcohol(spirits);
console.log("2. Generic with Array:", firstSpirit);

// ========== 3. GENERIC WITH MULTIPLE TYPE PARAMETERS ==========
// Function with multiple type parameters
function mixAlcohols<T, U>(drink1: T, drink2: U): { first: T; second: U } {
  return { first: drink1, second: drink2 };
}

const mixedDrink = mixAlcohols("Beer", 5);
console.log("3. Multiple Type Parameters:", mixedDrink);

// ========== 4. GENERIC INTERFACE ==========
// Interface with generic type
interface Bottle<T> {
  name: string;
  content: T;
  capacity: number;
}

const whiskeybottle: Bottle<string> = {
  name: "Jack Daniel's",
  content: "Tennessee Whiskey",
  capacity: 750,
};

const beerBottle: Bottle<number> = {
  name: "Bud Light",
  content: 5,
  capacity: 355,
};

console.log("4. Generic Interface:", whiskeybottle, beerBottle);

// ========== 5. GENERIC CLASS ==========
// Class with generic type parameter
class AlcoholStorage<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  getFirst(): T | undefined {
    return this.items[0];
  }
}

const stringStorage = new AlcoholStorage<string>();
stringStorage.add("Whiskey");
stringStorage.add("Rum");
console.log("5. Generic Class (strings):", stringStorage.getAll());

const numberStorage = new AlcoholStorage<number>();
numberStorage.add(40);
numberStorage.add(35);
console.log("5. Generic Class (numbers):", numberStorage.getAll());

// ========== 6. GENERIC WITH CONSTRAINTS ==========
// Generic function with type constraint
interface AlcoholInfo {
  name: string;
  abv: number;
}

function displayAlcoholInfo<T extends AlcoholInfo>(alcohol: T): string {
  return `${alcohol.name} - ABV: ${alcohol.abv}%`;
}

const vodka: AlcoholInfo = { name: "Smirnoff", abv: 40 };
console.log("6. Generic with Constraints:", displayAlcoholInfo(vodka));

// ========== 7. GENERIC WITH KEYOF ==========
// Generic function using keyof constraint
function getAlcoholProperty<T, K extends keyof T>(alcohol: T, key: K): T[K] {
  return alcohol[key];
}

const rum = { brand: "Bacardi", proof: 37.5, type: "Dark Rum" };
const brand = getAlcoholProperty(rum, "brand");
const proof = getAlcoholProperty(rum, "proof");
console.log("7. Generic with Keyof:", brand, proof);

// ========== 8. GENERIC ARRAY WITH TYPE CONSTRAINT ==========
// Generic array that extends a specific type
function getShortestName<T extends { name: string }>(items: T[]): T {
  return items.reduce((prev, curr) =>
    prev.name.length < curr.name.length ? prev : curr
  );
}

const brands = [
  { name: "Jack Daniel's", price: 25 },
  { name: "Rum", price: 15 },
  { name: "Gin", price: 20 },
];

// This will now print the whole object, or you can add .name here
console.log("8. Generic Array with Constraint:", getShortestName(brands).name);

// ========== 9. CONDITIONAL GENERIC TYPE ==========
// Generic with conditional type
type AlcoholType<T> = T extends number ? "Proof" : T extends string ? "Name" : "Unknown";

type Type1 = AlcoholType<40>; // "Proof"
type Type2 = AlcoholType<"Whiskey">; // "Name"
const typeExample1: Type1 = "Proof";
const typeExample2: Type2 = "Name";
console.log("9. Conditional Generic Type:", typeExample1, typeExample2);

// ========== 10. GENERIC WITH DEFAULT TYPE PARAMETER ==========
// Generic with default type
interface AlcoholRegistry<T = string> {
  name: T;
  quantity: number;
}

const stringRegistry: AlcoholRegistry = { name: "Whiskey", quantity: 10 };
const numberRegistry: AlcoholRegistry<number> = { name: 40, quantity: 5 };
console.log("10. Default Type Parameter:", stringRegistry, numberRegistry);

// ========== 11. GENERIC UTILITY TYPES - PARTIAL ==========
// Using Partial generic utility
interface FullAlcohol {
  brand: string;
  abv: number;
  type: string;
  origin: string;
}

function updateAlcohol(alcohol: FullAlcohol, update: Partial<FullAlcohol>): FullAlcohol {
  return { ...alcohol, ...update };
}

const original: FullAlcohol = {
  brand: "Scotch",
  abv: 40,
  type: "Whiskey",
  origin: "Scotland",
};
const updated = updateAlcohol(original, { abv: 42 });
console.log("11. Partial Utility Type:", updated);

// ========== 12. GENERIC UTILITY TYPES - PICK ==========
// Using Pick generic utility
type AlcoholBasics = Pick<FullAlcohol, "brand" | "type">;
const basics: AlcoholBasics = { brand: "Jack Daniel's", type: "Whiskey" };
console.log("12. Pick Utility Type:", basics);

// ========== 13. GENERIC UTILITY TYPES - RECORD ==========
// Using Record generic utility
type AlcoholCategories = "spirit" | "wine" | "beer" | "liqueur";
const alcoholCounts: Record<AlcoholCategories, number> = {
  spirit: 50,
  wine: 30,
  beer: 20,
  liqueur: 15,
};
console.log("13. Record Utility Type:", alcoholCounts);

// ========== 14. GENERIC FUNCTION WITH OVERLOADING ==========
// Generic function with overload signatures
function createAlcoholEntry<T>(data: T, label: "whiskey"): { type: "whiskey"; data: T };
function createAlcoholEntry<T>(data: T, label: "beer"): { type: "beer"; data: T };
function createAlcoholEntry<T>(data: T, label: string): { type: string; data: T } {
  return { type: label, data };
}

const whiskyEntry = createAlcoholEntry("Jack Daniel's", "whiskey");
const beerEntry = createAlcoholEntry("Corona", "beer");
console.log("14. Generic Function Overloading:", whiskyEntry, beerEntry);

// ========== 15. NESTED GENERIC TYPES ==========
// Generic types nested within each other
interface Container<T> {
  items: T[];
  metadata: {
    created: Date;
    label: string;
  };
}

const whiskeysCollection: Container<string> = {
  items: ["Jack Daniel's", "Johnnie Walker", "Glenfiddich"],
  metadata: {
    created: new Date(),
    label: "Premium Whiskeys",
  },
};
console.log("15. Nested Generic Types:", whiskeysCollection);

// ========== 16. GENERIC WITH READONLY ==========
// Generic with readonly modifier
interface ReadonlyAlcoholList<T> {
  readonly items: readonly T[];
  readonly count: number;
}

const immutableAlcohols: ReadonlyAlcoholList<string> = {
  items: ["Rum", "Vodka", "Gin"],
  count: 3,
};
console.log("16. Generic with Readonly:", immutableAlcohols);

// ========== 17. MAPPED GENERIC TYPES ==========
// Using mapped types with generics
type AlcoholStatus = {
  available: boolean;
  inStock: boolean;
  premium: boolean;
};

type AlcoholFlags<T> = {
  [K in keyof T]: boolean;
};

const flags: AlcoholFlags<AlcoholStatus> = {
  available: true,
  inStock: false,
  premium: true,
};
console.log("17. Mapped Generic Types:", flags);

// ========== 18. GENERIC TUPLE TYPES ==========
// Generic function returning tuple
function getAlcoholInfo<T, U>(name: T, proof: U): [T, U, string] {
  return [name, proof, `${name} at ${proof}%`];
}

const info = getAlcoholInfo("Whiskey", 40);
console.log("18. Generic Tuple Types:", info);

// ========== 19. GENERIC PROMISE TYPE ==========
// Generic async function with Promise
async function fetchAlcohol<T>(id: number): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id } as T), 100);
  });
}

// Using the generic async function
fetchAlcohol<{ id: number; name: string }>(1).then((alcohol) => {
  console.log("19. Generic Promise Type:", alcohol);
});

// ========== 20. COMPLEX GENERIC CONSTRAINT ==========
// Advanced generic with multiple constraints
function processAlcoholList<T extends { items: Array<U>; metadata: { label: string } }, U extends { name: string }>(
  collection: T
): U[] {
  return collection.items;
}

const complexCollection: Container<{ name: string; proof: number }> = {
  items: [
    { name: "Scotch", proof: 40 },
    { name: "Vodka", proof: 40 },
  ],
  metadata: {
    created: new Date(),
    label: "Mixed Alcohols",
  },
};

const processed = processAlcoholList(complexCollection);
console.log("20. Complex Generic Constraint:", processed);