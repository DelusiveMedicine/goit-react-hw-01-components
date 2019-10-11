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
    regularText,
    boldText,
  } = styles;

  const firstUserStatsItem = [userStatsItem, leftBorderBottom];
  const lastUserStatsItem = [userStatsItem, rightBorderBottom];
  const userNameStyle = [regularText, boldText];

  return (
    <div className={container}>
      <div className={userCard}>
        <img src={avatar} alt={`${name} avatar`} className={userPhoto} />
        <p className={userNameStyle.join(' ')}>{name}</p>
        <p className={regularText}>{`@${tag}`}</p>
        <p className={regularText}>{location}</p>
      </div>
      <ul className={userStats}>
        <li className={firstUserStatsItem.join(' ')}>
          <span className={regularText}>Followers</span>
          <span className={boldText}>{followers}</span>
        </li>
        <li className={userStatsItem}>
          <span className={regularText}>Views</span>
          <span className={boldText}>{views}</span>
        </li>
        <li className={lastUserStatsItem.join(' ')}>
          <span className={regularText}>Likes</span>
          <span className={boldText}>{likes}</span>
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
