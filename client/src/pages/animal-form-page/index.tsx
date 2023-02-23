/* eslint-disable no-alert */
import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import ApiService from 'services/api-service';
import { useNavigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import useAnimal from 'hooks/use-animal';
import ImagesField from './images-field';
import * as Styled from './styled';
import { getAnimalFormValues } from './helpers';
import { getModeData } from './data';

const AnimalFormPage = () => {
  const { id } = useParams();
  const [animal, loadingAnimalData] = useAnimal(id);
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);
  const navigate = useNavigate();
  const mode = id !== undefined ? 'edit' : 'create';
  const {
    title,
    btnText,
    color,
    colorMain,
  } = getModeData(mode);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const values = getAnimalFormValues(formRef.current);
      if (mode === 'create') {
        await ApiService.createAnimal(values);
        navigate(routes.HomePage);
      } else {
        await ApiService.updateAnimal(id as any, values);
        navigate(routes.SingleAnimalPage.createLink(id as any));
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Error on form submit. Contact system administrator.');
      }
    }
  };

  if (loadingAnimalData) return null;

  return (
    <Styled.PageLayout>
      <Styled.Paper elevation={6}>
        <Stack
          sx={{ gap: 2, alignItems: 'center' }}
          component="form"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <PetsOutlinedIcon sx={{ fontSize: 60, color: colorMain }} />
          <Typography variant="h4" color={colorMain}>{title}</Typography>
          <TextField
            sx={{ border: '1px solid black' }}
            label="Vardas"
            name="name"
            fullWidth
            variant="filled"
            size="small"
            color={color}
            defaultValue={animal?.name}
          />
          <TextField
            sx={{ border: '1px solid black' }}
            label="Tipas"
            name="type"
            fullWidth
            variant="filled"
            size="small"
            color={color}
            defaultValue={animal?.type.type}
          />
          <TextField
            sx={{ border: '1px solid black' }}
            label="Rūšis"
            name="species"
            fullWidth
            variant="filled"
            size="small"
            color={color}
            defaultValue={animal?.type.species}
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
            color={color}
            defaultValue={animal?.age}
          />
          <ImagesField color={color} colorMain={colorMain} defaultImages={animal?.images} />
          <Button
            variant="contained"
            color={color}
            size="large"
            type="submit"
          >
            {btnText}
          </Button>
        </Stack>
      </Styled.Paper>

    </Styled.PageLayout>
  );
};
export default AnimalFormPage;
