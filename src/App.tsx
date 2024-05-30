import { Route, Routes } from 'react-router-dom';

import Home from 'pages/home';
import Users from 'pages/users';

import './App.scss';
import Layout from 'components/Layout';

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route element={<Home />} path="/" />
      <Route element={<Users />} path="/users" />
    </Route>
  </Routes>
);

export default App;
