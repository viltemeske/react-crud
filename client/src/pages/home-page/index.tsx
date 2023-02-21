import React from 'react';
import ApiService from 'services/api-service';
import * as Styled from './styled';
import AnimalCard from './animal-card';

const HomePage = () => {
  const [animals, setAnimals] = React.useState<AnimalModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedAnimals = await ApiService.fetchAnimals();
      setAnimals(fetchedAnimals);
    })();
  }, []);

  return (
    <Styled.AnimalsGrid>
      {animals.map((animal) => <AnimalCard key={animal.id} {...animal} />)}
    </Styled.AnimalsGrid>
  );
};

export default HomePage;
