import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  const { avatar, name, tag, location, stats } = user;
  const { followers, views, likes } = stats;
  const {
    container,
    userCard,
    userPhoto,
    userStats,
    userStatsItem,
    leftBorderBottom,
    rightBorderBottom,
  } = styles;

  const firstUserStatsItem = [userStatsItem, leftBorderBottom];
  const lastUserStatsItem = [userStatsItem, rightBorderBottom];

  return (
    <div className={container}>
      <div className={userCard}>
        <img src={avatar} alt={`${name} avatar`} className={userPhoto} />
        <p>{name}</p>
        <p>{`@${tag}`}</p>
        <p>{location}</p>
      </div>
      <ul className={userStats}>
        <li className={firstUserStatsItem.join(' ')}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={userStatsItem}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={lastUserStatsItem.join(' ')}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }).isRequired,
};

export default Profile;
