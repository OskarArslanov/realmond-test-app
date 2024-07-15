import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import s from './search.module.scss';
import SearchIcon from '../../assets/search.svg';
import { FC } from 'react';
import { onKeyDown } from '../../helpers/on-key-down';

interface Props {
  onChange?: (value: string) => void;
  onSearch?: () => void;
}
export const Search: FC<Props> = ({ onChange, onSearch }) => {
  return (
    <div className={s.feature}>
      <Input
        placeholder="Введите для поиска"
        onChange={(e) => onChange?.(e.currentTarget.value)}
        onKeyDown={(e) => onKeyDown(e, 'Enter', () => onSearch?.())}
      />
      <Button onClick={onSearch}>
        <SearchIcon />
      </Button>
    </div>
  );
};
