import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar'
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`App ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
