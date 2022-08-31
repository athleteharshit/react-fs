import { Backdrop, CircularProgress } from '@mui/material';

function Loader() {
  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        color: 'common.white',
      }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loader;
