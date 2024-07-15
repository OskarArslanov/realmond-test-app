import { useCallback, useEffect, useState } from 'react';
import { fetchUsers } from '../../api/users';
import { UserType } from '../../types/user';

export const useMain = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    setIsLoading(true);
    fetchUsers()
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .then(() => setIsLoading(false));
  }, []);

  const handleSearch = useCallback(() => {
    console.log(search);
    if (!search) {
      setFilteredUsers(users);
      return;
    }

    const matchingUsers = users.filter((user) => {
      const matchFirstName = user.name.firstname.includes(search);
      const matchLastName = user.name.lastname.includes(search);
      const matchPhone = user.phone.includes(search);
      const matchEmail = user.email.includes(search);

      return matchEmail || matchFirstName || matchLastName || matchPhone;
    });

    setFilteredUsers(matchingUsers);
  }, [search, users]);

  const handleChange = (e?: string) => {
    setSearch(e);
  };

  return { users: filteredUsers, isLoading, handleChange, handleSearch };
};
