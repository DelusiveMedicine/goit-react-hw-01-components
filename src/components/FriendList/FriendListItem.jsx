import React from 'react';
import PropTypes from 'prop-types';

const FriendlistItem = ({ avatar, name, isOnline }) => {
  return (
    <li>
      <span>.</span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendlistItem.defaultProps = {
  avatar: 'https://www.imanami.com/wp-content/uploads/2016/03/unknown-user.jpg',
  name: 'Anonym',
};

FriendlistItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendlistItem;
