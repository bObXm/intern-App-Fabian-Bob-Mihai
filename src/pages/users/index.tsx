import React, { useEffect, useState } from 'react';
import styles from './users.module.scss';
import { Gender, User } from 'dtos';
import { getUsers } from '../../api';
import { CircularProgress } from '@mui/material';

const Users: React.FC = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);
  const [gender, setGender] = useState<Gender>('');
  const [pageToGet, setPageToGet] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getUsersData = async () => {
      setLoading(true);
      const response = await getUsers(pageToGet!, gender);
      if (response) {
        setUsers(oldUsers => pageToGet === 1 ? response : [...oldUsers, ...response]);
      }
      setLoading(false);
    };
    getUsersData();
  }, [pageToGet, gender]);

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value as Gender);
    setPageToGet(1);
    setUsers([]);
  };

  console.log(users);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Users</span>
        <select id="gender" name="gender" onChange={handleGenderChange}>
          <option value="">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>

      {loading ? (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <ul className={styles.usersList}>
            {users.length > 0
              ? users.map((user: User) => (
                  <li key={user.login.uuid} className={styles.userItem}>
                    {user.name.first} {user.name.last} {user.gender}
                  </li>
                ))
              : null}
          </ul>
          <button
            className={styles.loadButton}
            type="button"
            onClick={() => {
              setPageToGet(v => v + 1);
            }}
          >
            Load More
          </button>
        </>
      )}
    </div>
  );
};

export default Users;

// 1. The logo looks tiny on smaller devices.    X
// 2. TEC theme is not displayed on the app bar instead a green color is seen.     X
// 3. Users screen does not display any data.     X
// 4. Load more button style is not working.      X
// 5. Style issues are encountered on the page - style however you want.      X
// 6. Additional data is not displayed upon using "Load more" button.     X
// 7. Users are not filtered by gender and the list does not reset on change select.      X
// 8. No loading state is displayed when accessing "Users" component.     X
// 9. On home page user should be able to do the following actions with cards that contain
// 2 fields: Title and Description
//     - See all the cards already added
//     - Add a card
//     - Update a card
//     - Delete a card