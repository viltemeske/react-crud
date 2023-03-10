import React from 'react';
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import Img from 'components/ui/img';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import * as Styled from './styled';

type AnimalCardProps = AnimalModel & {
  onDelete: VoidFunction,
};

const AnimalCard: React.FC<AnimalCardProps> = ({
  id,
  name,
  type,
  age,
  rating,
  images,
  onDelete,
}) => {
  const navigate = useNavigate();

  return (
    <Styled.AnimalCardBox>
      <Styled.ActionButtons>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          sx={{ minWidth: 'initial', p: 0.5 }}
          onClick={() => navigate(routes.UpdateAnimalPage.createLink(id))}
        >
          <EditIcon />
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          sx={{ minWidth: 'initial', p: 0.5 }}
          onClick={onDelete}
        >
          <DeleteForeverIcon />
        </Button>
      </Styled.ActionButtons>
      <Img
        src={images[0]}
        alt=""
        sx={{
          aspectRatio: '1', width: 0.75, border: '1px solid black',
        }}
      />
      <Styled.AnimalCardContent>
        <Box sx={{ flexGrow: 1, padding: 1 }}>
          <Typography variant="subtitle2">
            {`ID: ${id}`}
          </Typography>
          <Typography sx={{ fontSize: '1.15rem', fontWeight: 600 }}>
            {`Vardas: ${name}`}
          </Typography>
          <Typography variant="subtitle2">
            {`Rūšis: ${type.type}, ${type.species}`}
          </Typography>
          <Typography variant="subtitle2">
            {`Amžius: ${age}`}
          </Typography>
          <Styled.AnimalCardRating>{rating}</Styled.AnimalCardRating>
        </Box>
        <Button
          color="secondary"
          variant="contained"
          sx={{ mt: 1 }}
          onClick={() => navigate(routes.SingleAnimalPage.createLink(id))}
        >
          Peržiūrėti
        </Button>
      </Styled.AnimalCardContent>
    </Styled.AnimalCardBox>
  );
};

export default AnimalCard;
