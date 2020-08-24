import React from 'react';
import './App.css';
import Homepage from './elements/Homepage/Homepage';
import ErrorBoundary from './elements/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Homepage />
      </ErrorBoundary>
    </div>
  );
}

export default App;
