/* eslint-disable no-alert */
/* eslint-disable no-console */
import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import ImagesField from './images-field';
import * as Styled from './styled';
import { getAnimalFormValues } from './helpers';

const AnimalFormPage = () => {
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const values = getAnimalFormValues(formRef.current);
      console.log('Vykdomas sukūrimas');
      console.log(values);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Error on form submit. Contact system administrator.');
      }
    }
  };

  return (
    <Styled.PageLayout>
      <Styled.Paper elevation={6}>
        <Stack
          sx={{ gap: 2, alignItems: 'center' }}
          component="form"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <PetsOutlinedIcon sx={{ fontSize: 60, color: 'primary.main' }} />
          <Typography variant="h4" color="primary">Naujas gyvūnas</Typography>
          <TextField
            sx={{ border: '1px solid black' }}
            label="Vardas"
            name="name"
            fullWidth
            variant="filled"
            size="small"
          />
          <TextField
            sx={{ border: '1px solid black' }}
            label="Tipas"
            name="type"
            fullWidth
            variant="filled"
            size="small"
          />
          <TextField
            sx={{ border: '1px solid black' }}
            label="Rūšis"
            name="species"
            fullWidth
            variant="filled"
            size="small"
          />
          <TextField
            sx={{ border: '1px solid black' }}
            label="Amžius"
            name="age"
            type="number"
            inputProps={{ step: '0.1' }}
            fullWidth
            variant="filled"
            size="small"
          />
          <ImagesField />
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Sukurti
          </Button>
        </Stack>
      </Styled.Paper>

    </Styled.PageLayout>
  );
};
export default AnimalFormPage;
