import { useState } from 'react';
import { useImmer } from 'use-immer';

import { getInitialProfile } from '../js/profileStorage';
import '../styles/App.css';
import Header from './Header';
import Main from './Main';
import Navigation from './Navigation';

function App() {
  const [profile, setProfile] = useImmer(getInitialProfile);
  const [currentView, setCurrentView] = useState('personal-details');

  return (
    <>
      <Header />
      <Navigation {...{ currentView, setCurrentView }} />
      <Main {...{ currentView, profile, setProfile }} />
    </>
  );
}

export default App;
