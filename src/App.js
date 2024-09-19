import React from 'react';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ padding: '20px' }}>
        <h1>Welcome to My Website</h1>
        <p>This is a simple page with a navigation bar built in React.</p>
      </div>
    </div>
  );
}

export default App;
