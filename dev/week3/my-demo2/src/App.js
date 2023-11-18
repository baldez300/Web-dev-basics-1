import React from 'react';
import Gallery from './components/Gallery'; // Import the Gallery component
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Gallery /> {/* Include the Gallery component here */}
      </header>
    </div>
  );
}

export default App;
