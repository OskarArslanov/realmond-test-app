import { forwardRef, HTMLProps, PropsWithChildren } from 'react';
import s from './button.module.scss';
import cn from 'classnames';
import { SizeType } from '../../types/props';

interface Props extends Omit<HTMLProps<HTMLButtonElement>, 'size' | 'type'>, PropsWithChildren {
  size?: SizeType;
}

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, size = 'md', ...others } = props;

  const classnames = cn(s.component, s[size]);

  return (
    <button ref={ref} className={classnames} {...others}>
      {children}
    </button>
  );
});
