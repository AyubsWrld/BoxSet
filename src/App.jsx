import React from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';
import StringStringFruit from './components/StringStringFruit.jsx';

function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <StringStringFruit position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
