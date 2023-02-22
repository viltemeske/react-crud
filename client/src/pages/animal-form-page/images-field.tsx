import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const ImagesField = () => (
  <Box sx={{ width: 1 }}>
    <Typography component="legend">
      <CameraAltOutlinedIcon />
    </Typography>
    <Stack sx={{ gap: 2 }}>
      <TextField
        sx={{ border: '1px solid black' }}
        label="Nuotrauka"
        fullWidth
        variant="filled"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <CloseOutlinedIcon color="error" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        sx={{ border: '1px solid black' }}
        label="Nuotrauka"
        fullWidth
        variant="filled"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <CloseOutlinedIcon color="error" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
    <IconButton>
      <AddCircleIcon sx={{ fontSize: 38, color: 'primary.main' }} />
    </IconButton>
  </Box>
);

export default ImagesField;
