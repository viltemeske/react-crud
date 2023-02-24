import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import * as Styled from './styled';

type AnimalPageCardProps = AnimalModel;

const AnimalPageCard: React.FC<AnimalPageCardProps> = ({
  name,
  type,
  age,
  rating,
}) => {
  const navigate = useNavigate();

  return (
    <Styled.AnimalPageCardBox>
      <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'right' }}>
        <Button
          color="primary"
          size="small"
          sx={{ minWidth: 'initial', p: 0.5 }}
          onClick={() => navigate(routes.HomePage)}
        >
          <CloseOutlinedIcon />
        </Button>
      </Container>
      <Styled.AnimalPageCardContent>
        <Box sx={{ flexGrow: 1, padding: 1 }}>
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
          <Styled.AnimalCardRating>{rating}</Styled.AnimalCardRating>
        </Box>
      </Styled.AnimalPageCardContent>
    </Styled.AnimalPageCardBox>
  );
};

export default AnimalPageCard;
