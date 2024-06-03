import React from 'react';
import { UserList } from '../../features/users/UserList';
import styles from './home.module.scss';

const Home: React.FC = (): JSX.Element => (
  <div className={styles.home}>
    <h1>Welcome!</h1>
    <UserList />
  </div>
);

export default Home;
