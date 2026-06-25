// 1. BASIC TUPLE NOTATION - fixed length and known types
const alcoholTuple: [string, number, boolean] = ["Whiskey", 40, true];
console.log("1. Basic Tuple:", alcoholTuple);

// 2. TUPLE WITH OPTIONAL ELEMENTS
const alcoholOptionalTuple: [string, number?, string?] = ["Rum"];
console.log("2. Optional Tuple:", alcoholOptionalTuple);

// 3. REST ELEMENT TUPLE - variable length after the first element
const alcoholRestTuple: [string, ...number[]] = ["Vodka", 40, 37.5, 45];
console.log("3. Rest Element Tuple:", alcoholRestTuple);

// 4. READONLY TUPLE - tuple content cannot be reassigned
const readonlyAlcoholTuple: readonly [string, number] = ["Gin", 40];
console.log("4. Readonly Tuple:", readonlyAlcoholTuple);

// 5. NAMED TUPLE ELEMENTS - labels improve readability
const labeledAlcoholTuple: [name: string, percentage: number, type: string] = ["Tequila", 38, "Spirit"];
console.log("5. Labeled Tuple:", labeledAlcoholTuple);

// 6. TUPLE TYPE ALIAS - reuse the tuple shape
type AlcoholTuple = [string, number, string];
const whiskeyTuple: AlcoholTuple = ["Whiskey", 40, "Spirit"];
console.log("6. Tuple Type Alias:", whiskeyTuple);

// 7. TUPLE OF OBJECTS - each element can be a complex type
type Alcohol = {
  name: string;
  percentage: number;
  category: string;
};
const alcoholObjectTuple: [Alcohol, Alcohol] = [
  { name: "Rum", percentage: 40, category: "Spirit" },
  { name: "Beer", percentage: 5, category: "Beverage" }
];
console.log("7. Tuple of Objects:", alcoholObjectTuple);

// 8. UNION TYPES IN A TUPLE
const mixedAlcoholTuple: [string | number, string | boolean] = ["Vodka", false];
console.log("8. Union Types in Tuple:", mixedAlcoholTuple);

// 9. NESTED TUPLE - tuple elements can be tuples themselves
const nestedAlcoholTuple: [[string, number], [string, number]] = [["Whiskey", 40], ["Rum", 40]];
console.log("9. Nested Tuple:", nestedAlcoholTuple);

// 10. ENUM TYPE IN A TUPLE
enum AlcoholCategory {
  Spirit = "Spirit",
  Wine = "Wine",
  Beer = "Beer"
}
const enumAlcoholTuple: [AlcoholCategory, string, number] = [AlcoholCategory.Spirit, "Whiskey", 40];
console.log("10. Enum Tuple:", enumAlcoholTuple);

// 11. FUNCTION RETURN TUPLE - common pattern for returning multiple values
function getAlcoholInfo(): [string, number, string] {
  return ["Bourbon", 45, "Spirit"];
}
console.log("11. Function Return Tuple:", getAlcoholInfo());

// 12. GENERIC TUPLE TYPE - flexible reuse with generic parameters
type Pair<T, U> = [T, U];
const alcoholPair: Pair<string, number> = ["Whiskey", 40];
console.log("12. Generic Tuple:", alcoholPair);

// 13. TUPLE WITH OPTIONAL AND REST ELEMENTS
const optionalRestAlcoholTuple: [string, number?, ...string[]] = ["Liqueur", 30, "Sweet", "Herbal"];
console.log("13. Optional + Rest Tuple:", optionalRestAlcoholTuple);

// 14. EMPTY TUPLE TYPE - useful when a function returns no values
const emptyAlcoholTuple: [] = [];
console.log("14. Empty Tuple:", emptyAlcoholTuple);
