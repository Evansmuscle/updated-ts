const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },

  setAge(age: number): number {
    this.age = age;
    return age;
  },
};

interface Coordinates {
  lat: number;
  lng: number;
}

interface Profile {
  name: string;
  age: number;
  coords: Coordinates;
  setAge: Function;
}

const logProfile = (profile: Profile) => {
  console.log(profile);
};

logProfile(profile);
console.log(profile.setAge(30));
