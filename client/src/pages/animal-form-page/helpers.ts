const isStringArray = (
  arr: Array<unknown | string>,
): arr is string[] => arr.every((str) => typeof str === 'string');

export const getAnimalFormValues = (form: HTMLFormElement | undefined): Omit<AnimalModel, 'id'> => {
  const formData = new FormData(form);
  const name = formData.get('name');
  if (typeof name !== 'string') throw new Error('Missing name');
  if (name.length < 2) throw new Error('name must have at least 2 symbols');

  const type = formData.get('type');
  if (typeof type !== 'string') throw new Error('Missing type');
  if (type.length < 2) throw new Error('type must have at least 2 symbols');

  const species = formData.get('species');
  if (typeof species !== 'string') throw new Error('Missing species');
  if (species.length < 2) throw new Error('species must have at least 2 symbols');

  const age = formData.get('age');
  if (typeof age !== 'string') throw new Error('Missing age');
  if (age.length < 1) throw new Error('age must have at least 1 number');

  const rating = formData.get('rating');
  if (typeof rating !== 'string') throw new Error('Missing rating');
  if (rating.length < 1) throw new Error('rating must have at least 1 number');

  const images = formData.getAll('images');
  if (!isStringArray(images)) throw new Error('All images must be strings');

  const values = {
    name,
    type: {
      type,
      species,
    },
    age: Number(age),
    rating: Number(rating),
    images: images.filter((img) => img !== ''),
  };

  return values;
};
