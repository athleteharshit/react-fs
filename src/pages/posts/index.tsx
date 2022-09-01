import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { selectUser } from '../../redux/selector/select.user';
import { fetchUserById } from '../../redux/slice/user.slice';
import { useAppDispatch, useAppSelector } from '../../setup/store/hooks';

function Posts() {
  const { entities, loading } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserById(2));
  }, []);
  return (
    <Box>
      <Typography>User</Typography>
      <Typography>{loading}</Typography>
      <Typography>{entities.id}</Typography>
      <Typography>{entities.title}</Typography>
    </Box>
  );
}

export default Posts;
