import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import Img from 'components/ui/img';
import * as Styled from './styled';

type AnimalCardProps = AnimalModel;

const AnimalCard: React.FC<AnimalCardProps> = ({
  id,
  name,
  type,
  age,
  images,
}) => (
  <Styled.AnimalCardBox>
    <Img src={images[0]} alt="" sx={{ aspectRatio: '1', width: 0.75 }} />
    <Styled.AnimalCardContent>
      <Box sx={{ flexGrow: 1, padding: 1 }}>
        <Typography variant="subtitle2">
          ID:
          {' '}
          {id}
        </Typography>
        <Typography sx={{ fontSize: '1.15rem', fontWeight: 400 }}>
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
      <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 0.5 }}>
        <Img src={images[1]} alt="" sx={{ aspectRatio: '1.3', width: 0.45 }} />
        <Img src={images[2]} alt="" sx={{ aspectRatio: '1.3', width: 0.45 }} />
      </Box>
    </Styled.AnimalCardContent>
  </Styled.AnimalCardBox>
);

export default AnimalCard;
