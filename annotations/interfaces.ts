interface Report {
  summary(): string;
}

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}\nYear: ${this.year}\nBroken ?: ${this.broken}`;
  },
};

const drink = {
  color: 'Brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Color: ${this.color}\nCarbonated: ${this.carbonated}\nSugar: ${this.sugar}`;
  },
};

const printSummary = (item: Report): void => {
  console.log(item.summary());
};

console.log(printSummary(oldCivic));
console.log(printSummary(drink));
