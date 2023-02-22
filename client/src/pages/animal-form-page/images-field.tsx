import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';
import createId from 'uniqid';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const initialIds = [createId()];

const ImagesField = () => {
  const [imgFieldsIds, setImgFieldsIds] = React.useState<string[]>(initialIds);

  const addImgField = () => setImgFieldsIds([...imgFieldsIds, createId()]);
  const removeImgField = (id: string) => {
    if (imgFieldsIds.length > 1) {
      setImgFieldsIds(imgFieldsIds.filter((imgId) => imgId !== id));
    }
  };

  return (
    <Box sx={{ width: 1 }}>
      <Typography component="legend">
        <CameraAltOutlinedIcon />
      </Typography>
      <Stack sx={{ gap: 2 }}>
        {imgFieldsIds.map((id) => (
          <TextField
            sx={{ border: '1px solid black' }}
            label="Nuotrauka"
            name="images"
            fullWidth
            variant="filled"
            size="small"
            InputProps={imgFieldsIds.length > 1 ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => removeImgField(id)}>
                    <CloseOutlinedIcon color="error" />
                  </IconButton>
                </InputAdornment>
              ),
            } : undefined}
          />
        ))}
      </Stack>
      <IconButton onClick={addImgField}>
        <AddCircleIcon sx={{ fontSize: 38, color: 'primary.main' }} />
      </IconButton>
    </Box>
  );
};
export default ImagesField;
