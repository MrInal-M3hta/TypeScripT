// 1. NUMERIC ENUM - default values start at 0
enum AlcoholStrength {
  Mild,
  Medium,
  Strong,
}
const selectedStrength: AlcoholStrength = AlcoholStrength.Medium;
console.log("1. Numeric Enum:", selectedStrength, AlcoholStrength[selectedStrength]);

// 2. NUMERIC ENUM WITH EXPLICIT VALUES
enum AlcoholProof {
  Beer = 10,
  Wine = 20,
  Spirit = 40,
}
console.log("2. Numeric Enum with explicit values:", AlcoholProof.Beer, AlcoholProof.Spirit);
console.log("2. Reverse mapping:", AlcoholProof[40]);

// 3. STRING ENUM - each member has a string value
enum AlcoholCategory {
  Spirit = "Spirit",
  Wine = "Wine",
  Beer = "Beer",
  Liqueur = "Liqueur",
}
const favoriteCategory: AlcoholCategory = AlcoholCategory.Spirit;
console.log("3. String Enum:", favoriteCategory);

// 4. HETEROGENEOUS ENUM - mixed string and numeric members
enum AlcoholStatus {
  Available = "Available",
  Unknown = 0,
  Discontinued = "Discontinued",
}
console.log("4. Heterogeneous Enum:", AlcoholStatus.Available, AlcoholStatus.Unknown);

// 5. CONST ENUM - inlined at compile time for smaller output
const enum AlcoholLevel {
  Low = 1,
  Medium = 2,
  High = 3,
}
const alcoholLevel: AlcoholLevel = AlcoholLevel.High;
console.log("5. Const Enum:", alcoholLevel);

// 6. COMPUTED MEMBER ENUM - values can be computed expressions
enum AlcoholSize {
  Small = 1,
  Medium = Small * 2,
  Large = Medium * 2,
}
console.log("6. Computed Values Enum:", AlcoholSize.Small, AlcoholSize.Medium, AlcoholSize.Large);

// 7. AMBIENT (DECLARE) ENUM - used for external values or declaration files
declare enum AlcoholType {
  Whiskey,
  Rum,
  Vodka,
}
// Note: ambient enums are declarations only and do not emit runtime code.
