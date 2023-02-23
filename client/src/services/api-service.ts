import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const fetchAnimals = async () => {
  const response = await api.get<AnimalModel[]>('/animals');

  return response.data;
};

const fetchAnimal = async (id: string | number) => {
  const response = await api.get<AnimalModel>(`/animals/${id}`);

  return response.data;
};

const createAnimal = async (animalData: Omit<AnimalModel, 'id'>) => {
  const response = await api.post<AnimalModel>('/animals', animalData);

  return response.data;
};

const deleteAnimal = async (id: string) => {
  await api.delete(`animals/${id}`);
};

const ApiService = {
  fetchAnimals,
  fetchAnimal,
  createAnimal,
  deleteAnimal,
};

export default ApiService;
