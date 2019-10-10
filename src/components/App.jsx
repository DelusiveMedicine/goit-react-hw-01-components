import React from 'react';
import Profile from './Profile';
import user from './Profile/user';
import Stats from './Stats';
import stats from './Stats/stats';
import FriendList from './FriendList';
import friends from './FriendList/friends';
import TransactionHistory from './TransactionHistory';
import transactions from './TransactionHistory/transactions';

const App = () => {
  return (
    <React.Fragment key={1}>
      <Profile user={user} />
      <Stats title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </React.Fragment>
  );
};

export default App;
