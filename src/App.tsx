import React from 'react';
import NavigationBar from "./Components/Shared/NavigationBar/NavigationBar";
import './App.css';
import Instruments from './Components/Instruments/Instruments';

function App() {
  return (
    <main >
      <NavigationBar />
      <Instruments />
    </main>
  );
}

export default App;
