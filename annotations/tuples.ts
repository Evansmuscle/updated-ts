const drinkObject = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type aliases
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['transparent', true, 40];

const carSpecs: [number, number] = [400, 3354];

interface Spec {
  horsePower: number;
  weight: number;
}

const carStats: Spec = {
  horsePower: 400,
  weight: 3354,
};
