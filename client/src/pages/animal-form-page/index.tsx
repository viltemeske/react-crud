import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Paper,
  Box,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import * as Styled from './styled';

const AnimalFormPage = () => (
  <Stack sx={{
    py: { xs: 2, sm: 6, xl: 10 },
    px: 2,
    alignItems: 'center',
  }}
  >
    <Paper
      component="form"
      elevation={6}
      sx={{ p: 10, width: (theme) => ({ xs: 1, sm: theme.breakpoints.values.sm }), border: '1px solid black' }}
    >
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
        <Button variant="contained" color="primary" size="large">Sukurti</Button>
      </Stack>
    </Paper>

  </Stack>
);

export default AnimalFormPage;
