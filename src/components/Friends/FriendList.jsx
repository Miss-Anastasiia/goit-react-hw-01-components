import { FriendListItem } from './FriendListItem';
import css from './Friends.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friends__list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
         <li key={id} className={css.friends__item}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline}  />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
