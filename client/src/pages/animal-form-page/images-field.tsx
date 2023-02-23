import React from 'react';
import {
  Stack,
  Typography,
  TextFieldProps,
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

type ImagesFieldProps = {
  color: TextFieldProps['color'],
  colorMain: string,
  defaultImages?: string[],
};

const ImagesField: React.FC<ImagesFieldProps> = ({ color, colorMain, defaultImages }) => {
  const imgMap = React.useMemo(
    () => defaultImages && defaultImages.reduce<{ [key: string]: string }>((prevMap, img) => ({
      ...prevMap,
      [createId()]: img,
    }), {}),
    [],
  );

  const [
    imgFieldsIds,
    setImgFieldsIds,
  ] = React.useState<string[]>(defaultImages || initialIds);

  const addImgField = () => setImgFieldsIds([...imgFieldsIds, createId()]);
  const removeImgField = (id: string) => {
    if (imgFieldsIds.length > 1) {
      setImgFieldsIds(imgFieldsIds.filter((imgId) => imgId !== id));
    }
  };

  return (
    <Box sx={{ width: 1 }}>
      <Typography component="legend">
        <CameraAltOutlinedIcon sx={{ color: colorMain }} />
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
            color={color}
            defaultValue={imgMap && imgMap[id]}
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
        <AddCircleIcon sx={{ fontSize: 38, color: colorMain }} />
      </IconButton>
    </Box>
  );
};
export default ImagesField;
