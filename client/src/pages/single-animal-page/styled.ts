import { styled, Stack } from '@mui/material';

export const AnimalPageCardContent = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(1, 2, 2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Courier New, monospace',
}));

export const AnimalPageCardBox = styled(Stack)(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  border: '1px solid black',
  boxShadow: theme.shadows[12],
  width: '50%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));
