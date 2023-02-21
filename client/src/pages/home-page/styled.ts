import { styled, Stack } from '@mui/material';

export const AnimalsGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(2),
  maxWidth: theme.breakpoints.values.xl,
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));
export const AnimalCardContent = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(1, 2, 2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Courier New, monospace',
}));

export const AnimalCardBox = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  border: '1px solid black',
  boxShadow: theme.shadows[12],
  borderRadius: '3%',
  backgroundColor: 'grey',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));
