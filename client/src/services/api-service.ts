import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:5024',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const fetchAnimals = async () => {
  const response = await api.get<AnimalsModel[]>('/animals');

  return response.data;
};

const ApiService = {
  fetchAnimals,
};

export default ApiService;
