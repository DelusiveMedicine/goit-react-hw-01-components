import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

const Friendlist = ({ friends }) => {
  const { container } = styles;
  return (
    <ul className={container}>
      {friends.map(friend => {
        const { id, avatar, name, isOnline } = friend;
        return (
          <FriendListItem
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
