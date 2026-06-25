// 1. BASIC ARRAY NOTATION - Type[]
const stringAlcohols: string[] = ["Whiskey", "Rum", "Vodka", "Gin"];
console.log("1. Basic String Array:", stringAlcohols);

// 2. GENERIC ARRAY TYPE - Array<Type>
const numberAlcohols: Array<number> = [40, 35, 50, 47];
console.log("2. Generic Array Type (numbers):", numberAlcohols);

// 3. BOOLEAN ARRAY
const isAlcoholAvailable: boolean[] = [true, false, true, true];
console.log("3. Boolean Array:", isAlcoholAvailable);

// 4. UNION TYPE ARRAY - Multiple types allowed
const mixedAlcoholData: (string | number)[] = ["Whiskey", 40, "Rum", 35];
console.log("4. Union Type Array:", mixedAlcoholData);

// 5. ARRAY OF OBJECTS - Interface/Type approach
// interface Alcohol {
//   name: string;
//   percentage: number;
//   type: string;
// }

type Alcohol = {
    name: string;
    percentage: number;
    type: string;
}

const alcohols: Alcohol[] = [
  { name: "Whiskey", percentage: 40, type: "Spirit" },
  { name: "Rum", percentage: 40, type: "Spirit" },
  { name: "Vodka", percentage: 40, type: "Spirit" },
  { name: "Beer", percentage: 5, type: "Beverage" }
];
console.log("5. Array of Objects (Alcohol Interface):", alcohols);

// 6. ARRAY OF INTERFACES - Alternative syntax
interface Drink {
  id: number;
  name: string;
  abv: number;
}

const drinks: Array<Drink> = [
  { id: 1, name: "Jack Daniels", abv: 40 },
  { id: 2, name: "Bacardi", abv: 37.5 }
];
console.log("6. Array of Interfaces (Generic syntax):", drinks);

// 7. READONLY ARRAY - Cannot be modified
const readonlyAlcohols: readonly string[] = ["Whiskey", "Rum", "Vodka"];
console.log("7. Readonly Array:", readonlyAlcohols);

// 8. TUPLE ARRAY - Fixed length and specific types at each position
const alcoholTuple: [string, number, boolean] = ["Whiskey", 40, true];
console.log("8. Tuple Array:", alcoholTuple);

// 9. OPTIONAL TUPLE - Some elements can be optional
const alcoholOptionalTuple: [string, number?] = ["Whiskey"];
console.log("9. Optional Tuple:", alcoholOptionalTuple);

// 10. REST ELEMENT TUPLE - Variable length with final type
const alcoholRestTuple: [string, ...number[]] = ["Alcohol", 40, 35, 50];
console.log("10. Rest Element Tuple:", alcoholRestTuple);

// 11. ARRAY WITH ANY TYPE - Avoid if possible
const anyAlcohols: any[] = ["Whiskey", 40, true, { name: "Rum" }];
console.log("11. Any Type Array:", anyAlcohols);

// 12. NESTED ARRAYS - Array of arrays
const alcoholMatrix: string[][] = [
  ["Whiskey", "Rum"],
  ["Vodka", "Gin"],
  ["Tequila", "Brandy"]
];
console.log("12. Nested Array (2D):", alcoholMatrix);

// 13. COMPLEX NESTED ARRAYS
const complexAlcohols: Array<Array<string | number>> = [
  ["Whiskey", 40],
  ["Rum", 37.5],
  ["Vodka", 40]
];
console.log("13. Complex Nested Array:", complexAlcohols);

// 14. ARRAY WITH UNION OF MULTIPLE TYPES
type AlcoholType = string | number | boolean;
const mixedAlcoholArray: AlcoholType[] = ["Whiskey", 40, true];
console.log("14. Union Type Array (custom type):", mixedAlcoholArray);

// 15. ARRAY WITH TYPE ALIAS
type AlcoholInfo = {
  name: string;
  abv: number;
  origin: string;
};

const alcoholCollection: AlcoholInfo[] = [
  { name: "Scotch Whisky", abv: 43, origin: "Scotland" },
  { name: "Rum", abv: 40, origin: "Caribbean" }
];
console.log("15. Array with Type Alias:", alcoholCollection);

// 16. ENUM ARRAY
enum AlcoholCategory {
  Spirit = "Spirit",
  Wine = "Wine",
  Beer = "Beer",
  Liqueur = "Liqueur"
}

const alcoholCategories: AlcoholCategory[] = [
  AlcoholCategory.Spirit,
  AlcoholCategory.Wine,
  AlcoholCategory.Beer
];
console.log("16. Enum Array:", alcoholCategories);

// 17. CONDITIONAL ARRAY TYPES
type MaybeAlcohol<T> = T extends string ? T[] : never;
const stringAlcoholArray: MaybeAlcohol<string> = ["Whiskey", "Rum"];
console.log("17. Conditional Array Type:", stringAlcoholArray);

// 18. ARRAY WITH GENERICS
function createAlcoholArray<T>(items: T[]): T[] {
  return items;
}

const genericAlcohols = createAlcoholArray<string>(["Whiskey", "Rum", "Vodka"]);
console.log("18. Generic Array Function:", genericAlcohols);

// 19. ARRAY WITH CONSTRAINTS
interface HasName {
  name: string;
}

const namedAlcohols: HasName[] = [
  { name: "Whiskey" },
  { name: "Rum" }
];
console.log("19. Array with Interface Constraint:", namedAlcohols);

// 20. EMPTY ARRAY WITH TYPE INFERENCE
const emptyAlcohols: string[] = [];
emptyAlcohols.push("Whiskey");
console.log("20. Empty Array (typed):", emptyAlcohols);