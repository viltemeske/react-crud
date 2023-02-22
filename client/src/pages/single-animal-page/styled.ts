import { styled, Stack, Box } from '@mui/material';

export const AnimalPageCardContent = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(1, 2, 2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  fontFamily: 'Courier New, monospace',
}));

export const AnimalPageCardBox = styled(Stack)(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  boxShadow: theme.shadows[12],
  border: '1px solid black',
  backgroundColor: theme.palette.grey[200],
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
    boxShadow: theme.shadows[12],
  },
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const AnimalSwiperBox = styled(Stack)(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  boxShadow: theme.shadows[12],
  width: '90%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.grey[400],
  border: '1px solid black',
  maxWidth: theme.breakpoints.values.xl,
  [theme.breakpoints.up('sm')]: {
    width: '85%',
  },
  [theme.breakpoints.up('md')]: {
    width: '75%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '65%',
  },
  [theme.breakpoints.up('xl')]: {
    width: '50%',
  },
}));

export const OutsideBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));
