import React from 'react';
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import Img from 'components/ui/img';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import * as Styled from './styled';

type AnimalPageCardProps = AnimalModel;

const AnimalPageCard: React.FC<AnimalPageCardProps> = ({
  id,
  name,
  type,
  age,
  images,
}) => {
  const navigate = useNavigate();

  return (
    <Styled.AnimalPageCardBox>
      <Button
        color="secondary"
        variant="contained"
        sx={{ mt: 4 }}
        onClick={() => navigate(routes.HomePage)}
      >
        Grįžti
      </Button>
      <Styled.AnimalPageCardContent>
        <Box sx={{ flexGrow: 1, padding: 1 }}>
          <Typography variant="subtitle2">
            ID:
            {' '}
            {id}
          </Typography>
          <Typography sx={{ fontSize: '1.15rem', fontWeight: 600 }}>
            Vardas:
            {' '}
            {name}
          </Typography>
          <Typography variant="subtitle2">
            Rūšis:
            {' '}
            {`${type.type}, ${type.species}`}
          </Typography>
          <Typography variant="subtitle2">
            Amžius:
            {' '}
            {age}
          </Typography>
        </Box>

      </Styled.AnimalPageCardContent>

    </Styled.AnimalPageCardBox>
  );
};

export default AnimalPageCard;
