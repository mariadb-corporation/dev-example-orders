import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <p className="title-text">MariaDB storage engine testing tool</p>
        <p className="sub-title-text">A MariaDB Demo</p>
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
