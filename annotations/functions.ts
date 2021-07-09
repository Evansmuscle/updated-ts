const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

interface ForecastType {
  date: Date;
  weather: string;
}

const logWeather = (forecast: ForecastType): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
