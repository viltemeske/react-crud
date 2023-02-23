import React from 'react';
import ApiService from 'services/api-service';

const useAnimal = (id: string | undefined) => {
  const [animal, setAnimal] = React.useState<undefined | AnimalModel>(undefined);
  const [loading, setLoading] = React.useState<boolean>(id !== undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedAnimal = await ApiService.fetchAnimal(id);
        setAnimal(fetchedAnimal);
        setLoading(false);
      })();
    }
  }, []);

  return [animal, loading] as const;
};

export default useAnimal;
