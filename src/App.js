
import React, { useState } from 'react';
import './App.css';



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      id="app"
      style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}
    >
      <h1 style={{color: isDarkMode ? 'white':'black'}}>Hoş Geldiniz</h1>
      <button onClick={toggleDarkMode} style={{ backgroundColor: isDarkMode ? 'white' : 'black', color: isDarkMode ? 'black' : 'white' }}>Dark Mode</button>
    </div>
  );
}

export default App;
