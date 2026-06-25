// ====== 1. BASIC CLASS ======
class Alcohol {
  constructor(public name: string, public abv: number, public category: string) {}

  describe(): string {
    return `${this.name} is a ${this.category} with ${this.abv}% ABV.`;
  }
}

const whiskey = new Alcohol("Whiskey", 40, "Spirit");
console.log("1. Basic Class:", whiskey.describe());

// ====== 2. ENCAPSULATION WITH PRIVATE/PROTECTED ======
class Bottle {
  private _volumeMl: number;
  protected brand: string;

  constructor(brand: string, volumeMl: number) {
    this.brand = brand;
    this._volumeMl = volumeMl;
  }

  get volumeMl(): number {
    return this._volumeMl;
  }

  set volumeMl(value: number) {
    if (value < 0) {
      throw new Error("Volume cannot be negative.");
    }
    this._volumeMl = value;
  }

  info(): string {
    return `${this.brand} bottle has ${this._volumeMl}ml.`;
  }
}

const bottle = new Bottle("Jack Daniel's", 750);
console.log("2. Encapsulation:", bottle.info());

// ====== 3. READONLY PROPERTY ======
class AlcoholLabel {
  readonly name: string;
  readonly abv: number;

  constructor(name: string, abv: number) {
    this.name = name;
    this.abv = abv;
  }
}

const label = new AlcoholLabel("Rum", 40);
console.log("3. Readonly Property:", label.name, label.abv);

// ====== 4. STATIC MEMBERS ======
class AlcoholCounter {
  static count = 0;

  constructor(public drink: string) {
    AlcoholCounter.count += 1;
  }

  static getCount(): number {
    return AlcoholCounter.count;
  }
}

new AlcoholCounter("Vodka");
new AlcoholCounter("Gin");
console.log("4. Static Member:", AlcoholCounter.getCount());

// ====== 5. INTERFACE AND IMPLEMENTATION ======
interface Pourable {
  pour(amountMl: number): string;
}

class Wine implements Pourable {
  constructor(public name: string, public abv: number) {}

  pour(amountMl: number): string {
    return `Pouring ${amountMl}ml of ${this.name} (${this.abv}% ABV).`;
  }
}

const redWine = new Wine("Merlot", 13);
console.log("5. Interface Implementation:", redWine.pour(150));

// ====== 6. INHERITANCE ======
class Beverage extends Alcohol {
  constructor(name: string, abv: number, category: string, public origin: string) {
    super(name, abv, category);
  }

  fullDescription(): string {
    return `${this.describe()} Origin: ${this.origin}.`;
  }
}

const tequila = new Beverage("Tequila", 38, "Spirit", "Mexico");
console.log("6. Inheritance:", tequila.fullDescription());

// ====== 7. ABSTRACT CLASS ======
abstract class AlcoholBase {
  constructor(public name: string, public abv: number) {}

  abstract getCategory(): string;

  summary(): string {
    return `${this.name} is ${this.getCategory()} at ${this.abv}% ABV.`;
  }
}

class Liqueur extends AlcoholBase {
  getCategory(): string {
    return "a Liqueur";
  }
}

const baileys = new Liqueur("Baileys", 17);
console.log("7. Abstract Class:", baileys.summary());

// ====== 8. POLYMORPHISM ======
class Drink {
  constructor(public title: string) {}

  serve(): string {
    return `Serving ${this.title}.`;
  }
}

class CraftBeer extends Drink {
  serve(): string {
    return `Chilling and serving a pint of ${this.title}.`;
  }
}

class Champagne extends Drink {
  serve(): string {
    return `Pouring sparkling ${this.title} in a flute.`;
  }
}

const drinks: Drink[] = [new Drink("Whiskey"), new CraftBeer("IPA"), new Champagne("Champagne")];
console.log("8. Polymorphism:", drinks.map((d) => d.serve()));

// ====== 9. GETTERS AND SETTERS ======
class Cask {
  private _ageYears: number;

  constructor(public product: string, ageYears: number) {
    this._ageYears = ageYears;
  }

  get ageYears(): number {
    return this._ageYears;
  }

  set ageYears(value: number) {
    if (value < 0) {
      throw new Error("Age must be non-negative.");
    }
    this._ageYears = value;
  }
}

const cask = new Cask("Single Malt", 12);
cask.ageYears = 15;
console.log("9. Getters/Setters:", `${cask.product} aged ${cask.ageYears} years.`);

// ====== 10. COMPOSITION + READONLY ARRAYS ======
class AlcoholCollection {
  readonly items: Alcohol[];

  constructor(items: Alcohol[]) {
    this.items = items;
  }

  listNames(): string[] {
    return this.items.map((item) => item.name);
  }
}

const collection = new AlcoholCollection([
  new Alcohol("Whiskey", 40, "Spirit"),
  new Alcohol("Beer", 5, "Beverage"),
]);
console.log("10. Composition:", collection.listNames());
