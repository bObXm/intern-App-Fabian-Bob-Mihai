import { Route, Routes } from 'react-router-dom';

import Home from 'pages/home';
import Users from 'pages/users';

import './App.scss';
import Layout from 'components/Layout';
import AddUser from './features/users/AddUser';
import EditUser from './features/users/EditUser';

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route element={<Home />} path="/" />
      <Route element={<Users />} path="/users" />
      <Route element={<AddUser />} path="/add-user" />
      <Route element={<EditUser />} path="/edit-user/:id" />
    </Route>
  </Routes>
);

export default App;
