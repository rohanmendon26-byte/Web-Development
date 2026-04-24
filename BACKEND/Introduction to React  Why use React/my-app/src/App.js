import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <Navbar logoText="RohanMendon"/>
      <div className="value">{value}</div>
      <button onClick={() => setValue(value+1)}>Click me</button>
    </div>
  );
}
export default App;
