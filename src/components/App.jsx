import React from 'react';
import Profile from './Profile/Profile';
import user from './Profile/user';
import Stats from './Stats/Stats';
import statistics from './Stats/statistics';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions';

const App = () => (
  <React.Fragment key={1}>
    <Profile user={user} />
    <Stats title="Upload stats" stats={statistics} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </React.Fragment>
);

export default App;
