import React from 'react';
import { Container, Box } from '@mui/material';
import ApiService from 'services/api-service';

const HomePage = () => {
  const [animals, setAnimals] = React.useState<AnimalsModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchAnimals = await ApiService.fetchAnimals();
      setAnimals(fetchAnimals);
    })();
  }, []);

  return (
    <Container sx={{ my: 6 }}>
      <Box component="pre">{JSON.stringify(animals, null, 4)}</Box>
    </Container>
  );
};

export default HomePage;
