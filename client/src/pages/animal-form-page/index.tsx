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
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
      sx={{ p: 3, width: (theme) => ({ xs: 1, sm: theme.breakpoints.values.sm }) }}
    >
      <Stack sx={{ gap: 2, alignItems: 'center' }}>
        <PetsOutlinedIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        <Typography variant="h4" color="primary">Pridėti naują gyvūną</Typography>
        <TextField
          label="Vardas"
          fullWidth
          variant="filled"
          size="small"
        />
        <Box sx={{ display: 'flex', width: 1, gap: 2 }}>
          <TextField
            label="Tipas"
            fullWidth
            variant="filled"
            size="small"
          />
          <TextField
            label="Rūšis"
            fullWidth
            variant="filled"
            size="small"
          />
        </Box>
        <TextField
          label="Amžius"
          type="number"
          inputProps={{ step: '0.1' }}
          fullWidth
          variant="filled"
          size="small"
        />
        <Box sx={{ width: 1 }}>
          <Typography component="legend">Images</Typography>
          <Stack sx={{ gap: 2 }}>
            <TextField
              label="Nuotrauka"
              fullWidth
              variant="filled"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Nuotrauka"
              fullWidth
              variant="filled"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <DeleteIcon color="error" />
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
        <Button variant="contained" color="primary" size="large" fullWidth>Sukurti</Button>
      </Stack>
    </Paper>

  </Stack>
);

export default AnimalFormPage;
