import React from 'react';
import ApiService from 'services/api-service';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import * as Styled from './styled';
import AnimalCard from './animal-card';

const HomePage = () => {
  const [animals, setAnimals] = React.useState<AnimalModel[]>([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    (async () => {
      const fetchedAnimals = await ApiService.fetchAnimals();
      setAnimals(fetchedAnimals);
    })();
  }, []);

  const onDelete = async (id: string) => {
    await ApiService.deleteAnimal(id);
    const fetchedAnimals = await ApiService.fetchAnimals();
    setAnimals(fetchedAnimals);
  };

  return (
    <Container sx={{ mt: 2, mb: 2 }}>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => navigate(routes.AnimalFormPage)}
      >
        Pridėti naują
      </Button>
      <Styled.AnimalsGrid>
        {animals.map((animal) => (
          <AnimalCard
            key={animal.id}
            {...animal}
            onDelete={() => onDelete(animal.id)}
          />
        ))}
      </Styled.AnimalsGrid>
    </Container>
  );
};

export default HomePage;
