import css from './Friends.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = props => {
  return (
    <>
      <span className={`${css.friends__status} ${css[props.isOnline]}`}></span>
      <img className={css.avatar} src={props.avatar} alt={props.name} width="48" />
      <p className={css.friends__name}>{props.name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
