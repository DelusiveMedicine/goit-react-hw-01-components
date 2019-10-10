import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const { container, friendStatus, friendAvatar, online, offline } = styles;
  const friendStatusStyle = [friendStatus];
  if (isOnline) {
    friendStatusStyle.push(online);
  } else {
    friendStatusStyle.push(offline);
  }

  return (
    <li className={container}>
      <span className={friendStatusStyle.join(' ')} />
      <img src={avatar} alt={name} className={friendAvatar} />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: 'https://www.imanami.com/wp-content/uploads/2016/03/unknown-user.jpg',
  name: 'Anonym',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
