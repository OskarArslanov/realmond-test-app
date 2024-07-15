import { FC } from 'react';
import s from './card.module.scss';
import { UserType } from '../../../types/user';

interface Props {
  user: UserType;
}

export const Card: FC<Props> = ({ user }) => {
  const { email, name, username, phone } = user;

  return (
    <li className={s.feature}>
      <h4 className={s.username}>{username}</h4>
      <p className={s.pair}>
        <div>name:</div> {name.firstname} {name.lastname}
      </p>
      <p className={s.pair}>
        <div>phone:</div>
        <a className={s.phone} href={`tel:+${phone}`}>
          +{phone}
        </a>
      </p>
      <p className={s.pair}>
        <div>email:</div>
        <a className={s.email} href={`mailto:${email}`}>
          {email}
        </a>
      </p>
    </li>
  );
};
