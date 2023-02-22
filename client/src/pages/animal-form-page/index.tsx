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

const AnimalFormPage = () => (
  <Styled.PageLayout>
    <Styled.Paper elevation={6}>
      <Stack sx={{ gap: 2, alignItems: 'center' }}>
        <PetsOutlinedIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        <Typography variant="h4" color="primary">Naujas gyvūnas</Typography>
        <TextField
          sx={{ border: '1px solid black' }}
          label="Vardas"
          fullWidth
          variant="filled"
          size="small"
        />
        <TextField
          sx={{ border: '1px solid black' }}
          label="Tipas"
          fullWidth
          variant="filled"
          size="small"
        />
        <TextField
          sx={{ border: '1px solid black' }}
          label="Rūšis"
          fullWidth
          variant="filled"
          size="small"
        />
        <TextField
          sx={{ border: '1px solid black' }}
          label="Amžius"
          type="number"
          inputProps={{ step: '0.1' }}
          fullWidth
          variant="filled"
          size="small"
        />
        <ImagesField />
        <Button variant="contained" color="primary" size="large">Sukurti</Button>
      </Stack>
    </Styled.Paper>

  </Styled.PageLayout>
);

export default AnimalFormPage;
