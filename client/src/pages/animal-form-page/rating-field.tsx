import React from 'react';
import {
  Box,
  Rating,
  RatingProps,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

type RatingFieldProps = {
  defaultValue?: RatingProps['defaultValue']
};

const RatingField: React.FC<RatingFieldProps> = ({ defaultValue }) => (

  <Box sx={{ alignSelf: 'flex-start' }}>
    <Typography component="legend">Įvertinimas</Typography>
    <Rating
      name="rating"
      defaultValue={defaultValue}
      precision={0.5}
      icon={<FavoriteIcon fontSize="inherit" color="error" />}
      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
    />
  </Box>
);

export default RatingField;
