import React from 'react';
import Profile from './Profile';
import user from './Profile/user';
import Stats from './Stats';

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

const App = () => {
  return (
    <React.Fragment key={1}>
      <Profile user={user} />
      <Stats title="Upload stats" stats={stats} />
    </React.Fragment>
  );
};

export default App;
