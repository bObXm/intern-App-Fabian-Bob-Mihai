import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store';
import { deleteUser } from './userSlice';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const UserList: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);

  const handleRemoveUser = (id:number) => {
    dispatch(deleteUser({ id }));
  }

  return (
    <>
    <Button variant="contained"  onClick={() => navigate('/add-user')}>Add user</Button>
    <Grid container spacing={2} padding={5}>
      {users.length === 0 ? (
        <Typography variant="h6" color="gray.600">
          No users
        </Typography>
      ) : (
        users.map(user => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Box
              sx={{
                backgroundColor: 'gray.300',
                p: 3,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography variant="h6" fontWeight="bold" color="gray.700">
                  {user.name}
                </Typography>
                <Typography variant="body2" color="gray.600">
                  {user.email}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <NavLink to={`edit-user/${user.id}`}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </NavLink>
                <IconButton onClick={() => handleRemoveUser(user.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))
      )}
    </Grid>
    </>
  );
};
