// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import WelcomeMessage from './components/WelcomeMessage'
// import Header from './components/Header'
// import MainContent from './components/MainContent'
// import Footer from './components/Footer.jsx'
// import UserProfile from './components/UserProfile.jsx'
import React from 'react';
import ProfilePage from './components/ProfilePage';
import userContext from './components/UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };  

  return(
  <userContext.Provider value={userData}>
   <ProfilePage />
  </userContext.Provider>
  // <ProfilePage />
  );
}

export default App
