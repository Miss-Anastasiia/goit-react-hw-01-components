import css from './Friends.module.css';
import PropTypes from 'prop-types';


export const FriendListItem = ({friend: {avatar, name, isOnline }}) => {
    return (<>
        <span className={`${css.friends__status} ${css[isOnline]}`}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.friends__name}>{name}</p>
    </>)
}


FriendListItem.propTypes = {
    friend: PropTypes.shape({
       avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    }).isRequired,
}