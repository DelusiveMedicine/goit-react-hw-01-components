import React from 'react';
import PropTypes from 'prop-types';
import FriendlistItem from './FriendListItem';

const Friendlist = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
        const { id, avatar, name, isOnline } = friend;
        return (
          <FriendlistItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

Friendlist.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Friendlist;
