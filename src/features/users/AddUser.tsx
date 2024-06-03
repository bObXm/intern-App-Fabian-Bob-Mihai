import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { addUser } from "./userSlice"
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
  });

    const handleAddUser = () => {
      setValues({ name: '', email: '' });
      dispatch(addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email
      }));
      navigate('/');
    }

  console.log(values);

  return (
    <Box
      mt={10}
      maxWidth="sm"
      mx="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="60vh"
      padding={5}
    >
      <TextField
        label="Name"
        value={values.name}
        onChange={e => setValues({ ...values, name: e.target.value })}
        type="text"
        placeholder="John Doe"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        value={values.email}
        onChange={e => setValues({ ...values, email: e.target.value })}
        type="email"
        placeholder="johndoe@mail.com"
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          handleAddUser()
        }}
        sx={{ mt: 3 }}
      >
        Save
      </Button>
    </Box>
  );
};

export default AddUser;

