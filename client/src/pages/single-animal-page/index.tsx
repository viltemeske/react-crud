import React from 'react';
import { Box } from '@mui/material';
import routes from 'navigation/routes';
import { useParams, Navigate } from 'react-router-dom';
import ApiService from 'services/api-service';
import AnimalPageCard from './animal-page-card';

const SingleAnimalPage = () => {
  const { id } = useParams();
  const [animal, setAnimal] = React.useState<undefined | AnimalModel>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedAnimal = await ApiService.fetchAnimal(id);
        setAnimal(fetchedAnimal);
      })();
    }
  }, []);

  if (id === undefined) return <Navigate to={routes.HomePage} />;
  if (animal === undefined) return null;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <AnimalPageCard {...animal} />
    </Box>
  );
};
export default SingleAnimalPage;
