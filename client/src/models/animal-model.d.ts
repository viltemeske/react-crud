type AnimalModel = {
  id: string,
  name: string,
  type: {
    type: string,
    species: string,
  }
  age: number,
  rating: number,
  images: string[],
};
