import { forwardRef, HTMLProps, PropsWithChildren } from 'react';
import s from './input.module.scss';
import cn from 'classnames';
import { SizeType } from '../../types/props';

interface Props extends Omit<HTMLProps<HTMLInputElement>, 'size'>, PropsWithChildren {
  label?: string;
  size?: SizeType;
}
export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, size = 'md', ...other } = props;
  const classnames = cn(s.input, s[size]);

  return (
    <label className={s.component}>
      {label}
      <input ref={ref} {...other} className={classnames} />
    </label>
  );
});
