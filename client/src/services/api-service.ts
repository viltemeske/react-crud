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

const ApiService = {
  fetchAnimals,
  fetchAnimal,
};

export default ApiService;
