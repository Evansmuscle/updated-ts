class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('honk');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom vroom');
  }

  startDriving(): void {
    this.drive();
  }
}

const car = new Car(4, 'orange');
car.startDriving();
