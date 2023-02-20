import PropTypes from 'prop-types';
import { StyledFriendListItem } from './FriendListItem.styled';

export function FriendListItem({ avatar, name, isOnline }) {
    return <StyledFriendListItem>
        <span className={`status ${isOnline && "online"}`}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </StyledFriendListItem>;
}

FriendListItem.propTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
}