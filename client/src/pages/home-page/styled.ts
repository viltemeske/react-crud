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
export const AnimalCardContent = styled(Stack)({
  flexGrow: 1,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Courier New, monospace',
});

export const AnimalCardBox = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(7),
  paddingBottom: theme.spacing(4),
  border: '1px solid black',
  boxShadow: theme.shadows[6],
  backgroundColor: theme.palette.grey[300],
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
    boxShadow: theme.shadows[12],
  },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}));

export const ActionButtons = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: 10,
  top: 10,
  display: 'flex',
  gap: theme.spacing(0.5),
}));
