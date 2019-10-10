import React from 'react';
import Profile from './Profile';
import user from './Profile/user';
import Stats from './Stats';
import stats from './Stats/stats';
import FriendList from './FriendList';
import friends from './FriendList/friends';

const App = () => {
  return (
    <React.Fragment key={1}>
      <Profile user={user} />
      <Stats title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
    </React.Fragment>
  );
};

export default App;
