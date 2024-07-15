import { Loader } from '../../components/loader/loader';
import { Search } from '../../features/search/search';
import { Card } from './card/card';
import s from './main.module.scss';
import { useMain } from './use-main';

export const Main = () => {
  const { users, isLoading, handleChange, handleSearch } = useMain();

  return (
    <div className={s.page}>
      <h1 className={s.title}>Users</h1>
      <Search onChange={handleChange} onSearch={handleSearch} />
      {isLoading && <Loader />}
      {!!users.length && (
        <ul className={s.users}>
          {users.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </ul>
      )}
    </div>
  );
};
