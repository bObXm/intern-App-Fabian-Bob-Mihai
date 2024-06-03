import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from './userSlice';
import { RootState } from 'store';

const EditUser: React.FC = () : JSX.Element => {

 const params = useParams();
 const dispatch = useDispatch();
 const users = useSelector((state: RootState) => state.users);
 const navigate = useNavigate();
 const existingUser = users.filter(user => user.id === params.id);
 const { name, email } = existingUser[0];
 const [values, setValues] = useState({
    name,
    email
  });

  const handleEditUser = () => {
    setValues({ name: '', email: '' });
    dispatch(editUser({
      id: params.id,
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
         handleEditUser()
       }}
       sx={{ mt: 3 }}
     >
       Edit
     </Button>
   </Box>
 );
};

export default EditUser;
