type AnimalsModel = {
  id: string,
  name: string,
  type: {
    type: string,
    species: string,
  }
  age: number,
  images: string[],
};
